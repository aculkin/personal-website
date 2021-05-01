import * as React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Header, Container, Item, Divider } from 'semantic-ui-react'

import { API } from '../../API'
import { MainLayout } from '../../layouts/main-layout'
import { EducationItem } from '../../components/EducationItem'

interface Education {
  id: number
  schoolName: string
  imageUrl: string
  startDate: string
  endDate: string
  degree?: string
  minor?: string
  description: string
  schoolWebsiteUrl: string
}

interface EducationPage {
  education: [Education]
}

export const Education: React.FC<EducationPage> = ({ education }) => {
  return (
    <MainLayout>
      <Head>
        <title>Education</title>
        <meta
          name="description"
          content="Schools and educational programs I've graduated from or completed"
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

export const getStaticProps: GetStaticProps = async () => {
  const { education } = await API.education.loadAll()
  return {
    props: { education },
  }
}

export default Education
