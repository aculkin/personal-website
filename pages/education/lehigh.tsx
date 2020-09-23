import * as React from 'react'
import Head from 'next/head'
import { Segment, Container, Header } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { EducationLayout } from '../../layouts/education-layout'

export const Lehigh: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Education | Lehigh</title>
        <meta name="description" content="All my education can be found here" />
      </Head>
      <EducationLayout>
        <Segment>
          <Container text>
            <Header>Lehigh education!</Header>
          </Container>
        </Segment>
      </EducationLayout>
    </MainLayout>
  )
}

export default Lehigh
