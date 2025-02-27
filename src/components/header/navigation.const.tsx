import { ElementType } from 'react'
import { SlBriefcase, SlEnvolope, SlHome, SlUser } from 'react-icons/sl'

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
    title: 'Contact',
    url: '#Contact',
    icon: SlEnvolope,
  },
  {
    title: 'Projects',
    url: '#Projects',
    icon: SlBriefcase,
  },
  {
    title: 'About me',
    url: '#AboutMe',
    icon: SlUser,
  },
]
