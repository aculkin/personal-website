import Link from 'next/link'
import * as React from 'react'

import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

export const Footer: React.FC = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/education">
                    <a>Education</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/employment">
                    <a>Employment</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Projects" />
              <List link inverted>
                <List.Item as="a" href="https://www.roofrally.com">
                  Roof Rally Marketing Site
                </List.Item>
                <List.Item as="a" href="https://app.roofrally.com">
                  Roof Rally Web App
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <p>&copy; 2020 - All Rights Reserved</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
