migrate((db) => {
  const snapshot = [
    {
      "id": "ivw9jslk6j7bq49",
      "created": "2023-03-27 13:26:40.440Z",
      "updated": "2023-03-29 04:49:03.336Z",
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
          "name": "code_base_health",
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
          "name": "leading_team_by_example",
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
      "indexes": [
        "CREATE INDEX `_ivw9jslk6j7bq49_created_idx` ON \"team_health\" (`created`)"
      ],
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
      "updated": "2023-05-11 09:39:46.631Z",
      "name": "org_summary",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "xxr2hjx9",
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
          "id": "emxo0j64",
          "name": "delivering_value",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "3yux0tkq",
          "name": "code_base_health",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "huebtcll",
          "name": "task_planning_and_priority",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "k82cv5nt",
          "name": "information_sharing",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "7qnhkxyu",
          "name": "team_work",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "tnforrjh",
          "name": "events",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "qcbvtbn8",
          "name": "learning_and_fun",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "68hclerw",
          "name": "pawns_or_players",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "95t2tly1",
          "name": "product_ownership",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "svi5qrgk",
          "name": "speed_and_incremental_deliveries",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "l4pugktm",
          "name": "easy_to_release",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "8gx8pkla",
          "name": "suitable_processes",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "rshpd2z2",
          "name": "tooling",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "no0epwhv",
          "name": "support",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "bdnhpwjl",
          "name": "leading_team_by_example",
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
        "query": "SELECT id, sprint, AVG(delivering_value) as delivering_value, AVG(code_base_health) as code_base_health, \n       AVG(task_planning_and_priority) as task_planning_and_priority, AVG(information_sharing) as information_sharing, \n       AVG(team_work) as team_work, AVG(events) as events, AVG(learning_and_fun) as learning_and_fun, \n       AVG(pawns_or_players) as pawns_or_players, AVG(product_ownership) as product_ownership, \n       AVG(speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(easy_to_release) as easy_to_release, \n       AVG(suitable_processes) as suitable_processes, AVG(tooling) as tooling, AVG(support) as support, \n       AVG(leading_team_by_example) as leading_team_by_example \nFROM team_health \nGROUP BY sprint;"
      }
    },
    {
      "id": "rgnftve7fqaexp0",
      "created": "2023-03-28 16:15:45.034Z",
      "updated": "2023-05-11 09:39:46.633Z",
      "name": "team_summary",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "styfpbsf",
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
          "id": "ffmumrah",
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
          "id": "0nidxsyk",
          "name": "delivering_value",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "mzbpnzat",
          "name": "code_base_health",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "qazj7ido",
          "name": "task_planning_and_priority",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "pt35tmta",
          "name": "information_sharing",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "hrjiwtmq",
          "name": "team_work",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "iohfjxf4",
          "name": "events",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "7fpnfn7c",
          "name": "learning_and_fun",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "nvffknii",
          "name": "pawns_or_players",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "zdezlpmt",
          "name": "product_ownership",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "sc6sbd5h",
          "name": "speed_and_incremental_deliveries",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "gyu2pkdr",
          "name": "easy_to_release",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "e7rjwhvy",
          "name": "suitable_processes",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "buuthzoh",
          "name": "tooling",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "frve0ijh",
          "name": "support",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "xscuryqg",
          "name": "leading_team_by_example",
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
        "query": "SELECT (ROW_NUMBER() OVER()) as id, u.team, th.sprint, AVG(th.delivering_value) as delivering_value, AVG(th.code_base_health) as code_base_health, \n       AVG(th.task_planning_and_priority) as task_planning_and_priority, AVG(th.information_sharing) as information_sharing, \n       AVG(th.team_work) as team_work, AVG(th.events) as events, AVG(th.learning_and_fun) as learning_and_fun, \n       AVG(th.pawns_or_players) as pawns_or_players, AVG(th.product_ownership) as product_ownership, \n       AVG(th.speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(th.easy_to_release) as easy_to_release, \n       AVG(th.suitable_processes) as suitable_processes, AVG(th.tooling) as tooling, AVG(th.support) as support, \n       AVG(th.leading_team_by_example) as leading_team_by_example \nFROM team_health th \nJOIN users u ON th.user = u.id \nGROUP BY u.team, th.sprint;"
      }
    },
    {
      "id": "_pb_users_auth_",
      "created": "2023-05-11 09:39:46.622Z",
      "updated": "2023-05-11 09:39:46.626Z",
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
      "indexes": [
        "CREATE INDEX `__pb_users_auth__created_idx` ON `users` (`created`)"
      ],
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
      "id": "u1jqeqn5wqxzpp4",
      "created": "2023-05-11 09:42:17.484Z",
      "updated": "2023-05-11 09:43:19.595Z",
      "name": "teams",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ns29d1as",
          "name": "team",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 2,
            "max": 50,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "rxr0ysbo",
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
      "id": "7vheb2fp2fcgbmf",
      "created": "2023-05-11 09:43:12.867Z",
      "updated": "2023-05-11 09:43:12.867Z",
      "name": "sprints",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "268krrq5",
          "name": "sprint",
          "type": "text",
          "required": true,
          "unique": false,
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
