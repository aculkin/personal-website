import React, { useState, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Sidebar, Menu, Button, Icon } from 'semantic-ui-react'

import { Media } from './index'
import { navigationItems } from './navigationItems'

interface Props {
  children: ReactNode
}

export const MobileNav: React.FC<Props> = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const { pathname } = useRouter()
  return (
    <Media at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" onClick={() => setSidebarOpened(false)}>
            <Icon name="close" />
            Close
          </Menu.Item>
          <Link href={'/'}>
            <Menu.Item active={pathname === '/'} as="a">
              Andrew Culkin
            </Menu.Item>
          </Link>
          {navigationItems?.map(({ name, address }, index) => {
            return (
              <Link href={address} key={name || index}>
                <Menu.Item active={pathname === address} as="a">
                  {name}
                </Menu.Item>
              </Link>
            )
          })}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu fixed="top" inverted>
            <Menu.Item onClick={() => setSidebarOpened(!sidebarOpened)}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a" primary>
                Contact me!
              </Button>
            </Menu.Item>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}
