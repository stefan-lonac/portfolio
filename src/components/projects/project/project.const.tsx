import { ElementType } from 'react'
import { BsFiletypeScss } from 'react-icons/bs'
import { RiMentalHealthLine, RiTaxiWifiLine, RiTodoLine } from 'react-icons/ri'
import {
  SiAngular,
  SiChatbot,
  SiElementor,
  SiJavascript,
  SiJquery,
  SiPhp,
  SiWordpress,
} from 'react-icons/si'

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
        title: 'Wordpress',
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
]
