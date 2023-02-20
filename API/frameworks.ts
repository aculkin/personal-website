import axios from "axios";
import { URLs } from "./constants";

export const frameworks = {
	loadAll: async () => {
		const { data } = await axios.get(URLs.frameworks);
		return data;
	},
};

export default frameworks;
