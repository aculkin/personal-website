export const languages = [
  {
    name: 'Javascript',
    shortDescription: 'Popular language for interactive web development',
    proficiency: 3,
    description:
      'I’ve always been a proponent of Javascript as a front end and back end language, especially when it comes to web based projects. In addition, the work required to get a new project up and running is minimal compared to other languages so it makes sense in the fast paced world of startups. A strictly typed language like Java would be good for companies willing to spend more time on development, but in a startup, speed is arguably most important. In my experience managing younger teams, it is much easier to have a single language that we can use on both the front end and the back end.',
    link: 'https://www.javascript.com/',
    imgLink: '/tech/javascript.png',
  },
  {
    name: 'Typescript',
    shortDescription: 'Typed version of Javascript developed by Microsoft',
    proficiency: 2,
    description:
      'Typescript has all the good parts about Javascript and also fixes some of the issues many have with the language. Typing does take a little more development time, but the end result is worth it due to several factors. Diagnosing errors before they happen becomes much easier, and the likelihood of mistakes from accessing unexpected variable types decrease as well. I’ve often taken the approach of prototyping with javascript, just to get something up and running, and then transitioning to typescript slowly once the proof of concept exists and the product requirements are more defined.',
    link: 'https://www.typescriptlang.org/',
    imgLink: '/tech/typescript.png',
  },
  {
    name: 'HTML',
    shortDescription: 'Language of web pages, often used with CSS',
    proficiency: 3,
    description:
      "While HTML is a basica language (and really more of a framework than an actual programing language), it's extremely important to understand the details of how it works when developing in other frameworks such as React. Understanding HTML unlocks powerful tools for manipulating browsers properly and without security weaknesses.",
    link: 'https://www.w3schools.com/html/',
    imgLink: '/tech/html.webp',
  },
  {
    name: 'CSS',
    shortDescription: 'Styling framework for webpages, used with HTML',
    proficiency: 2,
    description: `Often times, when developing web applications, it's useful to do so with a styling framework that comes with its own CSS style sheet. Using a framework like Material UI or Semantic UI usually helps with development time, and user interface optomization. However, when those frameworks fall short, those are the times where knowing how to integrate CSS into your framework efficiently, effectively, and without using the "important tag (!)" everywhere is very useful.`,
    link: 'https://www.w3schools.com/css/default.asp',
    imgLink: '/tech/css.webp',
  },
  {
    name: 'Matlab',
    shortDescription:
      'Array based language and software often used for Engineering analysis',
    proficiency: 2,
    description:
      'While its use as programing language is limited to some pretty specific use cases, Matlab really shines when used with other software provided by Mathworks like simulink. Matlab can be used to model complex dynamic systems and is often used with physical sensors and real world data. Matlab is also very useful when working exclusively with matricies or large arrays.',
    link: 'https://www.mathworks.com/products/matlab.html',
    imgLink: '/tech/matlab.png',
  },
  {
    name: 'Python',
    shortDescription:
      'Developer-friendly general-purpose language emphasizing readability',
    proficiency: 1,
    description:
      'Python is an object-oriented language that was developed to emphasize readability. It is dynamically typed, like javascript, and includes a wide variety of libaries to assist developers with building projects. Web applications developed with python often make use of the Django library for the backend due to the amount of features automatically included compared to other backend frameworks.',
    link: 'https://www.python.org/',
    imgLink: '/tech/python.png',
  },
  {
    name: 'Java',
    shortDescription: 'Light weight, class-based, object-oriented language.',
    proficiency: 1,
    description:
      'Developed by Oracle, Java was developed to let application developers "write once, run anywhere (WORA)". Typically compiled to bytecode, Java code can run on any platform that supports Java without needing to recompile, or re-write the code.',
    link: 'https://www.java.com/en/',
    imgLink: '/tech/java.png',
  },
  {
    name: 'Ruby on Rails',
    shortDescription: 'Scaleable web development framework built with Ruby',
    proficiency: 1,
    description:
      "Ruby is an extremely powerful web development framework (especially when used with Rails to deploy fullstack web applications) because of its robust built in features like testing, deplloyment, and the MVC architecture. It's also efficient and scaleble compared to other web app frameworks.",
    link: 'https://rubyonrails.org/',
    imgLink: '/tech/ruby-on-rails.png',
  },
]

export default languages
