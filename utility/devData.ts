const school = {
	id: "1",
	schoolName: "Lehigh University",
	awsKey: "education/lehigh.png",
	startDate: "August 2012",
	endDate: "December 2016",
	schoolWebsiteUrl: "https://engineering.lehigh.edu/",
	description:
		"Lehigh University Integrated Business and Engineering honors program",
};
const company = {
	id: "1",
	companyName: "HOVER",
	startDate: "February 2022",
	endDate: "Currently Employed",
	awsKey: "employment/hover.jpg",
	internship: false,
	companyWebsiteLink: "https://hover.to",
	description: "I'm currently employed at HOVER. Inc, as a software engineer",
};
const project = {
	id: "1",
	name: "Personal Website",
	startDate: "August 2019",
	endDate: "Ongoing",
	awsKey: "projects/personal-website.jpg",
	features:
		'SSR website built with Next.JS and Typescript; Integration with "Sheety" for a simple Google Sheets API; Ability to send me an email without actually exposing my personal email to the public',
	linkName: "Github Repo for this website",
	link: "https://github.com/aculkin/personal-website",
	description: "My personal website",
};
const language = {
	id: "1",
	name: "Typescript",
	proficiency: "3",
	link: "https://www.typescriptlang.org/",
	awsKey: "tech/typescript.png",
	shortDescription: "Typed version of Javascript developed by Microsoft",
	description: "longer description of Typescript goes here",
};
const framework = {
	id: "1",
	name: "React",
	proficiency: "3",
	link: "https://reactjs.org/",
	awsKey: "tech/react.png",
	shortDescription: "Component based Framework for developing web apps",
	description: "longer description of React goes here",
};
const technology = {
	id: "1",
	name: "Stripe",
	proficiency: "3",
	link: "https://stripe.com/",
	awsKey: "tech/stripe.png",
	shortDescription: "Payment processing and subscription management",
	description: "longer description of Stripe goes here",
};

const mainContent = [
	{
		id: 1,
		key: "metaPageDescription",
		content: "Hi, I'm Andrew and this is my personal website!",
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
			"A fullstack software engineer, and entrepreneur with a passion for startups, clean energy, and decentralized finance.",
	},
	{
		id: 4,
		key: "message",
		content:
			"This is my personal website, click on the links below to see what I've been working on recently!",
	},
];
const education = [school, school, school, school];
const employment = [company, company, company, company];
const projects = [project, project, project, project];
const languages = [language, language, language, language];
const frameworks = [framework, framework, framework, framework];
const technologies = [technology, technology, technology, technology];

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
