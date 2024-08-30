import {GalleryImageProps} from '@hooks';
import {NavigatorScreenParams} from '@react-navigation/native';

// AppRoute /////////////////////////////////////////////////////
export type AppRoute = {
  ProjectNavigator: NavigatorScreenParams<ProjectRoutes>;
  TabNavigator: NavigatorScreenParams<TabRoutes>;
  AccountNavigator: NavigatorScreenParams<AccountRoutes>;
  HomeScreen: undefined;
  BudgetDetail: {item: BudgetProps};
};

// NotificationNavigator //////////////////////////////////////////
// NotificationNavigator //////////////////////////////////////////
export type ProjectRoutes = {
  [key in ProjectName]: {item: IProjectProps};
} & {
  Entry: {item: IProjectProps};
  GalleryView: {data: GalleryImageProps[]; photoIndex: number};
};

// TabNavigator //////////////////////////////////////////////////
export type TabRoutes = {
  Home: undefined;
  Explore: undefined;
  Projects: undefined;
  More: undefined;
};

export type AccountRoutes = {
  Entry: undefined;
};
