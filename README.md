# Team Health Check

Team (Squad) health check web application is a tool for quick assessment and visualization of
how Agile teams perform in three aspects: tech health, team health, and product health. It
uses a set of behaviour anchors on relevant themes for a high performing team to discuss and
capture sentiment. For each question or theme, the team/squad discusses if they are closer to
“awesome” or closer to “bad”, which colour to choose for that indicator, and what the trend is
(stable, improving, or getting worse). For example, the theme "can we release easily?" might
elicit responses of "our releases are good/meh/bad" i.e. green, amber and red, the colours of
a traffic light.

<span style="color:green;">**GREEN**</span>: Things are going very well. Although this does not mean that everything is perfect the team or squad is satisfied and does not see much space for improvement.  
<span style="color: #ffcc00;">**AMBER**</span>: There are some problems that need to be solved. However, it is not a disaster.  
<span style="color: red;">**RED**</span>: There is a lot going wrong. Improvements are urgently needed.

The main purpose of this model is to help teams build up self-awareness about what's working and what's not, and to identify improvement opportunities. It also provides leaders with a way to support, not judge, teams. The app gathers feedback from everyone in real time and calculates the results. The results are displayed in a multi-team-level visualization, so that patterns and trends can be observed and addressed. The app can also keep a track of the squads progress over time without the need for manual collation.

<p align="center">
  <img alt="Team Dashboard" src="https://github.com/codehub-kirans/team-health-check/blob/main/static/dashboard-example.png?raw=true">
</p>

## Running the application locally

1.  Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), download the pocketbase binary for your platform from https://pocketbase.io/docs/. Extract the contents of the downloaded archive under the backend directory

2.  Start the backend server. The db migration scripts automatically run on first startup to setup the db tables.

```bash
# Admin UI will be available at the default port 8090
# http://127.0.0.1:8090
./backend/pocketbase serve
```

3.  Start a development server:

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
