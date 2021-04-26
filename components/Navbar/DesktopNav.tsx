import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Segment, Container, Menu } from 'semantic-ui-react'

import { Media } from './index'
import { navigationItems } from './navigationItems'
import { ContactMe } from '../ContactMe'

export const DesktopNav: React.FC = (props) => {
  const { pathname } = useRouter()
  return (
    <Media greaterThan="mobile">
      <Menu fixed="top" inverted size="large">
        <Container>
          <Link href={'/'}>
            <Menu.Item active={pathname === '/'} as="a">
              Home
            </Menu.Item>
          </Link>
          {navigationItems.map(({ name, address }) => {
            return (
              <Link key={name} href={address}>
                <Menu.Item active={pathname.includes(address)} as="a">
                  {name}
                </Menu.Item>
              </Link>
            )
          })}
          <Menu.Item position="right">
            <ContactMe />
          </Menu.Item>
        </Container>
      </Menu>
      {props.children}
    </Media>
  )
}

export default DesktopNav
