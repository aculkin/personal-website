const BASE_URL = `https://api.sheety.co/${process.env.SHEETY_ID}/${process.env.SHEETY_NAME}`;

export const URLs = {
	education: `${BASE_URL}/education`,
	employment: `${BASE_URL}/employment`,
	projects: `${BASE_URL}/projects`,
	frameworks: `${BASE_URL}/frameworks`,
	technologies: `${BASE_URL}/technologies`,
	languages: `${BASE_URL}/languages`,
	mainContent: `${BASE_URL}/mainContent`,
	contact: "/api/contact",
};

export const SHEETY_FETCH_CONFIG = {
	headers: {
		Authorization: `Basic ${process.env.SHEETY_AUTH_TOKEN}`,
	},
};
