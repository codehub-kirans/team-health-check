migrate((db) => {
  const snapshot = [
    {
      "id": "ivw9jslk6j7bq49",
      "created": "2023-03-27 13:26:40.440Z",
      "updated": "2023-05-11 18:10:33.452Z",
      "name": "team_health",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "tutmai8t",
          "name": "sprint",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 6,
            "max": 6,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "pefjsopq",
          "name": "delivering_value",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "fvzhpd2u",
          "name": "codebase_health",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "wsxypfv4",
          "name": "task_planning_and_priority",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "f8e1gbix",
          "name": "information_sharing",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "naxnrywz",
          "name": "team_work",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "tdn7rkcd",
          "name": "events",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "y5huipbl",
          "name": "learning_and_fun",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "par107in",
          "name": "pawns_or_players",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "bsd7cl5y",
          "name": "product_ownership",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "3zf03jpr",
          "name": "speed_and_incremental_deliveries",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "owsdellw",
          "name": "easy_to_release",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "xssfylem",
          "name": "suitable_processes",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "2otwnaxn",
          "name": "tooling",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "oswgt6mc",
          "name": "support",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "j1d1ccp6",
          "name": "manager_leads_team_by_example",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": -2,
            "max": 2
          }
        },
        {
          "system": false,
          "id": "5tklw8iw",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "email"
            ]
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.data.user",
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "k1uqbtp2zqi6lj2",
      "created": "2023-03-28 15:14:40.691Z",
      "updated": "2023-05-11 18:10:58.745Z",
      "name": "org_summary",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "tutmai8t",
          "name": "sprint",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 6,
            "max": 6,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "tswzh0qo",
          "name": "delivering_value",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "wz5tyvre",
          "name": "codebase_health",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "bg0llc1g",
          "name": "task_planning_and_priority",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "jh1wwuoh",
          "name": "information_sharing",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "cv7y9mqf",
          "name": "team_work",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "pducswvz",
          "name": "events",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "4yry8ycq",
          "name": "learning_and_fun",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "hbdmfwuy",
          "name": "pawns_or_players",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "c0hpev9k",
          "name": "product_ownership",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "j9btwxps",
          "name": "speed_and_incremental_deliveries",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "spesadmz",
          "name": "easy_to_release",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "uo2mfw6a",
          "name": "suitable_processes",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "haznfxny",
          "name": "tooling",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "pqko2gjo",
          "name": "support",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "jkymrwr1",
          "name": "manager_leads_team_by_example",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {
        "query": "SELECT id, sprint, AVG(delivering_value) as delivering_value, AVG(codebase_health) as codebase_health, \n       AVG(task_planning_and_priority) as task_planning_and_priority, AVG(information_sharing) as information_sharing, \n       AVG(team_work) as team_work, AVG(events) as events, AVG(learning_and_fun) as learning_and_fun, \n       AVG(pawns_or_players) as pawns_or_players, AVG(product_ownership) as product_ownership, \n       AVG(speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(easy_to_release) as easy_to_release, \n       AVG(suitable_processes) as suitable_processes, AVG(tooling) as tooling, AVG(support) as support, \n       AVG(manager_leads_team_by_example) as manager_leads_team_by_example \nFROM team_health \nGROUP BY sprint;"
      }
    },
    {
      "id": "rgnftve7fqaexp0",
      "created": "2023-03-28 16:15:45.034Z",
      "updated": "2023-05-11 18:11:12.342Z",
      "name": "team_summary",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "sz38qn5q",
          "name": "team",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "tutmai8t",
          "name": "sprint",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 6,
            "max": 6,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "n6gfjgnd",
          "name": "delivering_value",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "t7eqqcpx",
          "name": "codebase_health",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "foo4iqcq",
          "name": "task_planning_and_priority",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "qhqcvux3",
          "name": "information_sharing",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "v08q8ruz",
          "name": "team_work",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "8cgtgeh6",
          "name": "events",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "1ikvstxb",
          "name": "learning_and_fun",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "cv8k8fx7",
          "name": "pawns_or_players",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "4uu9ibny",
          "name": "product_ownership",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "fngfetje",
          "name": "speed_and_incremental_deliveries",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "lnvm26nd",
          "name": "easy_to_release",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "1qy65fka",
          "name": "suitable_processes",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "sh89tsrk",
          "name": "tooling",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "zcynr0hl",
          "name": "support",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "f2fxcvja",
          "name": "manager_leads_team_by_example",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {
        "query": "SELECT (ROW_NUMBER() OVER()) as id, u.team, th.sprint, AVG(th.delivering_value) as delivering_value, AVG(th.codebase_health) as codebase_health, \n       AVG(th.task_planning_and_priority) as task_planning_and_priority, AVG(th.information_sharing) as information_sharing, \n       AVG(th.team_work) as team_work, AVG(th.events) as events, AVG(th.learning_and_fun) as learning_and_fun, \n       AVG(th.pawns_or_players) as pawns_or_players, AVG(th.product_ownership) as product_ownership, \n       AVG(th.speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(th.easy_to_release) as easy_to_release, \n       AVG(th.suitable_processes) as suitable_processes, AVG(th.tooling) as tooling, AVG(th.support) as support, \n       AVG(th.manager_leads_team_by_example) as manager_leads_team_by_example \nFROM team_health th \nJOIN users u ON th.user = u.id \nGROUP BY u.team, th.sprint;"
      }
    },
    {
      "id": "_pb_users_auth_",
      "created": "2023-05-08 08:02:00.098Z",
      "updated": "2023-05-09 13:14:42.526Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "sz38qn5q",
          "name": "team",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "4b5hifaqbbhe2d3",
      "created": "2023-05-09 13:21:47.850Z",
      "updated": "2023-05-09 13:36:01.961Z",
      "name": "teams",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "apzwbyjv",
          "name": "team",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 2,
            "max": 50,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "2vuxzqv4",
          "name": "org",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 3,
            "max": 50,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "8y0v0e5wt1os7ri",
      "created": "2023-05-09 17:20:49.638Z",
      "updated": "2023-05-09 17:34:01.596Z",
      "name": "sprints",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "w5kafjsx",
          "name": "sprint",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 6,
            "max": 6,
            "pattern": "FB([2-9][3-9]|9[0-9])(0[1-9]|1[0-3])"
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
