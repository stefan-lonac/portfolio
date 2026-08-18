interface PersonalCareerType {
  title: string
  company: string
  date: string
  jobType?: string
  jobDescription: Array<string>
}

interface EducationType {
  title: string
  eduType: string
  graduate: string
  date: string
}

export const PERSONAL_CAREER: PersonalCareerType[] = [
  {
    title: 'Full Stack Web Developer',
    jobType: 'Full time',
    company: 'Oversee',
    date: 'June 2025 - Present',
    jobDescription: [
      'Architected and delivered a custom Property Management Portal end-to-end, covering both frontend and backend workflows.',
      'Developed custom WordPress themes and OOP-based plugins using an ACF-driven architecture and REST APIs.',
      'Implemented secure authentication systems including custom login, registration, and role-based access control.',
      'Integrated external CRM and booking APIs with secure and reliable data synchronization.',
      'Built interactive Google Maps features with external property and unit data, including advanced filtering and map-based interactions.',
      'Managed and integrated Google Cloud services and APIs such as Maps, Vision API, Calendar, and Sheets/Excel automation.',
      'Designed and developed admin dashboards with complex business workflows, including leasing, maintenance, and reservation management.',
      'Optimized application performance for large datasets using AJAX, pagination, and server-side filtering techniques.',
    ],
  },
  {
    title: 'Frontend Developer',
    jobType: 'Full time',
    company: 'Consulteer',
    date: 'Mar 2022 - Jan 2025',
    jobDescription: [
      'Developed and maintained Angular web applications with a strong focus on performance, scalability, and clean architecture.',
      'Integrated REST APIs and implemented reactive data flows using RxJS.',
      'Built reusable and modular UI components to ensure consistency and maintainability across applications.',
      'Implemented custom features such as real-time chat systems using Vanilla JavaScript, HTML, and CSS, with Grunt used for preprocessing.',
      'Managed containerized deployments using Docker and handled version control and CI/CD pipelines with GitLab.',
      'Worked on multiple production-grade applications, including healthcare platforms with video calls and document sharing, vacation management tools for team coordination, and taxi applications with real-time booking and route management.',
      'Debugged and resolved complex frontend issues, significantly improving overall user experience and application stability.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    jobType: 'Full time',
    company: 'Utopia Tech',
    date: 'Jul 2020 - Mar 2022',
    jobDescription: [
      'Developed custom add-ons and software solutions for Wordpress to extend website functionality beyond plugin limitations.',
      'Optimized websites for performance and resolved various bugs.',
      'A custom plugin for Elementor, adding widgets with sliders to enhance design capabilities',
      'Developed custom features using Vanilla JavaScript, HTML, CSS, and Grunt preprocessors.',
      'A login form for WordPress, built with PHP and AJAX, allowing user registration and authentication.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    jobType: 'Full time',
    company: 'Mediavuk d.o.o',
    date: 'Mar 2018 - Jul 2020',
    jobDescription: [
      'Developed a customizable and responsive WordPress theme for schools in Germany as a solo project, collaborating with designers for pixel-perfect implementation.',
      'Delivered tailored WordPress websites and WooCommerce shops, including a shop for adult diapers.',
      'Built web applications using PHP, SQL, JavaScript, and Vue.js, including simple CRUD systems.',
    ],
  },

  {
    title: 'Full Stack Developer',
    company: 'Private clients',
    jobType: 'Freelance',
    date: 'Currently',
    jobDescription: [
      'Developed a customizable and responsive WordPress theme for schools in Germany as a solo project, collaborating with designers for pixel-perfect implementation.',
      'Delivered tailored WordPress websites and WooCommerce shops, including a shop for adult diapers.',
      'Built web applications using PHP, SQL, JavaScript, and Vue.js, including simple CRUD systems.',
    ],
  },
]

export const EDUCATION: EducationType[] = [
  {
    title:
      'The School of Electrical and Computer Engineering of Applied Studies',
    eduType: 'Higher Education',
    graduate: 'New computer technologies',
    date: 'October 2018 - April 2020',
  },
]
