import * as React from 'react'
import Head from 'next/head'
import { Header, Container } from 'semantic-ui-react'

import { MainLayout } from '../../layouts/main-layout'
import { ProjectItem } from '../../components/ProjectItem'
import { projects } from '../../utility/projects'

export const Projects: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Projects</title>
        <meta
          name="description"
          content="The projects I've worked on over the course of my career can be found here."
        />
      </Head>
      <div
        style={{
          backgroundImage: 'url(/projects-background.jpg)',
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
          Projects
        </Header>
        <Container>
          {projects.map((project) => {
            return <ProjectItem key={project.projectName} project={project} />
          })}
        </Container>
      </div>
    </MainLayout>
  )
}

export default Projects
