/**
 * All of these values are used throughout the site 
 **/

export const siteTitle = 'Team Health Check'
export const siteDescription = 'A rapid health check application for a team'
export const siteURL = ''
export const siteLink = ''
export const siteAuthor = 'Kiran S'


// Controls the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	},
	{
		title: 'Register',
		route: '/register'
	},
	{
		title: 'Login',
		route: '/login'
	},
	{
		title: 'Team Dashboard',
		route: '/team-dashboard'
	},
	{
		title: 'My Dashboard',
		route: '/my-dashboard'
	},
	{
		title: 'Voting',
		route: '/voting'
	},
	{
		title: 'My Settings',
		route: '/my-settings'
	},
	{
		title: 'Logout',
		route: '/logout'
	},
]

//Controls the questionaire. When adding or deleting questions, ensure field name in the team_health db table is also reflected correctly with the same name (lowercase) where each spaces is replaced by an underscore(_)
export const surveyQuestions = [
	{
		question: "Delivering value",
		good: "We deliver great stuff! We're proud of it and our stakeholders are really happy.",
		bad: "We deliver bad quality. We are not proud of it and our stakeholders unhappy."
	},
	{
		question: "Code Base Health",
		good: "We're proud of the quality of our code! It is clean, easy to read and has great test coverage.",
		bad: "Our code is messy and difficult to maintain."
	},
	{
		question: "Task Planning And Priority",
		good: "I'm clear about the planned tasks and its priority in my backlog.",
		bad: "I'm not clear about my assigned tasks and its dependencies and I'm unsure if I can deliver on commitments."
	},
	{
		question: "Information sharing",
		good: "We always have the right information about changes/decisions that affect out work.",
		bad: "We never receive updates consistently and this affects our day to day work"
	},
	{
		question: "Team Work",
		good: "We are a great team that works great together. We respect each other and share appreciation for the good work.",
		bad: "We are a bunch of individuals who neither know nor care what the others on the team are doing."
	},
	{
		question: "Events",
		good: "Our meetings including standups, planning, reviews and retrospectives are regular and effective.",
		bad: "Our meetings are ineffective and do not follow a regular cadence."
	},
	{
		question: "Learning and Fun",
		good: "We are constantly learning new things and from our mistakes, upskilling ourselves along the way. We love our work and we have a lot of fun together.",
		bad: "The work is boring and we never have time to learn anything. Worse yet, we never learn from our mistakes."
	},
	{
		question: "Pawns or Players",
		good: "We are in control of our own destiny! We hava autonomy with purpose and mastery of our competence areas and decide what to build and how to build it.",
		bad: "We are just pawns in a game of chess with no influence over what we build or how we build it."
	},
	{
		question: "Product Ownership",
		good: "We are happy with the current state of our backlog and its relevance to the business.",
		bad: "Our backlog is messy and does not seem to deliver value for its stakeholders."
	},
	{
		question: "Speed And Incremental Deliveries",
		good: "We get stuff done really quickly! No waiting and no delays.",
		bad: "We never seem to get anything done. We keep getting stuck or interrupted. Stories keep getting stuck on dependencies."
	},
	{
		question: "Easy to release",
		good: "Releasing is simple, safe, painless and mostly automated.",
		bad: "Releasing is risky, painful, lots of manual work and takes forever."
	},
	{
		question: "Suitable processes",
		good: "Our way of working fits us perfectly.",
		bad: "Our way of working sucks!"
	},
	{
		question: "Tooling",
		good: "We are agile use productivity and engineering tools effectively to deliver greater value",
		bad: "We are unable to use contemporary tools and are stuck with old legacy tools."
	},
	{
		question: "Support",
		good: "We always get great support and help when we ask for it!",
		bad: "We keep getting stuck because we can't get the support and help that we ask for."
	},
	{
		question: "Leading Team by Example",
		good: "Our manager always leads by example and can be trusted to follow through on promised actions",
		bad: "Our manager does not communicate effectively and cannot help team to deliver value."
	}
];

