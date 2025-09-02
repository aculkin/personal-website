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
const education = [
	{ ...school, id: 1, schoolName: `${school.schoolName} 1` },
	{ ...school, id: 2, schoolName: `${school.schoolName} 2` },
	{ ...school, id: 3, schoolName: `${school.schoolName} 3` },
	{ ...school, id: 4, schoolName: `${school.schoolName} 4` },
];
const employment = [
	{ ...company, id: 1, companyName: `${company.companyName} 1` },
	{ ...company, id: 2, companyName: `${company.companyName} 2` },
	{ ...company, id: 3, companyName: `${company.companyName} 3` },
	{ ...company, id: 4, companyName: `${company.companyName} 4` },
];
const projects = [
	{ ...project, id: 1, name: `${project.name} 1` },
	{ ...project, id: 2, name: `${project.name} 2` },
	{ ...project, id: 3, name: `${project.name} 3` },
	{ ...project, id: 4, name: `${project.name} 4` },
];
const languages = [
	{ ...language, id: 1, name: `${language.name} 1` },
	{ ...language, id: 2, name: `${language.name} 2` },
	{ ...language, id: 3, name: `${language.name} 3` },
	{ ...language, id: 4, name: `${language.name} 4` },
];
const frameworks = [
	{ ...framework, id: 1, name: `${framework.name} 1` },
	{ ...framework, id: 2, name: `${framework.name} 2` },
	{ ...framework, id: 3, name: `${framework.name} 3` },
	{ ...framework, id: 4, name: `${framework.name} 4` },
];
const technologies = [
	{ ...technology, id: 1, name: `${technology.name} 1` },
	{ ...technology, id: 2, name: `${technology.name} 2` },
	{ ...technology, id: 3, name: `${technology.name} 3` },
	{ ...technology, id: 4, name: `${technology.name} 4` },
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
