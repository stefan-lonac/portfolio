interface PersonalCareerType {
  title: string
  company: string
  date: string
  jobType?: string
  jobDescription: Array<string>
}

export const PERSONAL_CAREER: PersonalCareerType[] = [
  {
    title: 'Frontend Developer',
    jobType: 'Full time',
    company: 'Consulteer',
    date: 'Mar 2022 - Jan 2025',
    jobDescription: [
      'Developed and maintained Angular-based web applications.',
      'Integrated REST APIs and leveraged RxJS for reactive programming.',
      'Used Docker for containerized deployments.',
      'Developed custom features like a chat system using Vanilla JavaScript, HTML, CSS, and Grunt preprocessors.',
      'Managed version control and CI/CD workflows using GitLab for Angular projects.',
      'Created reusable components, optimized performance, and ensured smooth integration.',
      'Debugged and resolved complex issues to enhance user experience.',
    ],
  },
  {
    title: 'Full Stack Developer',
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
    title: 'Full Stack Developer',
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
