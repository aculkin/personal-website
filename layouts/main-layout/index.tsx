import React, { ReactNode } from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

interface Props {
  children: ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Navbar>
      <div>{children}</div>
      <Footer />
    </Navbar>
  )
}
