import React from 'react'
import Head from 'next/head'
import { Header, Container, Item, Divider } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EmploymentItem } from '../../components/EmploymentItem'
import { employment } from '../../utility/employment'

export const Employment: React.FC = () => {
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: 'url(/employment-background.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          paddingBottom: '50px',
        }}
      >
        <Head>
          <title>Andrew Culkin | Employment</title>
          <meta
            name="description"
            content="My employment history can be found here"
          />
        </Head>
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
          Employment
        </Header>
        <Container>
          {employment.map((company) => (
            <EmploymentItem key={company.companyName} company={company} />
          ))}
        </Container>
      </div>
    </MainLayout>
  )
}

export default Employment
