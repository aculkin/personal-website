import React from "react";
import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { mediaStyles } from "../components/Navbar";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
					/>
					<style
						type="text/css"
						dangerouslySetInnerHTML={{ __html: mediaStyles }}
					/>
					<Script
						type="text/javascript"
						src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
					/>
					<Script
						type="text/javascript"
						src="https://cdn.jsdelivr.net/npm/toastify-js"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
