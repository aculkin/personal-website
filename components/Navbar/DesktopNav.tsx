// import Link from 'next/link'
import React from 'react'
import Link from 'next/link'
import { Segment, Container, Menu, Button } from 'semantic-ui-react'

import { Media } from './index'
import { navigationItems } from './navigationItems'

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
            {navigationItems.map(({ name, address }) => {
              return (
                <Link key={name} href={address}>
                  <Menu.Item as="a">{name}</Menu.Item>
                </Link>
              )
            })}
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
