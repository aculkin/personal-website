import * as React from 'react'
import { createMedia } from '@artsy/fresnel'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

export const Navbar: React.FC = ({ children }) => (
  <MediaContextProvider>
    <DesktopNav>{children}</DesktopNav>
    <MobileNav>{children}</MobileNav>
  </MediaContextProvider>
)

export default Navbar
