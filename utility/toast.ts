import Toastify from "toastify-js";

export const toast = (text: string, type?: string): void => {
	let backgroundColor: string;
	switch (type) {
		case "positive":
			backgroundColor = "#2bb827";
			break;
		case "negative":
			backgroundColor = "#d9001d";
			break;
		case "info":
			backgroundColor = "#117ad6";
			break;
		default:
			backgroundColor = "#8a8a8a";
	}
	Toastify({
		text,
		duration: 3000,
		backgroundColor,
		close: true,
		stopOnFocus: true,
		gravity: "top",
		position: "right",
	}).showToast();
};

export default toast;
