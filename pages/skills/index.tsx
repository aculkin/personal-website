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
      <div
        style={{
          backgroundImage: 'url(/skills-background.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          paddingBottom: '50px',
        }}
      >
        <Container>
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
          <Header
            style={{
              fontSize: '1.75em',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 8px #000000',
            }}
            textAlign="center"
            as="h2"
          >
            Frameworks
          </Header>
          <Divider hidden />
          <Card.Group stackable doubling centered itemsPerRow={5}>
            {frameworks.map((skill) => (
              <SkillItem skill={skill} key={skill.name} type="framework" />
            ))}
          </Card.Group>
          <Divider />
          <Header
            style={{
              fontSize: '1.75em',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 8px #000000',
            }}
            textAlign="center"
            as="h2"
          >
            Technologies
          </Header>
          <Divider hidden />
          <Card.Group stackable doubling centered itemsPerRow={5}>
            {technologies.map((skill) => (
              <SkillItem skill={skill} key={skill.name} type="technology" />
            ))}
          </Card.Group>
          <Divider hidden />
          <Divider />
          <Header
            style={{
              fontSize: '1.75em',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 8px #000000',
            }}
            textAlign="center"
            as="h2"
          >
            Languages
          </Header>
          <Divider hidden />
          <Card.Group stackable doubling centered itemsPerRow={5}>
            {languages.map((skill) => (
              <SkillItem skill={skill} key={skill.name} type="language" />
            ))}
          </Card.Group>
        </Container>
      </div>
    </MainLayout>
  )
}

export default Skills
