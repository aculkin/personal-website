import Link from 'next/link'
import * as React from 'react'

import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Button,
  Divider,
  Icon,
} from 'semantic-ui-react'

export const Footer: React.FC = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/projects">
                    <a>Projects &#9999;&#65039;</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/employment">
                    <a>Employment &#127970;</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/skills">
                    <a>Skills &#11088;</a>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/education">
                    <a>Education &#128218;</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={10}>
              <Button
                href="https://github.com/aculkin/"
                target="_blank"
                circular
                color="grey"
                icon="github square"
              />
              <Button
                href="https://www.linkedin.com/in/andrew-culkin/"
                target="_blank"
                circular
                color="linkedin"
                icon="linkedin"
              />
              <Button
                href="https://www.instagram.com/aculkin/"
                target="_blank"
                circular
                color="instagram"
                icon="instagram"
              />
              <Button
                href="https://www.facebook.com/andrew.culkin/"
                target="_blank"
                circular
                color="facebook"
                icon="facebook"
              />
              <Button
                href="https://twitter.com/AndrewSCulkin/"
                target="_blank"
                circular
                color="twitter"
                icon="twitter square"
              />
              <Button href="/Andrew_Culkin_Resume.pdf" floated="right" download>
                <Icon name="download" />
                Resume - <i>Updated: October 2021</i>
              </Button>
              <Divider />
              <p>&copy; {new Date().getFullYear()} - Andrew Culkin</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
