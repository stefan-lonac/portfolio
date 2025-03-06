import { ElementType } from 'react'
import { BsFiletypeJson, BsFiletypeScss } from 'react-icons/bs'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { MdDisplaySettings } from 'react-icons/md'
import { RiCheckFill, RiUserCommunityLine } from 'react-icons/ri'
import {
  SiAngular,
  SiComposer,
  SiDocker,
  SiElementor,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGrunt,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiPhp,
  SiReact,
  SiReactivex,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from 'react-icons/si'
import { TbSettingsCode } from 'react-icons/tb'

interface Skills {
  category:
    | 'Frontend'
    | 'Backend and Database'
    | 'Platforms'
    | 'Utilities'
    | 'Soft Skills'
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
        title: 'LearnDash',
        icon: null,
      },
      {
        title: 'Elementor',
        icon: SiElementor,
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
    ],
  },
]
