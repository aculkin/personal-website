import axios from "axios";
import { URLs } from "./constants";

export const mainContent = {
	loadAll: async () => {
		const { data } = await axios.get(URLs.mainContent);
		return data;
	},
};

export default mainContent;
