import React, { ReactNode } from 'react'
import { createMedia } from '@artsy/fresnel'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

export const mediaStyles = AppMedia.createMediaStyle()
export const { MediaContextProvider, Media } = AppMedia

interface Props {
  children: ReactNode
}

export const Navbar: React.FC<Props> = ({ children }) => (
  <MediaContextProvider disableDynamicMediaQueries>
    <DesktopNav>{children}</DesktopNav>
    <MobileNav>{children}</MobileNav>
  </MediaContextProvider>
)

export default Navbar
