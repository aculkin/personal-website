import * as React from 'react'
import Head from 'next/head'
import { Card, Divider, Header, Container } from 'semantic-ui-react'

import SkillItem from '../../components/SkillItem'
import { MainLayout } from '../../layouts/main-layout'
import { languages, frameworks, technologies } from '../../utility'

export const Skills: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Andrew Culkin | Skills</title>
        <meta
          name="description"
          content="All the teechnologies I've worked with, and skills I have"
        />
      </Head>
      <Divider hidden />
      <Container>
        <Header textAlign="center" as="h1">
          Skills
          <Header.Subheader>
            Frameworks, Technologies, and Languages I&apos;ve worked with
          </Header.Subheader>
        </Header>
        <Divider hidden />
      </Container>
      <Container>
        <Divider />
        <Header textAlign="center" as="h2">
          Frameworks
        </Header>
        <Divider hidden />
        <Card.Group stackable doubling centered itemsPerRow={5}>
          {frameworks.map((skill) => (
            <SkillItem skill={skill} key={skill.name} />
          ))}
        </Card.Group>
        <Divider />
        <Header textAlign="center" as="h2">
          Technologies
        </Header>
        <Divider hidden />
        <Card.Group stackable doubling centered itemsPerRow={5}>
          {technologies.map((skill) => (
            <SkillItem skill={skill} key={skill.name} />
          ))}
        </Card.Group>
        <Divider hidden />
        <Divider />
        <Header textAlign="center" as="h2">
          Languages
        </Header>
        <Divider hidden />
        <Card.Group stackable doubling centered itemsPerRow={5}>
          {languages.map((skill) => (
            <SkillItem skill={skill} key={skill.name} />
          ))}
        </Card.Group>
      </Container>
      <Divider hidden />
    </MainLayout>
  )
}

export default Skills
