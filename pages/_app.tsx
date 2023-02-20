import "semantic-ui-css/semantic.min.css";

import React from "react";
import { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}

export default App;
