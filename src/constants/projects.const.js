import todoApp from '../../public/images/projects/todo-app.png'
import todoChangePass from '../../public/images/projects/todo-change-password.png'
import todoAdd from '../../public/images/projects/todo-add.png'
import todoDetails from '../../public/images/projects/todo-details.png'
import todoEdit from '../../public/images/projects/todo-edit.png'
import todoMobileView from '../../public/images/projects/todo-mobile-view.png'
import todoPublic from '../../public/images/projects/todo-public.png'
import todoSignIn from '../../public/images/projects/todo-signin.png'
import todoTable from '../../public/images/projects/todo-table.png'
import todoTabletView from '../../public/images/projects/todo-tablet-view.png'

import chatApp from '../../public/images/projects/chat-app.png'

import gameSite from '../../public/images/projects/game-site.png'
import gameSite2 from '../../public/images/projects/game-site-2.png'
import gameSite3 from '../../public/images/projects/game-site-3.png'
import gameSite4 from '../../public/images/projects/game-site-4.png'

import healthCare from '../../public/images/projects/health-care.png'
import healthCare2 from '../../public/images/projects/health-care-2.png'
import healthCare3 from '../../public/images/projects/health-care-3.png'
import healthCare4 from '../../public/images/projects/health-care-4.png'
import healthCare5 from '../../public/images/projects/health-care-5.png'

import yummyMeals from '../../public/images/projects/yummy-meals.png'
import yummyMeals2 from '../../public/images/projects/yummy-meals-2.png'

import blackWhite from '../../public/images/projects/black-white.png'
import blackWhite2 from '../../public/images/projects/black-white-2.png'
import blackWhite3 from '../../public/images/projects/black-white-3.png'

import hikingClub from '../../public/images/projects/hiking-club.png'
import hikingClub2 from '../../public/images/projects/hiking-club-2.png'
import hikingClub3 from '../../public/images/projects/hiking-club-3.png'

import activeBox from '../../public/images/projects/active-box.png'
import activeBox2 from '../../public/images/projects/active-box-2.png'
import activeBox3 from '../../public/images/projects/active-box-3.png'
import activeBox4 from '../../public/images/projects/active-box-4.png'
import activeBox5 from '../../public/images/projects/active-box-5.png'

import funClub from '../../public/images/projects/fan-club.png'
import funClub2 from '../../public/images/projects/fan-club-2.png'
import funClub3 from '../../public/images/projects/fan-club-3.png'

import mobileShop from '../../public/images/projects/mobile-shop.png'
import mobileShop2 from '../../public/images/projects/mobile-shop-2.png'
import mobileShop3 from '../../public/images/projects/mobile-shop-3.png'

import expenceTracker from '../../public/images/projects/expence-tracker.png'

export const myProjects = (intl) => [
  {
    title: 'Todo App',
    description: intl({ id: 'projects.todo.description' }),
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
    description: intl({ id: 'projects.mobile-shop.description' }),
    images: [mobileShop, mobileShop2, mobileShop3],
    gitHubUrl: 'https://github.com/IhorKytsak/internet-shop',
    visitUrl: 'https://ihorkytsak.github.io/internet-shop',
    technologies: ['React', 'Express', 'MongoDB', 'Mongoose', 'Axios'],
  },
  {
    title: 'Fan Club',
    description: intl({ id: 'projects.fan-club.description' }),
    images: [funClub, funClub2, funClub3],
    gitHubUrl: 'https://github.com/IhorKytsak/Sport-site',
    visitUrl: 'https://ihorkytsak.github.io/Sport-site/index.html',
    technologies: ['JavaScript', 'HTML', 'CSS', 'DOM'],
  },

  {
    title: 'Chat App',
    description: intl({ id: 'projects.chat.description' }),
    images: [chatApp],
    gitHubUrl: 'https://github.com/IhorKytsak/react-chat-app',
    visitUrl: 'https://ihorkytsak.github.io/react-chat-app/',
    technologies: ['React', 'SCSS', 'GitHub Pages'],
  },
  {
    title: 'Expense Tracker',
    description: intl({ id: 'projects.expense-tracker.description' }),
    images: [expenceTracker],
    gitHubUrl: 'https://github.com/IhorKytsak/Expense-tracker-react',
    visitUrl: 'https://ihorkytsak.github.io/Expense-tracker-react/',
    technologies: ['React'],
  },
  {
    title: 'ActiveBox',
    description: intl({ id: 'projects.active-box.description' }),
    images: [activeBox, activeBox2, activeBox3, activeBox4, activeBox5],
    gitHubUrl: 'https://github.com/IhorKytsak/ActiveBox',
    visitUrl: 'https://ihorkytsak.github.io/ActiveBox/',
    technologies: ['HTML', 'CSS', 'Photoshop'],
  },
  {
    title: 'Yummy Meals',
    description: intl({ id: 'projects.yummy-meals.description' }),
    images: [yummyMeals, yummyMeals2],
    gitHubUrl: 'https://github.com/IhorKytsak/Food-order-app',
    visitUrl: 'https://ihorkytsak.github.io/Food-order-app/',
    technologies: ['React', 'Firebase', 'Fetch API'],
  },
  {
    title: 'Health Care Center',
    description: intl({ id: 'projects.health-care-center.description' }),
    images: [healthCare, healthCare2, healthCare3, healthCare4, healthCare5],
    gitHubUrl: 'https://github.com/IhorKytsak/health-care-center',
    visitUrl: 'https://ihorkytsak.github.io/health-care-center/',
    technologies: ['HTML', 'CSS', 'Flexbox'],
  },
  {
    title: 'Black-White',
    description: intl({ id: 'projects.black-white.description' }),
    images: [blackWhite, blackWhite2, blackWhite3],
    gitHubUrl: 'https://github.com/IhorKytsak/Black-White',
    technologies: ['HTML', 'CSS'],
  },
  {
    title: 'Peaks Hiking Club',
    description: intl({ id: 'projects.hiking-club.description' }),
    images: [hikingClub, hikingClub2, hikingClub3],
    gitHubUrl: 'https://github.com/IhorKytsak/Black-White',
    technologies: ['HTML', 'SCSS'],
  },
  {
    title: 'Game site(Bootstrap)',
    description: intl({ id: 'projects.game-site.description' }),
    images: [gameSite, gameSite2, gameSite3, gameSite4],
    gitHubUrl: 'https://github.com/IhorKytsak/Game-site-bootstrap',
    visitUrl: 'https://ihorkytsak.github.io/Game-site-bootstrap/',
    technologies: ['HTML', 'CSS', 'Bootstrap 5'],
  },
]
