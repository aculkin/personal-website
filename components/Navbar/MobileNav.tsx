import React, { useState } from 'react'
import Link from 'next/link'
import { Sidebar, Menu, Button, Icon } from 'semantic-ui-react'

import { Media } from './index'
import { navigationItems } from './navigationItems'

export const MobileNav: React.FC = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
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
          {navigationItems.map((item) => {
            const { name, address } = item
            return (
              <Link href={address} key={name}>
                <Menu.Item as="a">{name}</Menu.Item>
              </Link>
            )
          })}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu fixed="top">
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
