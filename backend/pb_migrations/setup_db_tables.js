/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
      {
          "id": "_pb_users_auth_",
          "name": "users",
          "type": "auth",
          "fields": [
              {
                  "autogeneratePattern": "[a-z0-9]{15}",
                  "hidden": false,
                  "id": "text3208210256",
                  "max": 15,
                  "min": 15,
                  "name": "id",
                  "pattern": "^[a-z0-9]+$",
                  "presentable": false,
                  "primaryKey": true,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "cost": 10,
                  "hidden": true,
                  "id": "password901924565",
                  "min": 8,
                  "name": "password",
                  "pattern": "",
                  "presentable": false,
                  "required": true,
                  "system": true,
                  "type": "password"
              },
              {
                  "autogeneratePattern": "[a-zA-Z0-9_]{50}",
                  "hidden": true,
                  "id": "text2504183744",
                  "max": 60,
                  "min": 30,
                  "name": "tokenKey",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "exceptDomains": null,
                  "hidden": false,
                  "id": "email3885137012",
                  "name": "email",
                  "onlyDomains": null,
                  "presentable": false,
                  "required": false,
                  "system": true,
                  "type": "email"
              },
              {
                  "hidden": false,
                  "id": "bool1547992806",
                  "name": "emailVisibility",
                  "presentable": false,
                  "required": false,
                  "system": true,
                  "type": "bool"
              },
              {
                  "hidden": false,
                  "id": "bool256245529",
                  "name": "verified",
                  "presentable": false,
                  "required": false,
                  "system": true,
                  "type": "bool"
              },
              {
                  "autogeneratePattern": "users[0-9]{6}",
                  "hidden": false,
                  "id": "text4166911607",
                  "max": 150,
                  "min": 3,
                  "name": "username",
                  "pattern": "^[\\w][\\w\\.\\-]*$",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "users_name",
                  "max": 0,
                  "min": 0,
                  "name": "name",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": false,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "users_avatar",
                  "maxSelect": 1,
                  "maxSize": 5242880,
                  "mimeTypes": [
                      "image/jpeg",
                      "image/png",
                      "image/svg+xml",
                      "image/gif",
                      "image/webp"
                  ],
                  "name": "avatar",
                  "presentable": false,
                  "protected": false,
                  "required": false,
                  "system": false,
                  "thumbs": null,
                  "type": "file"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "sz38qn5q",
                  "max": 0,
                  "min": 0,
                  "name": "team",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "autodate2990389176",
                  "name": "created",
                  "onCreate": true,
                  "onUpdate": false,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
              },
              {
                  "hidden": false,
                  "id": "autodate3332085495",
                  "name": "updated",
                  "onCreate": true,
                  "onUpdate": true,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
              }
          ],
          "indexes": [
              "CREATE UNIQUE INDEX `__pb_users_auth__username_idx` ON `users` (username COLLATE NOCASE)",
              "CREATE UNIQUE INDEX `__pb_users_auth__email_idx` ON `users` (`email`) WHERE `email` != ''",
              "CREATE UNIQUE INDEX `__pb_users_auth__tokenKey_idx` ON `users` (`tokenKey`)"
          ],
          "listRule": "id = @request.auth.id",
          "viewRule": "id = @request.auth.id",
          "createRule": "",
          "updateRule": "id = @request.auth.id",
          "deleteRule": "id = @request.auth.id",
          "options": {
              "authAlert": {
                  "emailTemplate": {
                      "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location:</p>\n<p><em>{ALERT_INFO}</em></p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>If this was you, you may disregard this email.</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
                      "subject": "Login from a new location"
                  },
                  "enabled": true
              },
              "authRule": "",
              "authToken": {
                  "duration": 1209600,
                  "secret": "CdNUGLZiQR8HMyPn6LHSGVI0VhMYhA4pCeOTNmWTDsvhm6E2GS"
              },
              "confirmEmailChangeTemplate": {
                  "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
                  "subject": "Confirm your {APP_NAME} new email address"
              },
              "emailChangeToken": {
                  "duration": 1800,
                  "secret": "OLSbvCXgpY88KlC5vWPiiZzKzQOcS9cbEX7opFP3E44EjcK4yv"
              },
              "fileToken": {
                  "duration": 120,
                  "secret": "CHwx8b46SZ7h2wrZnpQ9HnO5Fe9MK9bOk13RoFsMd5TbtKdadi"
              },
              "manageRule": null,
              "mfa": {
                  "duration": 1800,
                  "enabled": false,
                  "rule": ""
              },
              "oauth2": {
                  "enabled": false,
                  "mappedFields": {
                      "username": "username"
                  },
                  "providers": []
              },
              "otp": {
                  "duration": 180,
                  "emailTemplate": {
                      "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
                      "subject": "OTP for {APP_NAME}"
                  },
                  "enabled": false,
                  "length": 8
              },
              "passwordAuth": {
                  "enabled": true,
                  "identityFields": [
                      "email",
                      "username"
                  ]
              },
              "passwordResetToken": {
                  "duration": 1800,
                  "secret": "rN790e9DD5wUeTVQiDKgylGk6cB92tWEEgZbZrhGPuI7zVDSZz"
              },
              "resetPasswordTemplate": {
                  "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
                  "subject": "Reset your {APP_NAME} password"
              },
              "verificationTemplate": {
                  "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
                  "subject": "Verify your {APP_NAME} email"
              },
              "verificationToken": {
                  "duration": 604800,
                  "secret": "bxJHUUGheYBuWZPcQNQeIq1rXfJbHfW2KN1Cauua8NwVEb78IJ"
              }
          }
      },
      {
          "id": "ivw9jslk6j7bq49",
          "name": "team_health",
          "type": "base",
          "fields": [
              {
                  "autogeneratePattern": "[a-z0-9]{15}",
                  "hidden": false,
                  "id": "text3208210256",
                  "max": 15,
                  "min": 15,
                  "name": "id",
                  "pattern": "^[a-z0-9]+$",
                  "presentable": false,
                  "primaryKey": true,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "tutmai8t",
                  "max": 6,
                  "min": 6,
                  "name": "sprint",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "pefjsopq",
                  "max": 2,
                  "min": -2,
                  "name": "delivering_value",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "fvzhpd2u",
                  "max": 2,
                  "min": -2,
                  "name": "codebase_health",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "wsxypfv4",
                  "max": 2,
                  "min": -2,
                  "name": "task_planning_and_priority",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "f8e1gbix",
                  "max": 2,
                  "min": -2,
                  "name": "information_sharing",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "naxnrywz",
                  "max": 2,
                  "min": -2,
                  "name": "team_work",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "tdn7rkcd",
                  "max": 2,
                  "min": -2,
                  "name": "events",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "y5huipbl",
                  "max": null,
                  "min": null,
                  "name": "learning_and_fun",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "par107in",
                  "max": 2,
                  "min": -2,
                  "name": "pawns_or_players",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "bsd7cl5y",
                  "max": 2,
                  "min": -2,
                  "name": "product_ownership",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "3zf03jpr",
                  "max": 2,
                  "min": -2,
                  "name": "speed_and_incremental_deliveries",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "owsdellw",
                  "max": 2,
                  "min": -2,
                  "name": "easy_to_release",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "xssfylem",
                  "max": 2,
                  "min": -2,
                  "name": "suitable_processes",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "2otwnaxn",
                  "max": 2,
                  "min": -2,
                  "name": "tooling",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "oswgt6mc",
                  "max": 2,
                  "min": -2,
                  "name": "support",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "hidden": false,
                  "id": "j1d1ccp6",
                  "max": 2,
                  "min": -2,
                  "name": "manager_leads_team_by_example",
                  "onlyInt": false,
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "number"
              },
              {
                  "cascadeDelete": false,
                  "collectionId": "_pb_users_auth_",
                  "hidden": false,
                  "id": "5tklw8iw",
                  "maxSelect": 1,
                  "minSelect": 0,
                  "name": "user",
                  "presentable": false,
                  "required": true,
                  "system": false,
                  "type": "relation"
              },
              {
                  "hidden": false,
                  "id": "autodate2990389176",
                  "name": "created",
                  "onCreate": true,
                  "onUpdate": false,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
              },
              {
                  "hidden": false,
                  "id": "autodate3332085495",
                  "name": "updated",
                  "onCreate": true,
                  "onUpdate": true,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
              }
          ],
          "indexes": [],
          "listRule": "",
          "viewRule": "",
          "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.body.user",
          "updateRule": null,
          "deleteRule": null,
          "options": {}
      },
      {
          "id": "k1uqbtp2zqi6lj2",
          "name": "org_summary",
          "type": "view",
          "fields": [
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "text3208210256",
                  "max": 0,
                  "min": 0,
                  "name": "id",
                  "pattern": "^[a-z0-9]+$",
                  "presentable": false,
                  "primaryKey": true,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "_clone_Oxa3",
                  "max": 6,
                  "min": 6,
                  "name": "sprint",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "json440997458",
                  "maxSize": 1,
                  "name": "delivering_value",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3982472932",
                  "maxSize": 1,
                  "name": "codebase_health",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json278878284",
                  "maxSize": 1,
                  "name": "task_planning_and_priority",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3014675705",
                  "maxSize": 1,
                  "name": "information_sharing",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2192547067",
                  "maxSize": 1,
                  "name": "team_work",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json1401378634",
                  "maxSize": 1,
                  "name": "events",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json221312753",
                  "maxSize": 1,
                  "name": "learning_and_fun",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3265272534",
                  "maxSize": 1,
                  "name": "pawns_or_players",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json1982880281",
                  "maxSize": 1,
                  "name": "product_ownership",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json1657833134",
                  "maxSize": 1,
                  "name": "speed_and_incremental_deliveries",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json292962947",
                  "maxSize": 1,
                  "name": "easy_to_release",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3312309648",
                  "maxSize": 1,
                  "name": "suitable_processes",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2044034195",
                  "maxSize": 1,
                  "name": "tooling",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2147806117",
                  "maxSize": 1,
                  "name": "support",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2348550007",
                  "maxSize": 1,
                  "name": "manager_leads_team_by_example",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              }
          ],
          "indexes": [],
          "listRule": "",
          "viewRule": "",
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "viewQuery": "SELECT id, sprint, AVG(delivering_value) as delivering_value, AVG(codebase_health) as codebase_health, \n       AVG(task_planning_and_priority) as task_planning_and_priority, AVG(information_sharing) as information_sharing, \n       AVG(team_work) as team_work, AVG(events) as events, AVG(learning_and_fun) as learning_and_fun, \n       AVG(pawns_or_players) as pawns_or_players, AVG(product_ownership) as product_ownership, \n       AVG(speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(easy_to_release) as easy_to_release, \n       AVG(suitable_processes) as suitable_processes, AVG(tooling) as tooling, AVG(support) as support, \n       AVG(manager_leads_team_by_example) as manager_leads_team_by_example \nFROM team_health \nGROUP BY sprint",
          "options": {}
      },
      {
          "id": "rgnftve7fqaexp0",
          "name": "team_summary",
          "type": "view",
          "fields": [
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "text3208210256",
                  "max": 0,
                  "min": 0,
                  "name": "id",
                  "pattern": "^[a-z0-9]+$",
                  "presentable": false,
                  "primaryKey": true,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "_clone_hMF1",
                  "max": 0,
                  "min": 0,
                  "name": "team",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "_clone_e7Lt",
                  "max": 6,
                  "min": 6,
                  "name": "sprint",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "json440997458",
                  "maxSize": 1,
                  "name": "delivering_value",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3982472932",
                  "maxSize": 1,
                  "name": "codebase_health",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json278878284",
                  "maxSize": 1,
                  "name": "task_planning_and_priority",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3014675705",
                  "maxSize": 1,
                  "name": "information_sharing",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2192547067",
                  "maxSize": 1,
                  "name": "team_work",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json1401378634",
                  "maxSize": 1,
                  "name": "events",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json221312753",
                  "maxSize": 1,
                  "name": "learning_and_fun",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3265272534",
                  "maxSize": 1,
                  "name": "pawns_or_players",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json1982880281",
                  "maxSize": 1,
                  "name": "product_ownership",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json1657833134",
                  "maxSize": 1,
                  "name": "speed_and_incremental_deliveries",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json292962947",
                  "maxSize": 1,
                  "name": "easy_to_release",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json3312309648",
                  "maxSize": 1,
                  "name": "suitable_processes",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2044034195",
                  "maxSize": 1,
                  "name": "tooling",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2147806117",
                  "maxSize": 1,
                  "name": "support",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              },
              {
                  "hidden": false,
                  "id": "json2348550007",
                  "maxSize": 1,
                  "name": "manager_leads_team_by_example",
                  "presentable": false,
                  "required": false,
                  "system": false,
                  "type": "json"
              }
          ],
          "indexes": [],
          "listRule": "",
          "viewRule": "",
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "viewQuery": "SELECT (ROW_NUMBER() OVER()) as id, u.team, th.sprint, AVG(th.delivering_value) as delivering_value, AVG(th.codebase_health) as codebase_health, \n       AVG(th.task_planning_and_priority) as task_planning_and_priority, AVG(th.information_sharing) as information_sharing, \n       AVG(th.team_work) as team_work, AVG(th.events) as events, AVG(th.learning_and_fun) as learning_and_fun, \n       AVG(th.pawns_or_players) as pawns_or_players, AVG(th.product_ownership) as product_ownership, \n       AVG(th.speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(th.easy_to_release) as easy_to_release, \n       AVG(th.suitable_processes) as suitable_processes, AVG(th.tooling) as tooling, AVG(th.support) as support, \n       AVG(th.manager_leads_team_by_example) as manager_leads_team_by_example \nFROM team_health th \nJOIN users u ON th.user = u.id \nGROUP BY u.team, th.sprint",
          "options": {}
      },
      {
          "id": "4b5hifaqbbhe2d3",
          "name": "teams",
          "type": "base",
          "fields": [
              {
                  "autogeneratePattern": "[a-z0-9]{15}",
                  "hidden": false,
                  "id": "text3208210256",
                  "max": 15,
                  "min": 15,
                  "name": "id",
                  "pattern": "^[a-z0-9]+$",
                  "presentable": false,
                  "primaryKey": true,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "apzwbyjv",
                  "max": 50,
                  "min": 2,
                  "name": "team",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "2vuxzqv4",
                  "max": 50,
                  "min": 3,
                  "name": "org",
                  "pattern": "",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "autodate2990389176",
                  "name": "created",
                  "onCreate": true,
                  "onUpdate": false,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
              },
              {
                  "hidden": false,
                  "id": "autodate3332085495",
                  "name": "updated",
                  "onCreate": true,
                  "onUpdate": true,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
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
          "name": "sprints",
          "type": "base",
          "fields": [
              {
                  "autogeneratePattern": "[a-z0-9]{15}",
                  "hidden": false,
                  "id": "text3208210256",
                  "max": 15,
                  "min": 15,
                  "name": "id",
                  "pattern": "^[a-z0-9]+$",
                  "presentable": false,
                  "primaryKey": true,
                  "required": true,
                  "system": true,
                  "type": "text"
              },
              {
                  "autogeneratePattern": "",
                  "hidden": false,
                  "id": "w5kafjsx",
                  "max": 6,
                  "min": 6,
                  "name": "sprint",
                  "pattern": "FB([2-9][3-9]|9[0-9])(0[1-9]|1[0-3])",
                  "presentable": false,
                  "primaryKey": false,
                  "required": true,
                  "system": false,
                  "type": "text"
              },
              {
                  "hidden": false,
                  "id": "autodate2990389176",
                  "name": "created",
                  "onCreate": true,
                  "onUpdate": false,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
              },
              {
                  "hidden": false,
                  "id": "autodate3332085495",
                  "name": "updated",
                  "onCreate": true,
                  "onUpdate": true,
                  "presentable": false,
                  "system": false,
                  "type": "autodate"
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

  return app.importCollections(snapshot, true);
}, (app) => {
  return null;
});
