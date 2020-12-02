import * as React from 'react'
import Head from 'next/head'
import { Card, Divider, Header, Container } from 'semantic-ui-react'

import SkillItem from '../../components/SkillItem'
import { MainLayout } from '../../layouts/main-layout'

const languages = [
  {
    name: 'Javascript',
    shortDescription: 'Popular language for web development',
    proficiency: 4,
    description:
      'I’ve always been a proponent of Javascript as a front end and back end language, especially when it comes to web based projects. In addition, the work required to get a new project up and running is minimal compared to other languages so it makes sense in the fast paced world of startups. A strictly typed language like Java would be good for companies willing to spend more time on development, but in a startup, speed is arguably most important. In my experience managing younger teams, it is much easier to have a single language that we can use on both the front end and the back end.',
    link: 'https://www.javascript.com/',
    imgLink: '/tech/javascript.png',
  },
  {
    name: 'Typescript',
    shortDescription: 'Typed version of Javascript developed by Microsoft',
    proficiency: 3,
    description:
      'Typescript has all the good parts about Javascript and also fixes some of the issues many have with the language. Typing does take a little more development time, but the end result is worth it due to several factors. Diagnosing errors before they happen becomes much easier, and the likelihood of mistakes from accessing unexpected variable types decrease as well. I’ve often taken the approach of prototyping with javascript, just to get something up and running, and then transitioning to typescript slowly once the proof of concept exists and the product requirements are more defined. ',
    link: 'https://www.typescriptlang.org/',
    imgLink: '/tech/typescript.png',
  },
]

const frameworks = [
  {
    name: 'Node',
    shortDescription: 'Javascript back-end server language',
    proficiency: 4,
    description:
      "I've used Node.JS as the backend server language for both of the recent software companies I've worked on. In my experience it's easy to learn and has several frameworks that work well together to create a robust REST API and backend system.",
    link: 'https://nodejs.org/en/',
    imgLink: '/tech/node.png',
  },
  {
    name: 'React',
    shortDescription: 'UI Framework for developing web apps',
    proficiency: 4,
    description:
      'An amazing front-end framework that lets you build responsive web apps using a declarative, component based model. Initially developed by Facebook, it’s grown substantially with thousands of third party libraries built specifically for this framework. With the release of Hooks in React 16.8, it has become even easier to manage local state and use component based architecture without the need for class based components. I’ve implemented react based front end interfaces with both Roof Rally and Bot Watt.',
    link: 'https://reactjs.org/',
    imgLink: '/tech/react.png',
  },
  {
    name: 'Express',
    shortDescription: 'Simple API routing framework for node',
    proficiency: 4,
    description:
      'A minimalist backend routing framework that allows you to create Web applications and API routes. Using express is very easy and it comes with some powerful tools one needs for most servers (Compression middleware, body-parsing middleware, and even session middleware). I often use express as a baseline for my API routes and use other third party libraries in conjunction for authentication, database interaction and error handling.',
    link: 'https://expressjs.com/',
    imgLink: '/tech/express.png',
  },
  {
    name: 'Sequelize',
    shortDescription: 'Javascript-based Object-Relational-Mapper',
    proficiency: 4,
    description:
      "A powerful javascript based ORM used to interact with a database. Sequelize lets backend developers query and modify a database using javascript as opposed to manually writing the SQL queries. This is extremely useful in environments where optimizing SQL is not the biggest focus. Optimizing queries might be important in large scale applications, but in the world of startups it's more important that the development environment lends itself to quick iteration and building. That being said Sequelize does allow for surprising complexity when it comes to SQL concepts.",
    link: 'https://sequelize.org/',
    imgLink: '/tech/sequelize.png',
  },
  {
    name: 'Redux',
    shortDescription: 'State management library for web applications',
    proficiency: 4,
    description:
      'A global state management framework for the client side of a web app. It’s extremely useful to store things you will use repeatedly over the whole app (user information, a type of subscription, or other globally applicable data). Similarly to React Hooks, hooks with React-Redux makes it even easier to access your single source of truth throughout your entire front end. A frequently used pattern in my projects is to load data into the redux store first resulting in a longer load time initially, but an increase in the speed of an application for the rest of the experience. This method does have drawbacks as you might have some data that you do not want, or can’t, load initially.',
    link: 'https://redux.js.org/',
    imgLink: '/tech/redux.png',
  },
  {
    name: 'Passport.js',
    shortDescription: 'Authentication library used with Node and Express',
    proficiency: 3,
    description:
      'A node based authentication library with many different strategies for user based authentication. Passport allows you to easily use google O-auth, facebook O-auth, and your own strategies for user authentication.',
    link: 'http://www.passportjs.org/',
    imgLink: '/tech/passport.png',
  },
  {
    name: 'Semantic UI',
    shortDescription: 'Free open source UI-design framework',
    proficiency: 4,
    description:
      'Semantic UI is an open source library for designing user interfaces. I’ve mostly worked with Semantic UI React, which is the official react integration for Semantic UI. This design library is great for both prototyping and customizing a production design. It lets you make responsive pages quickly with a wide variety of different components and provides an intuitive way to interact with them.',
    link: 'https://semantic-ui.com/',
    imgLink: '/tech/semantic-ui.png',
  },
  {
    name: 'Next.js',
    shortDescription: 'Jamstack focused Server Side Rendering library',
    proficiency: 3,
    description:
      'One of the best SSR (Server Side Rendering) frameworks for React websites on the market. Next.js has a variety of powerful tools to assist with developing an SSR application. It lets you build dynamic pages in a variety of ways either at page build time or page request time. This framework works extremely well with a headless CMS platform.',
    link: 'https://nextjs.org/',
    imgLink: '/tech/next.png',
  },
  {
    name: 'Testing Library',
    shortDescription: 'Testing library focused on end user interaction',
    proficiency: 2,
    description:
      'A testing framework that helps write and think about tests in a user-centric way. The problem with a lot of testing frameworks is that they’re limited in the amount of confidence you can have in your test coverage. This is because they’re focused on implementation, not necessarily functionality. React Testing Library helps developers write tests that give a higher degree of confidence by discouraging the inclusion of implementation details in tests.',
    link: 'https://testing-library.com/',
    imgLink: '/tech/react-testing-library.png',
  },
  {
    name: 'Webpack',
    shortDescription: 'Bundling module used for',
    proficiency: 2,
    description:
      'A bundling tool for minimizing javascript code to be run on the client side of a web application. Webpack is extremely valuable in developing applications with a significant amount of Javascript code. You can customize webpack with a variety of different plugins to fit your teams needs. While Next JS has a built in webpack plugin, most frameworks do not, so understanding how Webpack works and how to configure it are extremely valuable skills. Even with Next JS, one needs to understand how it works and if certain configuration options out of the box need to be changed for each specific use case.',
    link: 'https://webpack.js.org/',
    imgLink: '/tech/webpack.png',
  },
  {
    name: 'Puppeteer',
    shortDescription: 'Web-scraping API built for the chromium browser',
    proficiency: 3,
    description:
      'A web scraping framework written for Node and using the chromium browser. It can perform headless scraping or not, and has a bunch of options for querying web pages and html. The best part about puppeteer is that it renders the full page including javascript instead of just fetching the HTML. This allows for a more powerful scraping tool for modern websites and web apps.',
    link: 'https://pptr.dev/',
    imgLink: '/tech/puppeteer.png',
  },
]

const technologies = [
  {
    name: 'Stripe',
    shortDescription: 'Payment processing and subscription management',
    proficiency: 4,
    description: 'description',
    link: 'https://stripe.com/',
    imgLink: '/tech/stripe.png',
  },
  {
    name: 'Heroku',
    shortDescription: 'Cloud-based application hosting provider',
    proficiency: 4,
    description: 'description',
    link: 'https://www.heroku.com/',
    imgLink: '/tech/heroku.png',
  },
  {
    name: 'Mapbox',
    shortDescription: 'Mapping API (alternative to Google Maps)',
    proficiency: 2,
    description: 'description',
    link: 'https://www.mapbox.com/',
    imgLink: '/tech/mapbox.png',
  },
  {
    name: 'AWS S3',
    shortDescription: 'Cloud-based object storage and versioning',
    proficiency: 2,
    description: 'description',
    link: 'https://aws.amazon.com/s3/',
    imgLink: '/tech/aws-s3.png',
  },
  {
    name: 'Google Analytics',
    shortDescription: 'Free analytics tool for websites',
    proficiency: 2,
    description: 'description',
    link: 'https://analytics.google.com/',
    imgLink: '/tech/google-analytics.png',
  },
  {
    name: 'Unbounce',
    shortDescription: 'A/B testing platform for landing pages',
    proficiency: 2,
    description: 'description',
    link: 'https://unbounce.com/',
    imgLink: '/tech/unbounce.png',
  },
  {
    name: 'Rollbar',
    shortDescription: 'Error monitoring, tracking and resolution platform',
    proficiency: 3,
    description: 'description',
    link: 'https://rollbar.com/',
    imgLink: '/tech/rollbar.png',
  },
  {
    name: 'Sendgrid',
    shortDescription:
      'Communication platform specializing in sending transactional Email',
    proficiency: 3,
    description: 'description',
    link: 'https://sendgrid.com/',
    imgLink: '/tech/sendgrid.png',
  },
  {
    name: 'Twilio',
    shortDescription: 'Platform for phone and text communications',
    proficiency: 3,
    description: 'description',
    link: 'https://www.twilio.com/',
    imgLink: '/tech/twilio.png',
  },
  {
    name: 'Salesforce',
    shortDescription: 'Industry standard CRM platform',
    proficiency: 2,
    description: 'description',
    link: 'https://www.salesforce.com/',
    imgLink: '/tech/salesforce.png',
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
