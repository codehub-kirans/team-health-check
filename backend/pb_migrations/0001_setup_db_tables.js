migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-03-25 11:39:01.542Z",
      "updated": "2023-03-29 04:49:03.329Z",
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
            "thumbs": null
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
      "updated": "2023-03-28 17:43:54.807Z",
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
          "id": "p6h89ypa",
          "name": "delivering_value",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "nzjaceg8",
          "name": "code_base_health",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "3cb0ums1",
          "name": "task_planning_and_priority",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "bwas5qdk",
          "name": "information_sharing",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "xbtzrk3p",
          "name": "team_work",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "yhipb7qr",
          "name": "events",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ixbjd5nh",
          "name": "learning_and_fun",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "uqecn7wn",
          "name": "pawns_or_players",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "e14vwq1s",
          "name": "product_ownership",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "lvtuyvkn",
          "name": "speed_and_incremental_deliveries",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "eckiaqbj",
          "name": "easy_to_release",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ftirwtjt",
          "name": "suitable_processes",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "8a6j7yw8",
          "name": "tooling",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "kqrcx7tb",
          "name": "support",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "azkmq6d2",
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
      "updated": "2023-03-28 17:44:12.560Z",
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
          "id": "kh79whw3",
          "name": "delivering_value",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "xaekbn3q",
          "name": "code_base_health",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "l7k2gm4i",
          "name": "task_planning_and_priority",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ayh0ami6",
          "name": "information_sharing",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ybcxyrr7",
          "name": "team_work",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "xh4p1wka",
          "name": "events",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "dsvpecyh",
          "name": "learning_and_fun",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "qtuwtkhb",
          "name": "pawns_or_players",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "s7aq8ytn",
          "name": "product_ownership",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "zdi9ofge",
          "name": "speed_and_incremental_deliveries",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "dkuwvrxs",
          "name": "easy_to_release",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "oeydjbmd",
          "name": "suitable_processes",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ndqoalac",
          "name": "tooling",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "3pff0vcx",
          "name": "support",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "rtde9k0m",
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
