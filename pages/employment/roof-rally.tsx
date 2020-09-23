import React from 'react'
import Head from 'next/head'
import { Segment, Container, Header } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EmploymentLayout } from '../../layouts/employment-layout'

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
      <EmploymentLayout>
        <Segment>
          <Container text>
            <Header>Lehigh education!</Header>
          </Container>
        </Segment>
      </EmploymentLayout>
    </MainLayout>
  )
}

export default Employment
