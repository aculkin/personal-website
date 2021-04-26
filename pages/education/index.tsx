import * as React from 'react'
import Head from 'next/head'
import { Header, Container, Item, Divider } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EducationItem } from '../../components/EducationItem'
import { education } from '../../utility'

export const Education: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Education</title>
        <meta
          name="description"
          content="From Lehigh Univresity to Fullstack Academy I've been to a few schools, read about them here!"
        />
      </Head>
      <div
        style={{
          backgroundImage: 'url(/education-background.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          paddingBottom: '50px',
        }}
      >
        <Header
          style={{
            paddingTop: '2em',
            fontSize: '3em',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '2px 2px 8px #000000',
          }}
          textAlign="center"
          as="h1"
        >
          Education
        </Header>
        <Container>
          {education.map((school) => (
            <EducationItem key={school.schoolName} school={school} />
          ))}
          <Divider hidden />
        </Container>
      </div>
    </MainLayout>
  )
}

export default Education
