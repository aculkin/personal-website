import React from 'react'
import Head from 'next/head'
import { Header, Container, Item, Divider } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EmploymentItem } from '../../components/EmploymentItem'
import { employment } from '../../utility/employment'

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
          {employment.map((company) => (
            <EmploymentItem key={company.companyName} company={company} />
          ))}
        </Item.Group>
      </Container>
      <Divider hidden />
    </MainLayout>
  )
}

export default Employment
