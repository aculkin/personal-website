import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../layouts/main-layout'
import {
  Header,
  Card,
  Container,
  Divider,
  Image,
  Grid,
} from 'semantic-ui-react'

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Home</title>
        <meta
          name="description"
          content="Hi, I'm Andrew and this is my personal website!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/toastify-js"
        />
      </Head>
      <Grid columns="4" stackable>
        <Grid.Column width="1" />
        <Grid.Column width="8">
          <Divider hidden />
          <Container>
            <Header textAlign="center" as="h1">
              Hi, I&apos;m Andrew Culkin,
              <Header.Subheader>
                an engineer with a passion for web development and startups
              </Header.Subheader>
            </Header>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />

            <Card.Group centered>
              <Link href="/employment">
                <Card>
                  <Card.Content>
                    <Card.Header>Employment</Card.Header>
                    <Card.Description>
                      Where I&apos;ve worked in the past
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Link>
              <Link href="/education">
                <Card>
                  <Card.Content>
                    <Card.Header>Education</Card.Header>
                    <Card.Description>
                      Schools and educational programs I&apos;ve completed
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Link>
              {/* <Link href="/skills">
                <Card>
                  <Card.Content>
                    <Card.Header>Skills</Card.Header>
                    <Card.Description>
                      All the tools and technologies I&apos;ve worked with
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Link> */}
            </Card.Group>
          </Container>
        </Grid.Column>
        <Grid.Column width="1" />
        <Grid.Column width="6">
          <Image fluid src="/andrew-culkin-headshot.JPG" />
        </Grid.Column>
      </Grid>
      <Divider hidden />
    </MainLayout>
  )
}

export default Home
