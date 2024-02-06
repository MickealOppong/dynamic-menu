import { nanoid } from "nanoid"
import { Fa500Px, FaAdn, FaArchive, FaAward, FaBriefcase, FaDochub, FaFolder, FaSquare, FaUsers } from "react-icons/fa"
export const menuLinks = [
  {
    id: nanoid(),
    menu: 'products',
    items: [
      { id: nanoid(), label: 'community', icon: <FaAward />, url: "/home/community" },
      { id: nanoid(), label: 'roles', icon: <FaBriefcase />, url: "/home/roles" },
      { id: nanoid(), label: 'content', icon: <FaUsers />, url: "/home/content" }]
  },
  {
    id: nanoid(),
    menu: 'solutions',
    items: [
      { id: nanoid(), label: 'developers', icon: <Fa500Px />, url: "/solutions/developers" },
      { id: nanoid(), label: 'business teams', icon: <FaDochub />, url: "/solutions/businessteams" },
      { id: nanoid(), label: 'ecommerce', icon: <FaAdn />, url: "/solutions/ecommerce" },
      { id: nanoid(), label: 'content managers', icon: <FaSquare />, url: "/solutions/contentmanagers" }]
  },
  {
    id: nanoid(),
    menu: 'resources',
    items: [
      { id: nanoid(), label: 'starters', icon: <FaFolder />, url: '/resources/starters' },
      { id: nanoid(), label: 'showcase', icon: <FaArchive />, url: '/resources/showcase' }]
  }

]