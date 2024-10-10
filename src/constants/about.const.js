export const clients = 3
export const completedProjects = 20
export const yearsOfExperience = 2

export const experienceData = (intl) => [
  {
    position: intl({ id: 'about.experience.cgs-team.position' }),
    company: 'CGS-team',
    companyLink: 'https://cgsteam.io/',
    time: '2024-Present',
    address: intl({ id: 'about.experience.cgs-team.address' }),
    description: intl({ id: 'about.experience.cgs-team.description' }),
    responsibilities: [
      intl({ id: 'about.experience.cgs-team.responsibilities.0' }),
      intl({ id: 'about.experience.cgs-team.responsibilities.1' }),
      intl({ id: 'about.experience.cgs-team.responsibilities.2' }),
      intl({ id: 'about.experience.cgs-team.responsibilities.3' }),
      intl({ id: 'about.experience.cgs-team.responsibilities.4' }),
      intl({ id: 'about.experience.cgs-team.responsibilities.5' }),
      intl({ id: 'about.experience.cgs-team.responsibilities.6' }),
    ],
  },
  {
    position: intl({ id: 'about.experience.goit.position' }),
    company: 'GoIT',
    companyLink: 'https://goit.global/ua/',
    time: '2023 - 2024',
    address: intl({ id: 'about.experience.goit.address' }),
    description: intl({ id: 'about.experience.goit.description' }),
    responsibilities: [
      intl({ id: 'about.experience.goit.responsibilities.0' }),
      intl({ id: 'about.experience.goit.responsibilities.1' }),
      intl({ id: 'about.experience.goit.responsibilities.2' }),
      intl({ id: 'about.experience.goit.responsibilities.3' }),
    ],
  },
  {
    position: intl({ id: 'about.experience.softserve.position' }),
    company: 'SoftServe',
    companyLink: 'https://www.softserveinc.com/en-us',
    time: '2022 - 2023',
    address: intl({ id: 'about.experience.softserve.address' }),
    description: intl({ id: 'about.experience.softserve.description' }),
    responsibilities: [
      intl({ id: 'about.experience.softserve.responsibilities.0' }),
      intl({ id: 'about.experience.softserve.responsibilities.1' }),
      intl({ id: 'about.experience.softserve.responsibilities.2' }),
      intl({ id: 'about.experience.softserve.responsibilities.3' }),
      intl({ id: 'about.experience.softserve.responsibilities.4' }),
      intl({ id: 'about.experience.softserve.responsibilities.5' }),
    ],
  },
]
