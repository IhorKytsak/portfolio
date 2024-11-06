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
    title: 'Chat App',
    description: intl({ id: 'projects.chat.description' }),
    images: [chatApp],
    gitHubUrl: 'https://github.com/IhorKytsak/react-chat-app',
    visitUrl: 'https://ihorkytsak.github.io/react-chat-app/',
    technologies: ['TypeScript'],
  },
]
