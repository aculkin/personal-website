import * as React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Card, Divider, Header, Container } from 'semantic-ui-react'

import { API } from '../../API'
import SkillItem from '../../components/SkillItem'
import { MainLayout } from '../../layouts/main-layout'

interface Skill {
  id: number
  name: string
  shortDescription: string
  proficiency: number
  description: string
  link: string
  imgLink: string
}

interface Skills {
  languages: [Skill]
  technologies: [Skill]
  frameworks: [Skill]
}

const headerStyle = {
  paddingTop: '2em',
  fontSize: '3em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

const subheaderStyle = {
  fontSize: '1.75em',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 8px #000000',
}

export const Skills: React.FC<Skills> = ({
  languages,
  technologies,
  frameworks,
}) => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Skills</title>
        <meta
          name="description"
          content="All the teechnologies I've worked with, and skills I've developed over the years"
        />
      </Head>
      <div
        style={{
          backgroundImage: 'url(/skills-background.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          paddingBottom: '50px',
        }}
      >
        <Container>
          <Header style={headerStyle} textAlign="center" as="h1">
            Skills
            <Header.Subheader
              style={{
                fontSize: '.4em',
                color: 'white',
                textShadow: '2px 2px 8px #000000',
              }}
            >
              Frameworks, Technologies, and Languages I&apos;ve worked with
            </Header.Subheader>
          </Header>
          <Divider hidden />
        </Container>
        <Container>
          <Divider />
          <Header style={subheaderStyle} textAlign="center" as="h2">
            Frameworks
          </Header>
          <Divider hidden />
          <Card.Group stackable doubling centered itemsPerRow={5}>
            {frameworks?.map((skill, index) => (
              <SkillItem
                skill={skill}
                key={skill?.name || index}
                type="framework"
              />
            ))}
          </Card.Group>
          <Divider />
          <Header style={subheaderStyle} textAlign="center" as="h2">
            Technologies
          </Header>
          <Divider hidden />
          <Card.Group stackable doubling centered itemsPerRow={5}>
            {technologies?.map((skill, index) => (
              <SkillItem
                skill={skill}
                key={skill?.name || index}
                type="technology"
              />
            ))}
          </Card.Group>
          <Divider hidden />
          <Divider />
          <Header style={subheaderStyle} textAlign="center" as="h2">
            Languages
          </Header>
          <Divider hidden />
          <Card.Group stackable doubling centered itemsPerRow={5}>
            {languages?.map((skill, index) => (
              <SkillItem
                skill={skill}
                key={skill?.name || index}
                type="language"
              />
            ))}
          </Card.Group>
        </Container>
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { languages } = await API.languages.loadAll()
  const { technologies } = await API.technologies.loadAll()
  const { frameworks } = await API.frameworks.loadAll()
  return {
    props: {
      languages,
      technologies,
      frameworks,
    },
  }
}

export default Skills
