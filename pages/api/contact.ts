import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const myEmail = process.env.EMAIL_ADDRESS;
	const myEmailPassword = process.env.EMAIL_PASSWORD;
	const { email: senderEmail, name: senderName, message } = req.body;
	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: myEmail,
			pass: myEmailPassword,
		},
	});
	const mailOptions = {
		from: myEmail,
		replyTo: senderEmail || "no-reply@unknown.com",
		to: myEmail,
		subject: senderName
			? `${senderName} - `
			: "" + "Personal Website Submission",
		text: message || "No message provided",
	};
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).send("Email sent");
	} catch (error) {
		console.log(error);
		res.status(500).send("Error sending email");
	}
};

export default contactHandler;
