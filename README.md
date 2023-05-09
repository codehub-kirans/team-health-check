# Team Health Check

A team (squad) health check application to help build team awareness and perspective.

<p align="center">
  <img alt="Team Dashboard" src="https://github.com/codehub-kirans/team-health-check/blob/main/static/dashboard-example.png?raw=true">
</p>

## Running the application locally

1.  Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), download the pocketbase binary for your platform from https://pocketbase.io/docs/. Extract the contents of the downloaded archive under the backend directory

2. Start the backend server ():

```bash
# Admin UI will be available at the default port 8090
# http://127.0.0.1:8090
./backend/pocketbase serve
```

#### For reference, the migration script creates the following tables for users and team_health

users table

```bash
"username"
"email
"password"

```

team_health table

```bash
"sprint"
"delivering_value"
"code_base_health"
"task_planning_and_priority"
"information_sharing"
"team_work"
"events"
"learning_and_fun"
"pawns_or_players"
"product_ownership"
"speed_and_incremental_deliveries"
"easy_to_release"
"suitable_processes"
"tooling"
"support"
"leading_team_by_example"
"user"

```

#### It also creates the view collection tables org_summary and team_summary with the following SQL queries:

org_summary:

```bash
SELECT id, sprint, AVG(delivering_value) as delivering_value, AVG(code_base_health) as code_base_health,
       AVG(task_planning_and_priority) as task_planning_and_priority, AVG(information_sharing) as information_sharing,
       AVG(team_work) as team_work, AVG(events) as events, AVG(learning_and_fun) as learning_and_fun,
       AVG(pawns_or_players) as pawns_or_players, AVG(product_ownership) as product_ownership,
       AVG(speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(easy_to_release) as easy_to_release,
       AVG(suitable_processes) as suitable_processes, AVG(tooling) as tooling, AVG(support) as support,
       AVG(leading_team_by_example) as leading_team_by_example
FROM team_health
GROUP BY sprint;
```

team_summary:

```bash
SELECT (ROW_NUMBER() OVER()) as id, u.team, th.sprint, AVG(th.delivering_value) as delivering_value, AVG(th.code_base_health) as code_base_health,
       AVG(th.task_planning_and_priority) as task_planning_and_priority, AVG(th.information_sharing) as information_sharing,
       AVG(th.team_work) as team_work, AVG(th.events) as events, AVG(th.learning_and_fun) as learning_and_fun,
       AVG(th.pawns_or_players) as pawns_or_players, AVG(th.product_ownership) as product_ownership,
       AVG(th.speed_and_incremental_deliveries) as speed_and_incremental_deliveries, AVG(th.easy_to_release) as easy_to_release,
       AVG(th.suitable_processes) as suitable_processes, AVG(th.tooling) as tooling, AVG(th.support) as support,
       AVG(th.leading_team_by_example) as leading_team_by_example
FROM team_health th
JOIN users u ON th.user = u.id
GROUP BY u.team, th.sprint;
```


4.  Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## That's it, folks!
