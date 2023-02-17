import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { AppProps } from 'next/app'

export function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
