import axios from "axios";
import { URLs, SHEETY_FETCH_CONFIG } from "./constants";

const getData = async (url: string) => axios.get(url, SHEETY_FETCH_CONFIG);

export const websiteData = {
	education: async () => {
		const { data } = await getData(URLs.education);
		return data;
	},
	employment: async () => {
		const { data } = await getData(URLs.employment);
		return data;
	},
	frameworks: async () => {
		const { data } = await getData(URLs.frameworks);
		return data;
	},
	languages: async () => {
		const { data } = await getData(URLs.languages);
		return data;
	},
	mainContent: async () => {
		const { data } = await getData(URLs.mainContent);
		return data;
	},
	projects: async () => {
		const { data } = await getData(URLs.projects);
		return data;
	},
	technologies: async () => {
		const { data } = await getData(URLs.technologies);
		return data;
	},
};
