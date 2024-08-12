type UserProps = {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  fullName: string;
  lastName: string;
  sex: 'female' | 'male';
  subscriptionTier: string;
};
type IProjectProps = {
  category: string;
  completedAt: string;
  createdAt: string;
  description: string;
  downloadLink: string;
  icon: IconName;
  name: ProjectName;
  route: string;
  sourceCode: string;
  tools: string[];
};

type ProjectName =
  | 'Budget'
  | 'About'
  | 'Todo'
  | 'Notification'
  | 'ScrollList'
  | 'Progress'
  | 'Timer'
  | 'Clock'
  | 'Contacts'
  | 'Camera'
  | 'Calender'
  | 'Keyboard'
  | 'Whatsapp'
  | 'Gallery'
  | 'Photos'
  | 'Phone'
  | 'Google'
  | 'Messages'
  | 'Setting'
  | 'BottomSheet';
