import * as React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { GetStaticProps } from 'next'
import {
  Header,
  Card,
  Container,
  Divider,
  Grid,
  Message,
} from 'semantic-ui-react'

import { MainContentItems } from '../interfaces/main'
import { MainLayout } from '../layouts/main-layout'
import { HomePageCard } from '../components/HomePageCard'
import { pages } from '../utility'
import API from '../API'

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
  marginBottom: '.3em',
  fontSize: '.5em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

const subheaderStyle2 = {
  marginBottom: '3em',
  fontSize: '.5em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

export const Home: React.FC<MainContentItems> = ({ sectionItems }) => {
  const { heading, metaPageDescription, subHeading, message } = sectionItems
  const subHeadContent = subHeading.content
  let subHead1 = subHeadContent
    .split(' ')
    .slice(0, subHeadContent.split(' ').length / 2)
    .join(' ')
  let subHead2 = subHeadContent
    .split(' ')
    .slice(subHeadContent.split(' ').length / 2)
    .join(' ')
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin</title>
        <meta name="description" content={metaPageDescription.content} />
        <link rel="icon" href="/favicon.ico" />
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        />
        <Script
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
                  {heading.content} &#128075;
                  <Header.Subheader style={subheaderStyle1}>
                    {subHead1}
                  </Header.Subheader>
                  <Header.Subheader style={subheaderStyle2}>
                    {subHead2}
                  </Header.Subheader>
                </Header>
                <Container textAlign="center">
                  <Message floating compact positive>
                    {message.content}
                  </Message>
                </Container>
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

export const getStaticProps: GetStaticProps = async () => {
  const { mainContent } = await API.mainContent.loadAll()

  let sectionItems = {}
  mainContent.forEach(({ id, key, content }) => {
    sectionItems[key] = { id, content }
  })

  return {
    props: { sectionItems },
  }
}

export default Home
