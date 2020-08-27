import * as React from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const MainLayout: React.FC = (props) => {
  return (
    <>
      <Navbar>
        {props.children}

        <Footer />
      </Navbar>
    </>
  )
}
