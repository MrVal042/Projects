export const projects: IProjectProps[] = [
  {
    route: '',
    description: 'About',
    tools: ['React native', 'faker api'],
    createdAt: '',
    completedAt: '',
    sourceCode: '',
    downloadLink: '',
    name: 'About',
    category: '',
    icon: 'account',
  },
  {
    route: '',
    description: 'Budget',
    tools: ['React native', 'faker api'],
    createdAt: '',
    completedAt: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Budget',
    category: '',
    icon: 'budget',
  },
  {
    route: '',
    description: 'Animated BottomSheet',
    tools: ['React native', 'faker api'],
    createdAt: '',
    completedAt: '',
    sourceCode: '',
    downloadLink: '',
    name: 'BottomSheet',
    category: '',
    icon: 'bottom-sheets',
  },
  {
    description: 'Calender ',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Calender',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'calendar',
  },
  {
    description: 'Camera',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Camera',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'camera',
  },
  {
    description: 'Clock',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Clock',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'clock',
  },
  {
    description: 'Contacts',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Contacts',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'contacts',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Gallery',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'gallery',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Keyboard',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'keyboard',
  },
  {
    description: 'In app Notification',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Notification',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'notification',
  },
  {
    description: 'Text Messages',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Messages',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'chat',
  },
  {
    description: 'Phone call',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Phone',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'phone',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Timer',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'timer',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Setting',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'settings',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Photos',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'photos',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Progress',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'progress',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Todo',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'list',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Whatsapp',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'whatsapp',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'Google',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'google',
  },
  {
    description: 'Animated notifications',
    createdAt: '',
    completedAt: '',
    category: 'skill',
    route: '',
    sourceCode: '',
    downloadLink: '',
    name: 'ScrollList',
    tools: ['React native', 'faker api', 'firebase messaging'],
    icon: 'list',
  },
];

export const getProject = (key: ProjectName) => {
  const result = projects.find(list => list.name === key);
  return result;
};
