export const frameworks = [
  {
    name: 'Node',
    shortDescription: 'Javascript back-end server language',
    proficiency: 2,
    description:
      "I've used Node.JS as the backend server language for both of the recent software companies I've worked on. In my experience it's easy to learn and has several frameworks that work well together to create a robust REST API and backend system.",
    link: 'https://nodejs.org/en/',
    imgLink: '/tech/node.png',
  },
  {
    name: 'React',
    shortDescription: 'UI Framework for developing web apps',
    proficiency: 2,
    description:
      'An amazing front-end framework that lets you build responsive web apps using a declarative, component based model. Initially developed by Facebook, it’s grown substantially with thousands of third party libraries built specifically for this framework. With the release of Hooks in React 16.8, it has become even easier to manage local state and use component based architecture without the need for class based components. I’ve implemented react based front end interfaces with both Roof Rally and Bot Watt.',
    link: 'https://reactjs.org/',
    imgLink: '/tech/react.png',
  },
  {
    name: 'Express',
    shortDescription: 'Simple API routing framework for node',
    proficiency: 2,
    description:
      'A minimalist backend routing framework that allows you to create Web applications and API routes. Using express is very easy and it comes with some powerful tools one needs for most servers (Compression middleware, body-parsing middleware, and even session middleware). I often use express as a baseline for my API routes and use other third party libraries in conjunction for authentication, database interaction and error handling.',
    link: 'https://expressjs.com/',
    imgLink: '/tech/express.png',
  },
  {
    name: 'Sequelize',
    shortDescription: 'Javascript-based Object-Relational-Mapper',
    proficiency: 2,
    description:
      "A powerful javascript based ORM used to interact with a database. Sequelize lets backend developers query and modify a database using javascript as opposed to manually writing the SQL queries. This is extremely useful in environments where optimizing SQL is not the biggest focus. Optimizing queries might be important in large scale applications, but in the world of startups it's more important that the development environment lends itself to quick iteration and building. That being said Sequelize does allow for surprising complexity when it comes to SQL concepts.",
    link: 'https://sequelize.org/',
    imgLink: '/tech/sequelize.png',
  },
  {
    name: 'Redux',
    shortDescription: 'State management library for web applications',
    proficiency: 2,
    description:
      'A global state management framework for the client side of a web app. It’s extremely useful to store things you will use repeatedly over the whole app (user information, a type of subscription, or other globally applicable data). Similarly to React Hooks, hooks with React-Redux makes it even easier to access your single source of truth throughout your entire front end. A frequently used pattern in my projects is to load data into the redux store first resulting in a longer load time initially, but an increase in the speed of an application for the rest of the experience. This method does have drawbacks as you might have some data that you do not want, or can’t, load initially.',
    link: 'https://redux.js.org/',
    imgLink: '/tech/redux.png',
  },
  {
    name: 'Passport.js',
    shortDescription: 'Authentication library used with Node and Express',
    proficiency: 1,
    description:
      'A node based authentication library with many different strategies for user based authentication. Passport allows you to easily use google O-auth, facebook O-auth, and your own strategies for user authentication.',
    link: 'http://www.passportjs.org/',
    imgLink: '/tech/passport.png',
  },
  {
    name: 'Semantic UI',
    shortDescription: 'Free open source UI-design framework',
    proficiency: 2,
    description:
      'Semantic UI is an open source library for designing user interfaces. I’ve mostly worked with Semantic UI React, which is the official react integration for Semantic UI. This design library is great for both prototyping and customizing a production design. It lets you make responsive pages quickly with a wide variety of different components and provides an intuitive way to interact with them.',
    link: 'https://semantic-ui.com/',
    imgLink: '/tech/semantic-ui.png',
  },
  {
    name: 'Next.js',
    shortDescription: 'Jamstack focused Server Side Rendering library',
    proficiency: 1,
    description:
      'One of the best SSR (Server Side Rendering) frameworks for React websites on the market. Next.js has a variety of powerful tools to assist with developing an SSR application. It lets you build dynamic pages in a variety of ways either at page build time or page request time. This framework works extremely well with a headless CMS platform.',
    link: 'https://nextjs.org/',
    imgLink: '/tech/next.png',
  },
  {
    name: 'Testing Library',
    shortDescription: 'Testing library focused on end user interaction',
    proficiency: 1,
    description:
      'A testing framework that helps write and think about tests in a user-centric way. The problem with a lot of testing frameworks is that they’re limited in the amount of confidence you can have in your test coverage. This is because they’re focused on implementation, not necessarily functionality. React Testing Library helps developers write tests that give a higher degree of confidence by discouraging the inclusion of implementation details in tests.',
    link: 'https://testing-library.com/',
    imgLink: '/tech/react-testing-library.png',
  },
  {
    name: 'Webpack',
    shortDescription: 'Bundling module used for',
    proficiency: 1,
    description:
      'A bundling tool for minimizing javascript code to be run on the client side of a web application. Webpack is extremely valuable in developing applications with a significant amount of Javascript code. You can customize webpack with a variety of different plugins to fit your teams needs. While Next JS has a built in webpack plugin, most frameworks do not, so understanding how Webpack works and how to configure it are extremely valuable skills. Even with Next JS, one needs to understand how it works and if certain configuration options out of the box need to be changed for each specific use case.',
    link: 'https://webpack.js.org/',
    imgLink: '/tech/webpack.png',
  },
  {
    name: 'Puppeteer',
    shortDescription: 'Web-scraping API built for the chromium browser',
    proficiency: 1,
    description:
      'A web scraping framework written for Node and using the chromium browser. It can perform headless scraping or not, and has a bunch of options for querying web pages and html. The best part about puppeteer is that it renders the full page including javascript instead of just fetching the HTML. This allows for a more powerful scraping tool for modern websites and web apps.',
    link: 'https://pptr.dev/',
    imgLink: '/tech/puppeteer.png',
  },
]

export default frameworks
