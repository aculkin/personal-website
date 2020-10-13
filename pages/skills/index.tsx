import * as React from 'react'
import Head from 'next/head'
import { Card, Divider, Header, Container } from 'semantic-ui-react'

import SkillItem from '../../components/SkillItem'
import { MainLayout } from '../../layouts/main-layout'

const skills = [
  {
    name: 'Node',
    shortDescription: 'Javascript back-end server language',
    description: 'node description',
    link: 'https://nodejs.org/en/',
    imgLink: '/tech/node.png',
  },
  {
    name: 'Javascript',
    shortDescription: 'Popular language for web development',
    description: 'react description',
    link: 'https://www.javascript.com/',
    imgLink: '/tech/javascript.png',
  },
  {
    name: 'React',
    shortDescription: 'UI Framework for developing web apps',
    description: 'description',
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
    name: 'Sequelize',
    shortDescription: 'Javascript-based Object-Relational-Mapper',
    description: 'description',
    link: 'https://sequelize.org/',
    imgLink: '/tech/sequelize.png',
  },
  {
    name: 'Next.js',
    shortDescription: 'Jamstack focused Server Side Rendering library',
    description: 'description',
    link: 'https://nextjs.org/',
    imgLink: '/tech/next.png',
  },
  {
    name: 'AWS S3',
    shortDescription: 'Cloud-based object storage and versioning',
    description: 'description',
    link: 'https://aws.amazon.com/s3/',
    imgLink: '/tech/aws-s3.png',
  },
  {
    name: 'Typescript',
    shortDescription: 'Typed version of the Javascript language',
    description: 'typescript description',
    link: 'https://www.typescriptlang.org/',
    imgLink: '/tech/typescript.png',
  },
  {
    name: 'Testing Library',
    shortDescription: 'Testing library focused on end user interaction',
    description: 'description',
    link: 'https://testing-library.com/',
    imgLink: '/tech/react-testing-library.png',
  },
  {
    name: 'Puppeteer',
    shortDescription: 'Web-scraping API built for the chromium browser',
    description: 'description',
    link: 'https://pptr.dev/',
    imgLink: '/tech/puppeteer.png',
  },
]

const secondarySkills = [
  {
    name: 'Passport.js',
    shortDescription: 'Authentication library used with Express',
    description: 'description',
    link: 'http://www.passportjs.org/',
    imgLink: '/tech/passport.png',
  },
  {
    name: 'PostgreSQL',
    shortDescription: 'Open source NoSQL database',
    description: 'description',
    link: 'https://www.postgresql.org/',
    imgLink: '/tech/postgresql.png',
  },
  {
    name: 'Mapbox',
    shortDescription: 'Mapping API as an alternative to Google Maps',
    description: 'description',
    link: 'https://www.mapbox.com/',
    imgLink: '/tech/mapbox.png',
  },
  {
    name: 'Webpack',
    shortDescription: 'short description',
    description: 'description',
    link: 'https://webpack.js.org/',
    imgLink: '/tech/webpack.jpg',
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
      <Header textAlign="center" as="h1">
        Skills / Technologies
      </Header>
      <Container>
        <Card.Group centered itemsPerRow={5}>
          {[...skills, ...secondarySkills].map((skill) => {
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
