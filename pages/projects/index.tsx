import * as React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Header, Container } from 'semantic-ui-react'

import { API } from '../../API'
import { MainLayout } from '../../layouts/main-layout'
import { ProjectItem } from '../../components/ProjectItem'

const pageStyle = {
  backgroundImage: 'url(/projects-background.jpg)',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  paddingBottom: '50px',
}

const headingStyle = {
  paddingTop: '2em',
  fontSize: '3em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

interface Project {
  id: number
  name: string
  startDate: string
  endDate: string
  imageUrl: string
  features: string
  linkName: string
  description: string
  link: string
}

interface ProjectArray {
  projects: [Project]
}

export const Projects: React.FC<ProjectArray> = ({ projects }) => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Projects</title>
        <meta
          name="description"
          content="The projects I've worked on over the course of my career can be found here."
        />
      </Head>
      <div style={pageStyle}>
        <Header style={headingStyle} textAlign="center" as="h1">
          Projects
        </Header>
        <Container>
          {projects?.map((project, index) => {
            return <ProjectItem key={project?.id || index} project={project} />
          })}
        </Container>
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await API.projects.loadAll()
  return {
    props: { projects },
  }
}

export default Projects
