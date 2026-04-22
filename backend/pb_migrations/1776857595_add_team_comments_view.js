/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const questionKeys = [
    "delivering_value",
    "codebase_health",
    "task_planning_and_priority",
    "information_sharing",
    "team_work",
    "events",
    "learning_and_fun",
    "pawns_or_players",
    "product_ownership",
    "speed_and_incremental_deliveries",
    "easy_to_release",
    "suitable_processes",
    "tooling",
    "support",
    "manager_leads_team_by_example"
  ];

  const commentSelects = questionKeys
    .map((k) => `       th.${k}_comment as ${k}_comment`)
    .join(",\n");

  const viewQuery =
    "SELECT th.id as id, th.sprint as sprint, u.team as team, \n" +
    commentSelects + " \n" +
    "FROM team_health th \n" +
    "JOIN users u ON th.user = u.id";

  const collection = new Collection({
    type: "view",
    name: "team_comments",
    listRule: "@request.auth.id != \"\"",
    viewRule: "@request.auth.id != \"\"",
    viewQuery: viewQuery
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("team_comments");
  return app.delete(collection);
});
