import React, { useState } from 'react'
import { Media } from './index'

import {
  Visibility,
  Sidebar,
  Segment,
  Container,
  Menu,
  Button,
  Icon,
} from 'semantic-ui-react'

export const MobileNav: React.FC = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  //   const [fixed, setFixed] = useState(false)
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
          {/* <Visibility
            once={false}
            onBottomPassed={() => setFixed(true)}
            onBottomPassedReverse={() => setFixed(false)}
          > */}
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary>
                <Menu.Item onClick={() => setSidebarOpened(!sidebarOpened)}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {/* </Visibility> */}

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}
