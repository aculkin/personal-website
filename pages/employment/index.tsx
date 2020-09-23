import React from 'react'
import Head from 'next/head'
import { Header, Container, Item, Divider } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EmploymentItem } from '../../components/EmploymentItem'
// import { EmploymentLayout } from '../../layouts/employment-layout'

export const Employment: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Employment</title>
        <meta
          name="description"
          content="My employment history can be found here"
        />
      </Head>
      <Divider hidden />
      <Header textAlign="center" as="h1">
        Employment History
      </Header>
      <Container>
        <Item.Group divided>
          <EmploymentItem
            companyName="Roof Rally"
            imageUrl="/RoofRally-black-words.jpg"
            startDate="August 2017"
            endDate="June 2019"
            description="Ernst and Young (EY) is a large accounting firm based out of NYC. I worked in their Technology Consulting practice for 2 years."
            linkUrl="/employment/roof-rally"
            companyWebsiteLink="https://www.roofrally.com"
          />
          <EmploymentItem
            companyName="Ernst & Young"
            imageUrl="/ey.png"
            startDate="August 2017"
            endDate="June 2019"
            description="Ernst and Young (EY) is a large accounting firm based out of NYC. I worked in their Technology Consulting practice for 2 years."
            linkUrl="/employment/ernst-and-young"
            companyWebsiteLink="https://www.ey.com/en_us/consulting"
          />
          <EmploymentItem
            companyName="ECA Solar"
            imageUrl="eca-logo1.png"
            startDate="January 2017"
            endDate="August 2017"
            description="ECA Solar is a small solar company based in Waltham, Massachusetts. I worked as an Electrical Engineer designing solar system arrays for 6 months."
            linkUrl="/employment/eca-solar"
            companyWebsiteLink="https://www.ecasolar.com"
          />
          <EmploymentItem
            companyName="Ernst & Young (Internship)"
            imageUrl="/ey_logo.jpg"
            startDate="June 2016"
            endDate="August 2016"
            description="Ernst and Young (EY) is a large accounting firm based out of NYC. I worked in their Technology Consulting practice for 2 years."
            linkUrl="/employment/ernst-and-young"
            companyWebsiteLink="https://www.ey.com/en_us/consulting"
          />
          <EmploymentItem
            companyName="Thermo King"
            imageUrl="/thermo_king.png"
            startDate="June 2015"
            endDate="August 2015"
            description="ECA Solar is a small solar company based in Waltham, Massachusetts. I worked as an Electrical Engineer designing solar system arrays for 6 months."
            linkUrl="/employment/eca-solar"
            companyWebsiteLink="https://www.ecasolar.com"
          />
        </Item.Group>
      </Container>
      <Divider hidden />
    </MainLayout>
  )
}

export default Employment
