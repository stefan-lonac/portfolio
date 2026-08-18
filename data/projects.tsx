import { ElementType } from 'react'
import { BsFiletypeScss } from 'react-icons/bs'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import {
  RiHomeOfficeLine,
  RiMentalHealthLine,
  RiRobot2Line,
  RiTaxiWifiLine,
  RiTodoLine,
  RiUserCommunityLine,
} from 'react-icons/ri'
import {
  SiAngular,
  SiChatbot,
  SiElementor,
  SiFirebase,
  SiGooglecloud,
  SiGooglemaps,
  SiHostinger,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWoo,
  SiWordpress,
  SiWpengine,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

interface ProjectTechnologies {
  title: string
  icon: ElementType | null
}

export interface ProjectList {
  title: string
  excerpt: string
  img: ElementType | null
  linkCode: string
  linkDemo: string
  technologies: Array<ProjectTechnologies>
}

export const PROJECT_LIST: ProjectList[] = [
  {
    title: 'AI Product Recommendation Chat',
    excerpt:
      'A custom WordPress AI assistant designed to recommend relevant products, answer customer questions, provide support guidance, and trigger actions such as contact requests and email communication. The solution improves product discovery and customer support directly within the website experience.',
    img: RiRobot2Line,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'REST API',
        icon: TbApi,
      },
      {
        title: 'AI',
        icon: RiRobot2Line,
      },
    ],
  },
  {
    title: 'AI Business Tech Assistant',
    excerpt:
      'A custom WordPress AI chat solution that allows users to choose between three specialized AI agents for business-related guidance, including VAT and other company topics. The plugin provides contextual conversations and a structured support experience directly within the website.',
    img: RiRobot2Line,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'REST API',
        icon: TbApi,
      },
      {
        title: 'AI',
        icon: RiRobot2Line,
      },
    ],
  },
  {
    title: 'Agent SaaS Platform',
    excerpt:
      'A SaaS platform built for agents across web and mobile, providing centralized access to business workflows, operational tools, communication, and shared data. The system is designed as a scalable multi-platform product with a consistent experience across desktop and mobile applications.',
    img: MdOutlineDashboardCustomize,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'React',
        icon: SiReact,
      },
      {
        title: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
      {
        title: 'Node.js',
        icon: SiNodedotjs,
      },
      {
        title: 'REST API',
        icon: TbApi,
      },
      {
        title: 'AI',
        icon: RiRobot2Line,
      },
    ],
  },
  {
    title: 'Oversee Vacation Operations Platform',
    excerpt:
      'A web and mobile operations platform for vacation rental management, built to centralize daily workflows, reservation data, operational activities, and team processes. The application integrates with Track CRM while extending it with additional features tailored to internal operations and property management workflows.',
    img: MdOutlineDashboardCustomize,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'React',
        icon: SiReact,
      },
      {
        title: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
      {
        title: 'Firebase',
        icon: SiFirebase,
      },
      {
        title: 'REST API',
        icon: TbApi,
      },
      {
        title: 'Track CRM Integration',
        icon: TbApi,
      },
    ],
  },
  {
    title: 'Oversee Guest Portal',
    excerpt:
      'A web and mobile guest portal connected to the Oversee vacation operations ecosystem. Guests can access reservation details, review stays, manage profile information, view pricing and booking-related data, and interact with services connected to their vacation rental experience.',
    img: RiUserCommunityLine,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'React',
        icon: SiReact,
      },
      {
        title: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
      {
        title: 'Firebase',
        icon: SiFirebase,
      },
      {
        title: 'REST API',
        icon: TbApi,
      },
      {
        title: 'Track CRM Integration',
        icon: TbApi,
      },
    ],
  },
  {
    title: 'Oversee Owner Portal',
    excerpt:
      'A web and mobile portal for vacation rental property owners, providing visibility into villas, apartments, reservations, property-related information, and operational activity. The portal is integrated with the wider Oversee platform to provide owners with a centralized view of the data and services related to their properties.',
    img: RiHomeOfficeLine,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'React',
        icon: SiReact,
      },
      {
        title: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
      {
        title: 'Firebase',
        icon: SiFirebase,
      },
      {
        title: 'REST API',
        icon: TbApi,
      },
      {
        title: 'Track CRM Integration',
        icon: TbApi,
      },
    ],
  },
  {
    title: 'Vitagroup HealthMatch',
    excerpt:
      'An Angular web app for managing doctor-patient interactions, enabling account creation, doctor search, video consultations, pre-call questionnaires, and document uploads. Doctors can manage schedules and view patient details, offering a seamless, secure healthcare experience.',
    img: RiMentalHealthLine,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'Angular',
        icon: SiAngular,
      },
      {
        title: 'Angular Material UI',
        icon: SiAngular,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
    ],
  },
  {
    title: 'Taxi app - CTS',
    excerpt:
      'A real-time taxi booking and route management app for passengers and drivers. Developed with Angular, integrating backend hooks and creating components to streamline ride scheduling and tracking.',
    img: RiTaxiWifiLine,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'Angular',
        icon: SiAngular,
      },
      {
        title: 'Angular Material UI',
        icon: SiAngular,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
    ],
  },
  {
    title: 'Angular personal app',
    excerpt:
      'An Angular learning app with a login system, editable user profile, and dark/light mode toggle. It features a CRUD interface connected to Firebase, allowing data storage and retrieval.',
    img: RiTodoLine,
    linkCode: 'https://github.com/stefan-lonac/Angular-personal-app',
    linkDemo: '',
    technologies: [
      {
        title: 'Angular',
        icon: SiAngular,
      },
      {
        title: 'Angular Material UI',
        icon: SiAngular,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
    ],
  },
  {
    title: 'Capsule Chat',
    excerpt:
      'A demo page showcasing a chat interface, where users interact by selecting options to receive specific messages, connected to the backend for further development.',
    img: SiChatbot,
    linkCode: 'https://github.com/stefan-lonac/DropBox-uploadFiles-capsuleChat',
    linkDemo: '',
    technologies: [
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
      {
        title: 'SCSS',
        icon: BsFiletypeScss,
      },
    ],
  },
  {
    title: 'Extra Add On Elementor',
    excerpt:
      'Extra Add On Elementor is a Wordpress plugin that goes exclusively with the Elementor plugin',
    img: SiElementor,
    linkCode: 'https://github.com/stefan-lonac/extra-add-on-elementor',
    linkDemo: '',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Kreston MDM EduTech',
    excerpt:
      'A feature-rich e-learning platform with WooCommerce integration, multi-contributor course support, and a custom Elementor course slider for an engaging learning experience.',
    img: SiWoo,
    linkCode: '',
    linkDemo: 'https://www.mdmedu.tech/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'WooCommerce',
        icon: SiWoo,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Trasferne cene',
    excerpt:
      'A professional business website focused on presenting services and content through custom-built Elementor widgets and interactive popups.',
    img: SiWordpress,
    linkCode: '',
    linkDemo: 'https://transfernecene.rs/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Kreston MDM',
    excerpt:
      'Corporate WordPress website for a professional advisory and accounting firm, featuring custom integrations, interactive UI elements, and continuous feature development.',
    img: SiWordpress,
    linkCode: '',
    linkDemo: 'https://krestonmdm.com/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'Google Maps API',
        icon: SiGooglemaps,
      },
      {
        title: 'REST API',
        icon: SiPostman,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Oversee',
    excerpt:
      'A full-featured property management platform designed to manage properties, units, tenants, leasing, maintenance, and reservations through a centralized admin system.',
    img: SiWordpress,
    linkCode: '',
    linkDemo: 'https://oversee.us/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'REST API',
        icon: SiPostman,
      },
      {
        title: 'Google Maps API',
        icon: SiGooglemaps,
      },
      {
        title: 'Google Cloud',
        icon: SiGooglecloud,
      },
      {
        title: 'WP Engine',
        icon: SiWpengine,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Cleaner Quality Dashboard - Oversee',
    excerpt:
      'Internal operations dashboard for a vacation rental company to track and evaluate cleaning team performance. Built with React and TypeScript, featuring Google OAuth with domain-restricted access, real-time Firestore sync, and paginated KPI tables. Integrated Track PMS and Breezeway APIs through Firebase Cloud Functions proxies with credentials stored in Google Secret Manager. Includes guest survey analytics, internal employee reviews per cleaning, and automated KPI computation across office locations.',
    img: null,
    linkCode: '',
    linkDemo: '',
    technologies: [
      {
        title: 'React',
        icon: SiReact,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
      {
        title: 'Firebase',
        icon: SiFirebase,
      },
      {
        title: 'Google Cloud',
        icon: SiGooglecloud,
      },
      {
        title: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
      {
        title: 'Vite',
        icon: SiVite,
      },
    ],
  },
  {
    title: 'Amrein Properties',
    excerpt:
      'Real estate website with property listings synchronized from two different CRM systems, enhanced with custom Elementor solutions and interactive map-based property browsing, multi-language implementation for the built-in property system',
    img: SiWordpress,
    linkCode: '',
    linkDemo: 'http://amreinproperties.com/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'Google Maps API',
        icon: SiGooglemaps,
      },
      {
        title: 'Hostinger',
        icon: SiHostinger,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Poofnice - WooCommerce E-commerce Shop',
    excerpt:
      'WooCommerce shop developed with WordPress and Elementor, including bespoke product features, shop logic, and UI enhancements tailored to client needs.',
    img: SiWoo,
    linkCode: '',
    linkDemo: 'https://poofnice.com/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'WooCommerce',
        icon: SiWoo,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
    ],
  },
  {
    title: 'inko-versand - E-commerce Shop',
    excerpt:
      'A custom-built WooCommerce e-commerce website developed with a bespoke WordPress theme, advanced ACF usage, and tailored checkout and payment workflows.',
    img: SiWoo,
    linkCode: '',
    linkDemo: 'http://inko-versand.com/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'WooCommerce',
        icon: SiWoo,
      },
      {
        title: 'ACF',
        icon: SiWordpress,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
    ],
  },
  {
    title: 'Mediavuk',
    excerpt:
      'A custom-designed WordPress website built with a bespoke theme and ACF-driven content structure, focused on performance, flexibility, and clean presentation of business content.',
    img: SiWordpress,
    linkCode: '',
    linkDemo: 'https://mediavuk.com/',
    technologies: [
      {
        title: 'WordPress',
        icon: SiWordpress,
      },
      {
        title: 'ACF',
        icon: SiWordpress,
      },
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'jQuery',
        icon: SiJquery,
      },
    ],
  },
]
