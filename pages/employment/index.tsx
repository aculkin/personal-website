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
            startDate="October 2019"
            endDate="September 2020"
            description="I co-founded Roof Rally, an online marketplace for roofing Neds from homeowners. We built a web application that allowed homeowners to essentially crowd-source their roofing projects to trusted local contractors. Eventually, we made the tough decision to cease operations because we weren’t getting enough traction to be successful in the long run. Even though Roof Rally didn’t succeed, I gained a lot from this experience and learned many valuable lessons during the process of building a web application and a company."
            // linkUrl="/employment/roof-rally"
            companyWebsiteLink="https://www.roofrally.com"
          />
          <EmploymentItem
            companyName="Ernst & Young"
            imageUrl="/ey_logo.jpg"
            startDate="August 2017"
            endDate="June 2019"
            description="I worked as a Technology Risk consultant for EY for about 2 years. This position involved working closely with senior management in the risk functions of several Fortune 500 companies. One project I worked on involved developing the IT Risk program from scratch for a recently spun off life insurance company. We worked with different business functions to ensure that they had the proper IT controls in place to adequately address their risk. If they didn’t have the appropriate controls we would propose new controls to be implemented."
            // linkUrl="/employment/ernst-and-young"
            companyWebsiteLink="https://www.ey.com/en_us/consulting"
          />
          <EmploymentItem
            companyName="ECA Solar"
            imageUrl="eca-logo1.png"
            startDate="January 2017"
            endDate="August 2017"
            description="I worked at ECA Solar, a small solar development company, for about 6 months prior to moving to NYC to work for EY. During my time at ECA Solar, I engineered several large scale rooftop solar systems that are currently operational. Since it was such a small company, I was also heavily involved with the development process and the putting together financial models for some of the projects we were interested in pursuing. I also developed an internal tool we used to optimize the inverter sizing based on the target AC/DC ratio. "
            // linkUrl="/employment/eca-solar"
            companyWebsiteLink="https://www.ecasolar.com"
          />
          <EmploymentItem
            companyName="Ernst & Young (Internship)"
            imageUrl="/ey_logo.jpg"
            startDate="June 2016"
            endDate="August 2016"
            description="During my internship at EY, I worked with a large bank in NYC to build out their updated Third Party Risk Management function. We developed a system for assessing the risk of using specific third parties including the information they received, and the impact they have on the business. This program was used to determine the frequency with which third parties needed to be re-assessed for their internal controls. "
            // linkUrl="/employment/ernst-and-young"
            companyWebsiteLink="https://www.ey.com/en_us/consulting"
          />
          <EmploymentItem
            companyName="Thermo King"
            imageUrl="/thermo_king.png"
            startDate="June 2015"
            endDate="August 2015"
            description="I spent the summers of 2015 working on an engineering team at the Thermoking headquarters in Minneapolis Minnesota, the industry leader in transport refrigeration. While at Thermoking I wrote the procedure for the tear down off field test units and I helped develop several process efficiency tweaks involving fin array used for expelling heat. I also volunteered to transport a set of parts down to the manufacturing plant in Puerto Rico during an emergency shortage. Due to market conditions, all of the units Thermoking was producing were backordered, so we needed to ensure production didn’t stop because of a lost part. This protected around $800,000 in revenue for the company."
            // linkUrl="/employment/eca-solar"
            companyWebsiteLink="https://www.ecasolar.com"
          />
        </Item.Group>
      </Container>
      <Divider hidden />
    </MainLayout>
  )
}

export default Employment
