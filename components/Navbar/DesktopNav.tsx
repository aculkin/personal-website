// import Link from 'next/link'
import React from 'react'
import { Media } from './index'

import { Segment, Container, Menu, Button } from 'semantic-ui-react'

export const DesktopNav: React.FC = (props) => {
  return (
    <Media greaterThan="mobile">
      <Segment
        inverted
        textAlign="center"
        style={{ padding: '1em 0em' }}
        vertical
      >
        <Menu fixed="top">
          <Container>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item position="right">
              <Button as="a" primary>
                Contact me!
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
      {props.children}
    </Media>
  )
}

export default DesktopNav
