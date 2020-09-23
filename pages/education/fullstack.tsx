import * as React from 'react'
import Head from 'next/head'
import { Segment, Header, Container } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EducationLayout } from '../../layouts/education-layout'

export const Fullstack: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Education | Fullstack</title>
        <meta name="description" content="All my education can be found here" />
      </Head>
      <EducationLayout>
        <Segment>
          <Container text>
            <Header>Fullstack education!</Header>
          </Container>
        </Segment>
      </EducationLayout>
    </MainLayout>
  )
}

export default Fullstack
