export const technologies = [
  {
    name: 'Stripe',
    shortDescription: 'Payment processing and subscription management',
    proficiency: 3,
    description:
      'Stripe is the industry standard for payment and subscription management. It has a robust API that allows developers to use it in a wide varreity of uses from the extremely simple to the exceedingly complex. I used stripe at both Roof Rally and Bot Watt to manage both individual payments and subscriptions.',
    link: 'https://stripe.com/',
    imgLink: '/tech/stripe.png',
  },
  {
    name: 'Heroku',
    shortDescription: 'Cloud-based application hosting provider',
    proficiency: 3,
    description:
      'Heroku provides users with extremely developer friendly tools and workflows to deploy web based applications to the cloud. It includes a CI/CD pipeline tool, different environments for testing, and even hosted database add-ons making it very useful to build and deploy applications.',
    link: 'https://www.heroku.com/',
    imgLink: '/tech/heroku.png',
  },
  {
    name: 'Mapbox',
    shortDescription: 'Mapping API (alternative to Google Maps)',
    proficiency: 3,
    description:
      'Mapbox is an alternative to Google Maps or ArcGIS that has a variety of benefits. It may not have the backing of Google, but it does provide significant performance benefits when rendering and displaying large quantities of Data. The mapping feature at Bot Watt was developed with Mapbox because of its ease of use and speed, even when working with hundreds of thousands of different points and many different layers.',
    link: 'https://www.mapbox.com/',
    imgLink: '/tech/mapbox.png',
  },
  {
    name: 'AWS S3',
    shortDescription: 'Cloud-based object storage and versioning',
    proficiency: 2,
    description:
      "AWS S3 is the industry standard for cloud storage and access. One can store a large amount of documents on AWS to be ready for access, or work with their SDK to allow users to upload their own files like profile pictures programatically. AWS continues to have the most customization options of any cloud storage I've worked with.",
    link: 'https://aws.amazon.com/s3/',
    imgLink: '/tech/aws-s3.png',
  },
  {
    name: 'Google Analytics',
    shortDescription: 'Free analytics tool for websites',
    proficiency: 2,
    description:
      "Google analytics is a robust analytics platform within the Google ecosystem. It's extremely powerful when you use it with Google Ads becuase it allows an additional level of customization with goals, specific user metrics and page view statistics.",
    link: 'https://analytics.google.com/',
    imgLink: '/tech/google-analytics.png',
  },
  {
    name: 'Unbounce',
    shortDescription: 'A/B testing platform for landing pages',
    proficiency: 2,
    description:
      'Unbounce is a wonderful tool used to create landing pages to take users after clicking on your ads. With Unbounce you can easily test different campaign phrases, imgaes, and layouts to see which generating the highest clickthrough rates and conversions. I used Unbounce a lot with Roof Rally while working with the marketing team to increase our ad campaign converstions.',
    link: 'https://unbounce.com/',
    imgLink: '/tech/unbounce.png',
  },
  {
    name: 'Rollbar',
    shortDescription: 'Error monitoring, tracking and resolution platform',
    proficiency: 2,
    description:
      'Rollbar provides error monitoring capabilites with a lot of customization. You can decide when you want to receive alerts about particualr issues, as you scale up a product, to provide the best error triage and management for your team. In addition it uses AI to provide inteligent error grouping so errors that come from a similar source but are slightly different can be identified, aggregated, and triaged appropriately.',
    link: 'https://rollbar.com/',
    imgLink: '/tech/rollbar.png',
  },
  {
    name: 'Sendgrid',
    shortDescription:
      'Communication platform specializing in sending transactional Email',
    proficiency: 3,
    description:
      "Sendgrid provides transactional email sending capabilities, I've worked with several transactional email providers in the past and sendgrid is by far the easiest to use. It's editing platform is unmatched and allows for emails to be as customizable or as simple as you want. ",
    link: 'https://sendgrid.com/',
    imgLink: '/tech/sendgrid.png',
  },
  {
    name: 'Twilio',
    shortDescription: 'Platform for phone and text communications',
    proficiency: 2,
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

export default technologies
