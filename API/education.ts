import axios from "axios";
import { URLs } from "./constants";

export const education = {
	loadAll: async () => {
		const { data } = await axios.get(URLs.education);
		return data;
	},
};

export default education;
