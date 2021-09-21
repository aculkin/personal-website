import * as React from 'react'
import Head from 'next/head'
import { Header, Card, Container, Divider, Grid } from 'semantic-ui-react'

import { MainLayout } from '../layouts/main-layout'
import { HomePageCard } from '../components/HomePageCard'
import { pages } from '../utility'

const pageStyle = {
  backgroundImage: 'url(/background-image.jpg)',
  backgroundSize: 'cover',
  minHeight: '100vh',
  backgroundAttachment: 'fixed',
  paddingBottom: '3em',
}

const headerStyle = {
  marginTop: '2em',
  fontSize: '3em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

const subheaderStyle1 = {
  marginTop: '1em',
  fontSize: '.4em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

const subheaderStyle2 = {
  marginBottom: '3em',
  fontSize: '.4em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin - Website</title>
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
      <div style={pageStyle}>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center" as="h1" style={headerStyle}>
                  Hi, I'm Andrew &#128075;
                  <Header.Subheader style={subheaderStyle1}>
                    An entrepreneur, web developer, and software engineer
                  </Header.Subheader>
                  <Header.Subheader style={subheaderStyle2}>
                    with a passion for startups, clean energy, and machine
                    learning.
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column>
                <Card.Group centered>
                  {pages?.map((page, index) => {
                    return (
                      <HomePageCard key={page?.name || index} page={page} />
                    )
                  })}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </MainLayout>
  )
}

export default Home
