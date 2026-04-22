/// <reference path="../pb_data/types.d.ts" />
//
// Snapshot the user's team onto each team_health record at vote time.
// Without this, both team_summary and team_comments views attribute
// historical votes/comments to a user's *current* team, which is wrong
// when a user changes teams.
//
// Steps:
//   1. Add a `team` text field to `team_health` (required from now on, but
//      created without `required` so we can backfill existing rows first).
//   2. Backfill `team_health.team` from `users.team` for existing rows.
//   3. Make the field required.
//   4. Update the `team_summary` and `team_comments` views to use
//      `th.team` instead of `u.team` (no users join needed any more).

migrate((app) => {
  // 1. Add team field
  const th = app.findCollectionByNameOrId("team_health");
  if (!th.fields.find((f) => f.name === "team")) {
    th.fields.add(new TextField({
      name: "team",
      max: 100,
      required: false,
      presentable: false,
      system: false
    }));
    app.save(th);
  }

  // 2. Backfill from users.team
  app.db()
    .newQuery("UPDATE team_health SET team = (SELECT team FROM users WHERE users.id = team_health.user) WHERE team IS NULL OR team = ''")
    .execute();

  // 3. Make required
  const th2 = app.findCollectionByNameOrId("team_health");
  const teamField = th2.fields.find((f) => f.name === "team");
  if (teamField) {
    teamField.required = true;
    app.save(th2);
  }

  // 4. Update views to read team straight from team_health.
  const summaryQuery =
    "SELECT (ROW_NUMBER() OVER()) as id, th.team as team, th.sprint as sprint, " +
    "AVG(th.delivering_value) as delivering_value, AVG(th.codebase_health) as codebase_health, " +
    "AVG(th.task_planning_and_priority) as task_planning_and_priority, AVG(th.information_sharing) as information_sharing, " +
    "AVG(th.team_work) as team_work, AVG(th.events) as events, AVG(th.learning_and_fun) as learning_and_fun, " +
    "AVG(th.pawns_or_players) as pawns_or_players, AVG(th.product_ownership) as product_ownership, " +
    "AVG(th.speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(th.easy_to_release) as easy_to_release, " +
    "AVG(th.suitable_processes) as suitable_processes, AVG(th.tooling) as tooling, AVG(th.support) as support, " +
    "AVG(th.manager_leads_team_by_example) as manager_leads_team_by_example " +
    "FROM team_health th " +
    "GROUP BY th.team, th.sprint";

  const teamSummary = app.findCollectionByNameOrId("team_summary");
  teamSummary.viewQuery = summaryQuery;
  app.save(teamSummary);

  const questionKeys = [
    "delivering_value", "codebase_health", "task_planning_and_priority",
    "information_sharing", "team_work", "events", "learning_and_fun",
    "pawns_or_players", "product_ownership", "speed_and_incremental_deliveries",
    "easy_to_release", "suitable_processes", "tooling", "support",
    "manager_leads_team_by_example"
  ];

  const commentSelects = questionKeys
    .map((k) => `       th.${k}_comment as ${k}_comment`)
    .join(",\n");

  const commentsQuery =
    "SELECT th.id as id, th.sprint as sprint, th.team as team, \n" +
    commentSelects + " \n" +
    "FROM team_health th";

  const teamComments = app.findCollectionByNameOrId("team_comments");
  teamComments.viewQuery = commentsQuery;
  app.save(teamComments);

  return null;
}, (app) => {
  // Down migration

  // Restore team_summary view
  const oldSummaryQuery =
    "SELECT (ROW_NUMBER() OVER()) as id, u.team, th.sprint, " +
    "AVG(th.delivering_value) as delivering_value, AVG(th.codebase_health) as codebase_health, " +
    "AVG(th.task_planning_and_priority) as task_planning_and_priority, AVG(th.information_sharing) as information_sharing, " +
    "AVG(th.team_work) as team_work, AVG(th.events) as events, AVG(th.learning_and_fun) as learning_and_fun, " +
    "AVG(th.pawns_or_players) as pawns_or_players, AVG(th.product_ownership) as product_ownership, " +
    "AVG(th.speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(th.easy_to_release) as easy_to_release, " +
    "AVG(th.suitable_processes) as suitable_processes, AVG(th.tooling) as tooling, AVG(th.support) as support, " +
    "AVG(th.manager_leads_team_by_example) as manager_leads_team_by_example " +
    "FROM team_health th " +
    "JOIN users u ON th.user = u.id " +
    "GROUP BY u.team, th.sprint";

  const teamSummary = app.findCollectionByNameOrId("team_summary");
  teamSummary.viewQuery = oldSummaryQuery;
  app.save(teamSummary);

  const questionKeys = [
    "delivering_value", "codebase_health", "task_planning_and_priority",
    "information_sharing", "team_work", "events", "learning_and_fun",
    "pawns_or_players", "product_ownership", "speed_and_incremental_deliveries",
    "easy_to_release", "suitable_processes", "tooling", "support",
    "manager_leads_team_by_example"
  ];

  const commentSelects = questionKeys
    .map((k) => `       th.${k}_comment as ${k}_comment`)
    .join(",\n");

  const oldCommentsQuery =
    "SELECT th.id as id, th.sprint as sprint, u.team as team, \n" +
    commentSelects + " \n" +
    "FROM team_health th \n" +
    "JOIN users u ON th.user = u.id";

  const teamComments = app.findCollectionByNameOrId("team_comments");
  teamComments.viewQuery = oldCommentsQuery;
  app.save(teamComments);

  // Drop team field
  const th = app.findCollectionByNameOrId("team_health");
  const teamField = th.fields.find((f) => f.name === "team");
  if (teamField) {
    th.fields.remove(teamField.id);
    app.save(th);
  }

  return null;
});
