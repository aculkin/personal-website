// Local fallback data used when no Sheety API token is configured.
// Kept realistic so the site looks complete in local/dev and preview builds.

const mainContent = [
	{
		id: 1,
		key: "metaPageDescription",
		content:
			"Andrew Culkin — fullstack software engineer and entrepreneur building products across clean energy, construction tech, and fintech.",
	},
	{
		id: 2,
		key: "heading",
		content: "Hi, I'm Andrew",
	},
	{
		id: 3,
		key: "subHeading",
		content:
			"A fullstack software engineer and entrepreneur with a passion for startups, clean energy, and decentralized finance.",
	},
	{
		id: 4,
		key: "message",
		content:
			"Welcome to my corner of the web! Take a look around to see what I've been building, where I've worked, and the tools I love to work with.",
	},
];

const education = [
	{
		id: 1,
		schoolName: "Lehigh University",
		awsKey: "education/lehigh.png",
		startDate: "August 2012",
		endDate: "May 2016",
		schoolWebsiteUrl: "https://engineering.lehigh.edu/",
		description:
			"B.S. in Integrated Business and Engineering (IBE) Honors Program, with a concentration in Computer Science and Business. Graduated with honors while leading student ventures and hackathon teams.",
	},
	{
		id: 2,
		schoolName: "Fullstack Academy",
		awsKey: "education/fullstack.jpg",
		startDate: "January 2017",
		endDate: "April 2017",
		schoolWebsiteUrl: "https://www.fullstackacademy.com/",
		description:
			"Immersive software engineering program focused on JavaScript, React, Node.js, and modern fullstack development practices. Built and shipped multiple team projects under tight deadlines.",
	},
];

const employment = [
	{
		id: 1,
		companyName: "HOVER",
		startDate: "February 2022",
		endDate: "Present",
		awsKey: "employment/hover.jpg",
		internship: false,
		companyWebsiteLink: "https://hover.to",
		description:
			"Software engineer building web experiences that turn smartphone photos into accurate 3D models of homes. Work spans React/TypeScript front ends, Node services, and design-system tooling used across the product.",
	},
	{
		id: 2,
		companyName: "Roof Rally",
		startDate: "February 2020",
		endDate: "January 2022",
		awsKey: "",
		internship: false,
		companyWebsiteLink: "https://github.com/aculkin/",
		description:
			"Co-founder and full-stack engineer. Built a platform connecting homeowners with vetted roofing and solar contractors, handling everything from instant quotes to scheduling and payments.",
	},
	{
		id: 3,
		companyName: "Ernst & Young",
		startDate: "September 2017",
		endDate: "January 2020",
		awsKey: "employment/ey.png",
		internship: false,
		companyWebsiteLink: "https://www.ey.com/",
		description:
			"Technology consultant delivering custom software and data solutions for enterprise clients. Automated financial reporting workflows and built internal tools that saved teams hundreds of hours per quarter.",
	},
	{
		id: 4,
		companyName: "ECA Solar",
		startDate: "June 2016",
		endDate: "August 2017",
		awsKey: "",
		internship: true,
		companyWebsiteLink: "https://www.ecasolar.com/",
		description:
			"Analyst on a commercial solar development team. Modeled project economics and built spreadsheet-driven tools to speed up site evaluation — the spark for my interest in software.",
	},
];

const projects = [
	{
		id: 1,
		name: "Personal Website",
		startDate: "August 2019",
		endDate: "Ongoing",
		awsKey: "projects/personal-website.jpg",
		features:
			"Server-rendered with Next.js and TypeScript;Google Sheets powered content via the Sheety API;Contact form that emails me without exposing my address;Fully responsive, mobile-first design",
		linkName: "View on GitHub",
		link: "https://github.com/aculkin/personal-website",
		description:
			"The site you're looking at right now — a fast, statically generated Next.js app that I use as a living portfolio and playground for new ideas.",
	},
	{
		id: 2,
		name: "Roof Rally",
		startDate: "February 2020",
		endDate: "January 2022",
		awsKey: "projects/roof-rally.jpg",
		features:
			"Instant online roofing & solar quotes;Contractor marketplace with reviews;Stripe-powered deposits and scheduling;Admin dashboard with real-time analytics",
		linkName: "Learn more",
		link: "https://github.com/aculkin/",
		description:
			"A two-sided marketplace I co-founded that matches homeowners with trusted contractors, from first quote to finished install.",
	},
	{
		id: 3,
		name: "Solar Savings Calculator",
		startDate: "March 2019",
		endDate: "July 2019",
		awsKey: "",
		features:
			"Address-based solar potential lookup;Interactive charts for 25-year savings;Financing vs. cash comparison;Shareable PDF reports",
		linkName: "View on GitHub",
		link: "https://github.com/aculkin/",
		description:
			"A React tool that estimates rooftop solar savings from an address, blending utility-rate data with production modeling to help homeowners make the call.",
	},
	{
		id: 4,
		name: "Ledger — Expense Tracker",
		startDate: "October 2018",
		endDate: "February 2019",
		awsKey: "",
		features:
			"Bank-style transaction feed;Budget categories with alerts;Recurring transaction detection;PostgreSQL + Node REST API",
		linkName: "View on GitHub",
		link: "https://github.com/aculkin/",
		description:
			"A personal-finance app for tracking spending and budgets, built to learn the ins and outs of a production Node and PostgreSQL backend.",
	},
];

const languages = [
	{
		id: 1,
		name: "TypeScript",
		proficiency: 3,
		link: "https://www.typescriptlang.org/",
		awsKey: "tech/typescript.png",
		shortDescription: "My daily driver for building type-safe web apps.",
		description:
			"A strongly typed superset of JavaScript from Microsoft. I reach for TypeScript on nearly every project — the tooling and safety it adds at scale are hard to give up.",
	},
	{
		id: 2,
		name: "JavaScript",
		proficiency: 3,
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		awsKey: "tech/javascript.png",
		shortDescription: "The language of the web, front to back.",
		description:
			"The foundation of everything I build for the browser and Node. Years of writing JavaScript gave me a deep feel for the language before adding types on top.",
	},
	{
		id: 3,
		name: "Python",
		proficiency: 2,
		link: "https://www.python.org/",
		awsKey: "tech/python.png",
		shortDescription: "Scripting, data work, and quick automation.",
		description:
			"My go-to for data processing, automation, and prototyping. Clean and expressive — perfect for turning a rough idea into a working script fast.",
	},
	{
		id: 4,
		name: "SQL",
		proficiency: 2,
		link: "https://www.postgresql.org/docs/current/sql.html",
		awsKey: "",
		shortDescription: "Querying and shaping relational data.",
		description:
			"Comfortable writing joins, window functions, and migrations against relational databases — mostly PostgreSQL — to keep application data fast and consistent.",
	},
	{
		id: 5,
		name: "Java",
		proficiency: 1,
		link: "https://www.java.com/",
		awsKey: "tech/java.png",
		shortDescription: "Where I first learned to program.",
		description:
			"The language I learned computer science fundamentals with. I don't use it day to day, but it gave me a solid grounding in OOP and data structures.",
	},
];

const frameworks = [
	{
		id: 1,
		name: "React",
		proficiency: 3,
		link: "https://react.dev/",
		awsKey: "tech/react.png",
		shortDescription: "Component-based UI library I use every day.",
		description:
			"My primary tool for building user interfaces. I've shipped everything from marketing sites to complex, data-heavy dashboards with React.",
	},
	{
		id: 2,
		name: "Next.js",
		proficiency: 3,
		link: "https://nextjs.org/",
		awsKey: "tech/next.png",
		shortDescription: "React framework for production apps.",
		description:
			"My default for new React projects. Server rendering, static generation, and file-based routing make it easy to ship fast, SEO-friendly sites — like this one.",
	},
	{
		id: 3,
		name: "Express",
		proficiency: 3,
		link: "https://expressjs.com/",
		awsKey: "tech/express.png",
		shortDescription: "Minimal Node.js web framework.",
		description:
			"My workhorse for building REST APIs and backend services on Node. Lightweight, flexible, and battle-tested for everything from prototypes to production.",
	},
	{
		id: 4,
		name: "Redux",
		proficiency: 2,
		link: "https://redux.js.org/",
		awsKey: "tech/redux.png",
		shortDescription: "Predictable state management for React.",
		description:
			"Reach for it when app state gets complex enough that predictable, centralized management pays off. Comfortable with Redux Toolkit and middleware patterns.",
	},
	{
		id: 5,
		name: "React Native",
		proficiency: 2,
		link: "https://reactnative.dev/",
		awsKey: "",
		shortDescription: "Cross-platform mobile apps with React.",
		description:
			"Used to bring web skills to iOS and Android from a single codebase. Great for shipping mobile features quickly without maintaining two native apps.",
	},
];

const technologies = [
	{
		id: 1,
		name: "Node.js",
		proficiency: 3,
		link: "https://nodejs.org/",
		awsKey: "tech/node.png",
		shortDescription: "JavaScript runtime for servers and tooling.",
		description:
			"Powers the backends and build tooling behind most of my projects. Running JavaScript end to end keeps context switching low and iteration fast.",
	},
	{
		id: 2,
		name: "PostgreSQL",
		proficiency: 3,
		link: "https://www.postgresql.org/",
		awsKey: "tech/postgresql.png",
		shortDescription: "My relational database of choice.",
		description:
			"A rock-solid, feature-rich relational database. I lean on it for anything that needs reliable, structured data with strong querying capabilities.",
	},
	{
		id: 3,
		name: "Stripe",
		proficiency: 3,
		link: "https://stripe.com/",
		awsKey: "tech/stripe.png",
		shortDescription: "Payments and subscription billing.",
		description:
			"My go-to for taking payments online. I've integrated Stripe for one-off checkouts, deposits, and recurring subscriptions across multiple products.",
	},
	{
		id: 4,
		name: "Webpack",
		proficiency: 2,
		link: "https://webpack.js.org/",
		awsKey: "tech/webpack.png",
		shortDescription: "Module bundling and build configuration.",
		description:
			"Comfortable configuring bundling, code splitting, and asset pipelines when a project needs more control than a framework's defaults provide.",
	},
	{
		id: 5,
		name: "Heroku",
		proficiency: 2,
		link: "https://www.heroku.com/",
		awsKey: "tech/heroku.png",
		shortDescription: "Fast deploys for side projects and MVPs.",
		description:
			"My favorite way to get an app online quickly. Perfect for MVPs and side projects where a simple, reliable deploy pipeline matters more than fine-grained infra control.",
	},
];

export default {
	data: {
		mainContent,
		education,
		employment,
		projects,
		languages,
		frameworks,
		technologies,
	},
};
