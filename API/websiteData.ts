import axios from "axios";
import { URLs, SHEETY_FETCH_CONFIG } from "./constants";
import { devData } from "../utility";

const getData = async (url: string) => {
	const shouldFetchSheetyData = !!process.env.SHEETY_AUTH_TOKEN;
	if (shouldFetchSheetyData) {
		return axios.get(url, SHEETY_FETCH_CONFIG);
	} else {
		return Promise.resolve(devData);
	}
};

const logError = (error: any) =>
	error?.response?.status && error?.response?.statusText
		? console.error(
				"API Error:",
				error?.response?.status,
				error?.response?.statusText
		  )
		: console.error(error);

export const websiteData = {
	education: async () => {
		try {
			const { data } = await getData(URLs.education);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
	employment: async () => {
		try {
			const { data } = await getData(URLs.employment);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
	frameworks: async () => {
		try {
			const { data } = await getData(URLs.frameworks);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
	languages: async () => {
		try {
			const { data } = await getData(URLs.languages);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
	mainContent: async () => {
		try {
			const { data } = await getData(URLs.mainContent);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
	projects: async () => {
		try {
			const { data } = await getData(URLs.projects);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
	technologies: async () => {
		try {
			const { data } = await getData(URLs.technologies);
			return data;
		} catch (error) {
			logError(error);
			return devData.data;
		}
	},
};
