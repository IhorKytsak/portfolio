import todoApp from '@/assets/images/projects/todo-app.png'
import todoChangePass from '@/assets/images/projects/todo-change-password.png'
import todoAdd from '@/assets/images/projects/todo-add.png'
import todoDetails from '@/assets/images/projects/todo-details.png'
import todoEdit from '@/assets/images/projects/todo-edit.png'
import todoMobileView from '@/assets/images/projects/todo-mobile-view.png'
import todoPublic from '@/assets/images/projects/todo-public.png'
import todoSignIn from '@/assets/images/projects/todo-signin.png'
import todoTable from '@/assets/images/projects/todo-table.png'
import todoTabletView from '@/assets/images/projects/todo-tablet-view.png'

import chatApp from '@/assets/images/projects/chat-app.png'

import gameSite from '@/assets/images/projects/game-site.png'
import gameSite2 from '@/assets/images/projects/game-site-2.png'
import gameSite3 from '@/assets/images/projects/game-site-3.png'
import gameSite4 from '@/assets/images/projects/game-site-4.png'

import healthCare from '@/assets/images/projects/health-care.png'
import healthCare2 from '@/assets/images/projects/health-care-2.png'
import healthCare3 from '@/assets/images/projects/health-care-3.png'
import healthCare4 from '@/assets/images/projects/health-care-4.png'
import healthCare5 from '@/assets/images/projects/health-care-5.png'

import yummyMeals from '@/assets/images/projects/yummy-meals.png'
import yummyMeals2 from '@/assets/images/projects/yummy-meals-2.png'

import blackWhite from '@/assets/images/projects/black-white.png'
import blackWhite2 from '@/assets/images/projects/black-white-2.png'
import blackWhite3 from '@/assets/images/projects/black-white-3.png'

import hikingClub from '@/assets/images/projects/hiking-club.png'
import hikingClub2 from '@/assets/images/projects/hiking-club-2.png'
import hikingClub3 from '@/assets/images/projects/hiking-club-3.png'

import activeBox from '@/assets/images/projects/active-box.png'
import activeBox2 from '@/assets/images/projects/active-box-2.png'
import activeBox3 from '@/assets/images/projects/active-box-3.png'
import activeBox4 from '@/assets/images/projects/active-box-4.png'
import activeBox5 from '@/assets/images/projects/active-box-5.png'

import funClub from '@/assets/images/projects/fan-club.png'
import funClub2 from '@/assets/images/projects/fan-club-2.png'
import funClub3 from '@/assets/images/projects/fan-club-3.png'

import mobileShop from '@/assets/images/projects/mobile-shop.png'
import mobileShop2 from '@/assets/images/projects/mobile-shop-2.png'
import mobileShop3 from '@/assets/images/projects/mobile-shop-3.png'

import expenceTracker from '@/assets/images/projects/expence-tracker.png'

import marketplace from '@/assets/images/projects/marketplace.png'
import marketplace2 from '@/assets/images/projects/marketplace-2.png'
import marketplace3 from '@/assets/images/projects/marketplace-3.png'

import type { Project } from '@/types/project.types'
import type { Translator } from '@/types/i18n.types'

export const myProjects = (t: Translator): Project[] => [
  {
    title: 'NFT Marketplace',
    description: t('projects.marketplace.description'),
    images: [marketplace, marketplace2, marketplace3],
    gitHubUrl: 'https://github.com/IhorKytsak/erc20-token-front',
    technologies: [
      'NodeJS',
      'TypeScript',
      'Solidity',
      'Hardhat',
      'Smart Contract',
      'ERC-20',
      'ERC-721',
      'Ethers',
      'NFT',
      'MetaMask',
      'Openzeppelin',
      'Canvas',
      'Hardhat Toolbox',
      'Sepolia',
      'Pinata',
      'OpenSea',
      'React',
      'Material UI',
    ],
  },
  {
    title: 'Todo App',
    description: t('projects.todo.description'),
    images: [
      todoApp,
      todoPublic,
      todoSignIn,
      todoMobileView,
      todoTabletView,
      todoTable,
      todoAdd,
      todoEdit,
      todoDetails,
      todoChangePass,
    ],
    gitHubUrl: 'https://github.com/IhorKytsak/todo-full-stack',
    technologies: [
      'TypeScript',
      'React',
      'React Query',
      'Material UI',
      'Formik',
      'Swiper',
      'React Toastify',
      'NodeJS',
      'Ecpress',
      'Nodemailer',
      'Typeorm',
      'JSON Web Token',
      'Passport',
      'Lerna',
    ],
  },
  {
    title: 'Mobile Shop',
    description: t('projects.mobile-shop.description'),
    images: [mobileShop, mobileShop2, mobileShop3],
    gitHubUrl: 'https://github.com/IhorKytsak/internet-shop',
    visitUrl: 'https://ihorkytsak.github.io/internet-shop',
    technologies: ['React', 'Express', 'MongoDB', 'Mongoose', 'Axios'],
  },

  {
    title: 'Fan Club',
    description: t('projects.fan-club.description'),
    images: [funClub, funClub2, funClub3],
    gitHubUrl: 'https://github.com/IhorKytsak/Sport-site',
    visitUrl: 'https://ihorkytsak.github.io/Sport-site/index.html',
    technologies: ['JavaScript', 'HTML', 'CSS', 'DOM'],
  },

  {
    title: 'Chat App',
    description: t('projects.chat.description'),
    images: [chatApp],
    gitHubUrl: 'https://github.com/IhorKytsak/react-chat-app',
    visitUrl: 'https://ihorkytsak.github.io/react-chat-app/',
    technologies: ['React', 'SCSS', 'GitHub Pages'],
  },
  {
    title: 'Expense Tracker',
    description: t('projects.expense-tracker.description'),
    images: [expenceTracker],
    gitHubUrl: 'https://github.com/IhorKytsak/Expense-tracker-react',
    visitUrl: 'https://ihorkytsak.github.io/Expense-tracker-react/',
    technologies: ['React'],
  },
  {
    title: 'ActiveBox',
    description: t('projects.active-box.description'),
    images: [activeBox, activeBox2, activeBox3, activeBox4, activeBox5],
    gitHubUrl: 'https://github.com/IhorKytsak/ActiveBox',
    visitUrl: 'https://ihorkytsak.github.io/ActiveBox/',
    technologies: ['HTML', 'CSS', 'Photoshop'],
  },
  {
    title: 'Yummy Meals',
    description: t('projects.yummy-meals.description'),
    images: [yummyMeals, yummyMeals2],
    gitHubUrl: 'https://github.com/IhorKytsak/Food-order-app',
    visitUrl: 'https://ihorkytsak.github.io/Food-order-app/',
    technologies: ['React', 'Firebase', 'Fetch API'],
  },
  {
    title: 'Health Care Center',
    description: t('projects.health-care-center.description'),
    images: [healthCare, healthCare2, healthCare3, healthCare4, healthCare5],
    gitHubUrl: 'https://github.com/IhorKytsak/health-care-center',
    visitUrl: 'https://ihorkytsak.github.io/health-care-center/',
    technologies: ['HTML', 'CSS', 'Flexbox'],
  },
  {
    title: 'Black-White',
    description: t('projects.black-white.description'),
    images: [blackWhite, blackWhite2, blackWhite3],
    gitHubUrl: 'https://github.com/IhorKytsak/Black-White',
    technologies: ['HTML', 'CSS'],
  },
  {
    title: 'Peaks Hiking Club',
    description: t('projects.hiking-club.description'),
    images: [hikingClub, hikingClub2, hikingClub3],
    gitHubUrl: 'https://github.com/IhorKytsak/Black-White',
    technologies: ['HTML', 'SCSS'],
  },
  {
    title: 'Game site(Bootstrap)',
    description: t('projects.game-site.description'),
    images: [gameSite, gameSite2, gameSite3, gameSite4],
    gitHubUrl: 'https://github.com/IhorKytsak/Game-site-bootstrap',
    visitUrl: 'https://ihorkytsak.github.io/Game-site-bootstrap/',
    technologies: ['HTML', 'CSS', 'Bootstrap 5'],
  },
]
