import * as React from 'react'
import Head from 'next/head'
import { Header, Container, Item, Divider } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EducationItem } from '../../components/EducationItem'

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
          <EducationItem
            schoolName="Fullstack Academy"
            imageUrl="/fullstack.jpg"
            startDate="June 2019"
            endDate="September 2019"
            description="Fullstack Academy is a software engineering bootcamp focused on teaching their students web development, coding, and general computer science knoledge."
            linkUrl="/education/fullstack"
            schoolWebsiteUrl="https://www.fullstackacademy.com/software-engineering-immersive"
          />
          <EducationItem
            schoolName="Lehigh University - College of Business"
            imageUrl="/lehigh.png"
            startDate="August 2012"
            endDate="Decmber 2016"
            description="Lehigh univrstiy busineess"
            linkUrl="/education/lehigh"
            schoolWebsiteUrl="https://business.lehigh.edu/"
            degree="BS Integrated Business and Engineering"
            minor="Analytical Finance"
          />
          <EducationItem
            schoolName="Lehigh University - College of Engineering"
            imageUrl="/lehigh.png"
            startDate="August 2012"
            endDate="Decmber 2016"
            description="lehigh university engineering"
            linkUrl="/education/lehigh"
            schoolWebsiteUrl="https://www.fullstackacademy.com/software-engineering-immersive"
            degree="BS Mechanical Engineering"
            minor="Energy Engineering"
          />
        </Item.Group>
        <Divider hidden />
      </Container>
    </MainLayout>
  )
}

export default Education
