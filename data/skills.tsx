import { ElementType } from 'react'
import { BsFiletypeJson, BsFiletypeScss, BsPlugin } from 'react-icons/bs'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { MdDisplaySettings } from 'react-icons/md'
import { RiCheckFill, RiUserCommunityLine } from 'react-icons/ri'
import {
  SiAngular,
  SiApache,
  SiAuth0,
  SiBootstrap,
  SiClickup,
  SiCloudflare,
  SiComposer,
  SiCss3,
  SiDocker,
  SiElementor,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiGrunt,
  SiHostinger,
  SiHtml5,
  SiInsomnia,
  SiJira,
  SiJavascript,
  SiJsonwebtokens,
  SiJquery,
  SiLinux,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNpm,
  SiPnpm,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiReactivex,
  SiRedis,
  SiSwagger,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVite,
  SiWoocommerce,
  SiWordpress,
  SiYarn,
} from 'react-icons/si'
import {
  TbApi,
  TbCloudCode,
  TbCode,
  TbDatabase,
  TbDeviceDesktop,
  TbFileTypeXml,
  TbGitBranch,
  TbJson,
  TbRoute,
  TbServer,
  TbSettingsCode,
  TbShieldLock,
  TbWebhook,
} from 'react-icons/tb'

interface Skills {
  category:
    | 'Frontend'
    | 'Backend and Database'
    | 'Platforms'
    | 'Utilities'
    | 'Soft Skills'
    | 'APIs & Infrastructure'
  icon: ElementType | null
  skills: SkillsList[]
}

interface SkillsList {
  title: string
  icon: ElementType | null
}

export const SKILLS_LIST: Skills[] = [
  {
    category: 'Frontend',
    icon: LiaLaptopCodeSolid,
    skills: [
      {
        title: 'Angular',
        icon: SiAngular,
      },
      {
        title: 'React',
        icon: SiReact,
      },
      {
        title: 'JavaScript',
        icon: SiJavascript,
      },
      {
        title: 'JQuery',
        icon: SiJquery,
      },
      {
        title: 'JSON',
        icon: BsFiletypeJson,
      },
      {
        title: 'Angular Material UI',
        icon: SiAngular,
      },
      {
        title: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
      {
        title: 'TypeScript',
        icon: SiTypescript,
      },
      {
        title: 'SCSS',
        icon: BsFiletypeScss,
      },
      {
        title: 'RxJs',
        icon: SiReactivex,
      },
      {
        title: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        title: 'HTML5',
        icon: SiHtml5,
      },
      {
        title: 'CSS3',
        icon: SiCss3,
      },
      {
        title: 'Responsive Design',
        icon: TbDeviceDesktop,
      },
      {
        title: 'Bootstrap',
        icon: SiBootstrap,
      },
      {
        title: 'Material UI',
        icon: SiMui,
      },
      {
        title: 'Zustand',
        icon: TbDatabase,
      },
      {
        title: 'React Hooks',
        icon: SiReact,
      },
      {
        title: 'React Router',
        icon: SiReactrouter,
      },
      {
        title: 'Vite',
        icon: SiVite,
      },
    ],
  },
  {
    category: 'Backend and Database',
    icon: TbSettingsCode,
    skills: [
      {
        title: 'PHP',
        icon: SiPhp,
      },
      {
        title: 'MySQL',
        icon: SiMysql,
      },
      {
        title: 'PostgreSQL',
        icon: SiPostgresql,
      },
      {
        title: 'Node.js',
        icon: SiNodedotjs,
      },
      {
        title: 'Express.js',
        icon: SiExpress,
      },
      {
        title: 'Prisma ORM',
        icon: SiPrisma,
      },
      {
        title: 'Firebase',
        icon: SiFirebase,
      },
      {
        title: 'Firestore',
        icon: SiFirebase,
      },
      {
        title: 'SQL',
        icon: TbDatabase,
      },
      {
        title: 'Authentication & Authorization',
        icon: TbShieldLock,
      },
      {
        title: 'JWT',
        icon: SiJsonwebtokens,
      },
      {
        title: 'OAuth',
        icon: SiAuth0,
      },
      {
        title: 'Redis',
        icon: SiRedis,
      },
    ],
  },
  {
    category: 'APIs & Infrastructure',
    icon: TbCloudCode,
    skills: [
      {
        title: 'REST API Integration',
        icon: SiPostman,
      },
      {
        title: 'Custom API Development',
        icon: TbApi,
      },
      {
        title: 'Server Management',
        icon: TbServer,
      },
      {
        title: 'WP Engine',
        icon: SiWordpress,
      },
      {
        title: 'Hostinger',
        icon: SiHostinger,
      },
      {
        title: 'Loopia',
        icon: TbServer,
      },
      {
        title: 'GraphQL',
        icon: SiGraphql,
      },
      {
        title: 'Webhooks',
        icon: TbWebhook,
      },
      {
        title: 'API Design',
        icon: TbApi,
      },
      {
        title: 'API Security',
        icon: TbShieldLock,
      },
      {
        title: 'OpenAPI / Swagger',
        icon: SiSwagger,
      },
      {
        title: 'gRPC',
        icon: TbRoute,
      },
      {
        title: 'XML',
        icon: TbFileTypeXml,
      },
      {
        title: 'JSON API',
        icon: TbJson,
      },
      {
        title: 'Cloudflare',
        icon: SiCloudflare,
      },
      {
        title: 'Google Cloud Platform (GCP)',
        icon: SiGooglecloud,
      },
      {
        title: 'Firebase Hosting',
        icon: SiFirebase,
      },
      {
        title: 'Nginx',
        icon: SiNginx,
      },
      {
        title: 'Apache',
        icon: SiApache,
      },
      {
        title: 'Linux',
        icon: SiLinux,
      },
      {
        title: 'CI/CD',
        icon: SiGithubactions,
      },
    ],
  },

  {
    category: 'Platforms',
    icon: MdDisplaySettings,
    skills: [
      {
        title: 'Wordpress',
        icon: SiWordpress,
      },
      {
        title: 'WooCommerce',
        icon: SiWoocommerce,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
      },
      {
        title: 'WP Bakery',
        icon: BsPlugin,
      },
      {
        title: 'LearnDash',
        icon: BsPlugin,
      },
      {
        title: 'ACF Plugin',
        icon: BsPlugin,
      },
      {
        title: 'Gutenberg Blocks',
        icon: SiWordpress,
      },
      {
        title: 'WordPress Multisite',
        icon: SiWordpress,
      },
      {
        title: 'WooCommerce Subscriptions',
        icon: SiWoocommerce,
      },
      {
        title: 'WP CLI',
        icon: SiWordpress,
      },
      {
        title: 'Custom Gutenberg Development',
        icon: SiWordpress,
      },
    ],
  },
  {
    category: 'Utilities',
    icon: HiWrenchScrewdriver,
    skills: [
      {
        title: 'Git',
        icon: SiGit,
      },
      {
        title: 'GitHub',
        icon: SiGithub,
      },
      {
        title: 'GitLab',
        icon: SiGitlab,
      },
      {
        title: 'Docker',
        icon: SiDocker,
      },
      {
        title: 'Grunt JS',
        icon: SiGrunt,
      },
      {
        title: 'Composer',
        icon: SiComposer,
      },
      {
        title: 'VS Code',
        icon: TbCode,
      },
      {
        title: 'npm',
        icon: SiNpm,
      },
      {
        title: 'pnpm',
        icon: SiPnpm,
      },
      {
        title: 'Yarn',
        icon: SiYarn,
      },
      {
        title: 'ESLint',
        icon: SiEslint,
      },
      {
        title: 'Prettier',
        icon: SiPrettier,
      },
      {
        title: 'Husky',
        icon: TbGitBranch,
      },
      {
        title: 'Git Flow',
        icon: TbGitBranch,
      },
      {
        title: 'Figma',
        icon: SiFigma,
      },
      {
        title: 'Jira',
        icon: SiJira,
      },
      {
        title: 'Trello',
        icon: SiTrello,
      },
      {
        title: 'ClickUp',
        icon: SiClickup,
      },
      {
        title: 'Postman',
        icon: SiPostman,
      },
      {
        title: 'Insomnia',
        icon: SiInsomnia,
      },
    ],
  },
  {
    category: 'Soft Skills',
    icon: RiUserCommunityLine,
    skills: [
      {
        title: 'Troubleshooting',
        icon: RiCheckFill,
      },
      {
        title: 'Teamwork',
        icon: RiCheckFill,
      },
      {
        title: 'Effective communication',
        icon: RiCheckFill,
      },
      {
        title: 'Continuous learning',
        icon: RiCheckFill,
      },
      {
        title: 'Problem Solving',
        icon: RiCheckFill,
      },
      {
        title: 'Analytical Thinking',
        icon: RiCheckFill,
      },
      {
        title: 'Leadership',
        icon: RiCheckFill,
      },
      {
        title: 'Time Management',
        icon: RiCheckFill,
      },
      {
        title: 'Mentoring',
        icon: RiCheckFill,
      },
      {
        title: 'Project Planning',
        icon: RiCheckFill,
      },
      {
        title: 'Client Communication',
        icon: RiCheckFill,
      },
      {
        title: 'Requirements Analysis',
        icon: RiCheckFill,
      },
      {
        title: 'Agile',
        icon: RiCheckFill,
      },
      {
        title: 'Scrum',
        icon: RiCheckFill,
      },
      {
        title: 'Code Review',
        icon: RiCheckFill,
      },
      {
        title: 'Attention to Detail',
        icon: RiCheckFill,
      },
    ],
  },
]
