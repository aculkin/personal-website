import * as React from 'react'
import Head from 'next/head'
import { Card, Divider, Header, Container } from 'semantic-ui-react'

import SkillItem from '../../components/SkillItem'
import { MainLayout } from '../../layouts/main-layout'

const languages = [
  {
    name: 'Javascript',
    shortDescription: 'Popular language for web development',
    description:
      "I've always been a proponent of javascript and its been the primary language used at both my companies. I think there",
    link: 'https://www.javascript.com/',
    imgLink: '/tech/javascript.png',
  },
  {
    name: 'Typescript',
    shortDescription: 'Typed version of the Javascript language',
    description: 'typescript description',
    link: 'https://www.typescriptlang.org/',
    imgLink: '/tech/typescript.png',
  },
]

const frameworks = [
  {
    name: 'React',
    shortDescription: 'UI Framework for developing web apps',
    description:
      'React is a fast growing front end framework extremely useful for developing complex web apps. At ',
    link: 'https://reactjs.org/',
    imgLink: '/tech/react.png',
  },
  {
    name: 'Redux',
    shortDescription: 'State management library for web applications',
    description: 'description',
    link: 'https://redux.js.org/',
    imgLink: '/tech/redux.png',
  },
  {
    name: 'Express',
    shortDescription: 'Simple API routing framework for node',
    description: 'description',
    link: 'https://expressjs.com/',
    imgLink: '/tech/express.png',
  },
  {
    name: 'Passport.js',
    shortDescription: 'Authentication library used with Express',
    description: 'description',
    link: 'http://www.passportjs.org/',
    imgLink: '/tech/passport.png',
  },
  {
    name: 'Sequelize',
    shortDescription: 'Javascript-based Object-Relational-Mapper',
    description: 'description',
    link: 'https://sequelize.org/',
    imgLink: '/tech/sequelize.png',
  },
  {
    name: 'Semantic UI',
    shortDescription: 'Free open source design framework',
    description: 'description',
    link: 'https://semantic-ui.com/',
    imgLink: '/tech/semantic-ui.png',
  },
  {
    name: 'Next.js',
    shortDescription: 'Jamstack focused Server Side Rendering library',
    description: 'description',
    link: 'https://nextjs.org/',
    imgLink: '/tech/next.png',
  },
  {
    name: 'Testing Library',
    shortDescription: 'Testing library focused on end user interaction',
    description: 'description',
    link: 'https://testing-library.com/',
    imgLink: '/tech/react-testing-library.png',
  },
]

const technologies = [
  {
    name: 'Node',
    shortDescription: 'Javascript back-end server language',
    description:
      "I've used Node.JS as the backend server language for both of the recent software companies I've worked on. In my experience it's easy to learn and has several frameworks that work well together to create a robust REST API and backend system.",
    link: 'https://nodejs.org/en/',
    imgLink: '/tech/node.png',
  },
  {
    name: 'Stripe',
    shortDescription: 'Payment processing/ subscription management',
    description: 'description',
    link: 'https://stripe.com/',
    imgLink: '/tech/stripe.png',
  },
  {
    name: 'Heroku',
    shortDescription: 'Cloud-based application hosting provider',
    description: 'description',
    link: 'https://www.heroku.com/',
    imgLink: '/tech/heroku.png',
  },
  {
    name: 'Mapbox',
    shortDescription: 'Mapping API as an alternative to Google Maps',
    description: 'description',
    link: 'https://www.mapbox.com/',
    imgLink: '/tech/mapbox.png',
  },
  {
    name: 'AWS S3',
    shortDescription: 'Cloud-based object storage and versioning',
    description: 'description',
    link: 'https://aws.amazon.com/s3/',
    imgLink: '/tech/aws-s3.png',
  },
  {
    name: 'Puppeteer',
    shortDescription: 'Web-scraping API built for the chromium browser',
    description: 'description',
    link: 'https://pptr.dev/',
    imgLink: '/tech/puppeteer.png',
  },
  {
    name: 'Google Analytics',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://analytics.google.com/',
    imgLink: '/tech/google-analytics.png',
  },
  {
    name: 'Unbounce',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://unbounce.com/',
    imgLink: '/tech/unbounce.png',
  },
  {
    name: 'Rollbar',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://rollbar.com/',
    imgLink: '/tech/rollbar.png',
  },
  {
    name: 'Sendgrid',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://sendgrid.com/',
    imgLink: '/tech/sendgrid.png',
  },
  {
    name: 'Twilio',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://www.twilio.com/',
    imgLink: '/tech/twilio.png',
  },
  {
    name: 'Salesforce',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://www.salesforce.com/',
    imgLink: '/tech/salesforce.png',
  },
  {
    name: 'Webpack',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://webpack.js.org/',
    imgLink: '/tech/webpack.png',
  },
]

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
        <Header textAlign="center" as="h3">
          Frameworks
        </Header>
        <Divider hidden />
        <Card.Group stackable doubling centered itemsPerRow={5}>
          {frameworks.map((skill) => {
            const { name, shortDescription, description, link, imgLink } = skill
            return (
              <SkillItem
                key={name}
                name={name}
                shortDescription={shortDescription}
                description={description}
                link={link}
                imgLink={imgLink}
              />
            )
          })}
        </Card.Group>
        <Divider />
        <Header textAlign="center" as="h3">
          Technologies
        </Header>
        <Divider hidden />
        <Card.Group stackable doubling centered itemsPerRow={5}>
          {technologies.map((skill) => {
            const { name, shortDescription, description, link, imgLink } = skill
            return (
              <SkillItem
                key={name}
                name={name}
                shortDescription={shortDescription}
                description={description}
                link={link}
                imgLink={imgLink}
              />
            )
          })}
        </Card.Group>
        <Divider hidden />
        <Divider />
        <Header textAlign="center" as="h3">
          Languages
        </Header>
        <Divider hidden />
        <Card.Group stackable doubling centered itemsPerRow={5}>
          {languages.map((skill) => {
            const { name, shortDescription, description, link, imgLink } = skill
            return (
              <SkillItem
                key={name}
                name={name}
                shortDescription={shortDescription}
                description={description}
                link={link}
                imgLink={imgLink}
              />
            )
          })}
        </Card.Group>
      </Container>
      <Divider hidden />
    </MainLayout>
  )
}

export default Skills
