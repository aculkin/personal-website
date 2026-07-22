import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
				<meta name="theme-color" content="#1b1c1d" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
