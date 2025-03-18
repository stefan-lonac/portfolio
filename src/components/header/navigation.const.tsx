import { ElementType } from 'react'
import { GoProjectRoadmap } from 'react-icons/go'
import { SlBriefcase, SlHome, SlUser } from 'react-icons/sl'

export interface NavigationItem {
  title: string
  url: string
  icon: ElementType
}

export const NAVIGATION_DATA: NavigationItem[] = [
  {
    title: 'Home',
    url: '#Home',
    icon: SlHome,
  },
  {
    title: 'About me',
    url: '#AboutMe',
    icon: SlUser,
  },
  {
    title: 'Projects',
    url: '#Projects',
    icon: GoProjectRoadmap,
  },
  {
    title: 'Career',
    url: '#Career',
    icon: SlBriefcase,
  },
]
