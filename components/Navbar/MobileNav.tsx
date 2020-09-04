import React, { useState } from 'react'
import { Media } from './index'

import { Sidebar, Menu, Button, Icon } from 'semantic-ui-react'

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
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
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
