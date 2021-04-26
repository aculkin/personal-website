export const projects = [
  {
    projectName: 'Link Smart',
    imageUrl: '/projects/link-smart.png',
    ongoing: true,
    startDate: 'April 2021',
    endDate: null,
    description: `Link Smart is a personal project I've been working on in my free time. It's an web app that allows users to create a single web-page that they can edit and customize to link to other sites, like projects they're working on, social media and things like that. It's meant to solve the problem with most social media profiles only letting you put one link in your profile; how do you choose which one? The project is a competitor to the industry leader "Link Tree", except that it provides all of the features and analytics that Link Tree does for free.`,
    features: [
      'Advanced analytics like views and clicks',
      'Customization options like changing the colors of links',
      'Features like passthrough links and priority links',
    ],
    url: 'https://linksmart.app',
  },
  {
    projectName: 'Bot Watt',
    imageUrl: '/projects/bot-watt.png',
    ongoing: true,
    startDate: 'January, 2021',
    endDate: null,
    description: `As the lead engineer and Co-founder of Bot Watt, it was my job to develop a platform where users can search for information about clean energy projects. This involved managing subscriptions, web-scraping online data, front-end UI development, and secure backend API routes to allow only specific users to access certain information`,
    features: [
      'The most clean energy projects in a single database online',
      'Advanced site mapping features utilzing external APIs and multiple data sources',
      'As a company, the ability to "claim" a project and add it to your portfolio.',
    ],
    url: 'https://www.botwatt.com',
  },
  {
    projectName: 'Roof Rally',
    imageUrl: '/projects/roof-rally.jpg',
    ongoing: false,
    startDate: 'October 2019',
    endDate: 'November 2020',
    description: `At Roof Rally, I lead a team of developers to build an online platform where homeowners who needed a new roof could get bids on their roof without ever needing to leave their house. This process involved "digitizing the roof" through a third party, putting together a scope of work for the job, and getting bids from multiple roofing contractors all done automatically through the platform. My work here involved a lot of work with external API's and integration of manual processes into the digital platform.`,
    features: [
      'Modern UI to help a homeowner to choose a roof that looks best for them.',
      'Integration with Salesforce API to track roofing companies, customers and jobs.',
      'Advanced payment implementation with Stripe with both subscriptions (for roofers) and single payments (for homeowners).',
    ],
    url: 'https://www.youtube.com/channel/UCChknz9156XoNcul6-Ng9iA',
  },
]

export default projects
