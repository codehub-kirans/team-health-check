/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("team_health");

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

  for (const key of questionKeys) {
    const fieldName = key + "_comment";
    if (collection.fields.find((f) => f.name === fieldName)) {
      continue;
    }
    collection.fields.add(new TextField({
      name: fieldName,
      max: 1000,
      required: false,
      presentable: false,
      system: false
    }));
  }

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("team_health");

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

  for (const key of questionKeys) {
    const fieldName = key + "_comment";
    const field = collection.fields.find((f) => f.name === fieldName);
    if (field) {
      collection.fields.remove(field.id);
    }
  }

  return app.save(collection);
});
