import axios from "axios";

import { URLs } from "./constants";

interface ContactFormData {
	email: string;
	name: string;
	message: string;
}

export const contact = {
	sendEmail: async (formData: ContactFormData) =>
		axios.post(URLs.contact, formData),
};
