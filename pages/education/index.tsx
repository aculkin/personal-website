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
      <Divider hidden />
      <Header textAlign="center" as="h1">
        Education
      </Header>
      <Container>
        <Item.Group divided>
          {education.map((school) => (
            <EducationItem key={school.schoolName} school={school} />
          ))}
        </Item.Group>
        <Divider hidden />
      </Container>
    </MainLayout>
  )
}

export default Education
