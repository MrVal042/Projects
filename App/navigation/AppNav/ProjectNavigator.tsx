import {ProjectRoutes} from '@navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Budget,
  BottomSheet,
  Biometric,
  Calender,
  Camera,
  Clock,
  Contacts,
  Gallery,
  Google,
  Keyboard,
  Messages,
  Notification,
  Photos,
  Progress,
  ScrollList,
  Setting,
  Timer,
  Todo,
  Whatsapp,
  GalleryView,
  Entry,
  AccountScreen,
} from '@screen';

const {Navigator, Screen} = createStackNavigator<ProjectRoutes>();

export default function BudgetNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Entry">
      <Screen name="About" component={AccountScreen} />
      <Screen name="Budget" component={Budget} />
      <Screen name="Biometric" component={Biometric} />
      <Screen name="BottomSheet" component={BottomSheet} />
      <Screen name="Calender" component={Calender} />
      <Screen name="Camera" component={Camera} />
      <Screen name="Clock" component={Clock} />
      <Screen name="Contacts" component={Contacts} />
      <Screen name="Entry" component={Entry} options={{headerShown: false}} />
      <Screen name="Gallery" component={Gallery} />
      <Screen name="GalleryView" component={GalleryView} />
      <Screen name="Google" component={Google} />
      <Screen name="Keyboard" component={Keyboard} />
      <Screen name="Messages" component={Messages} />
      <Screen name="Notification" component={Notification} />
      <Screen name="Photos" component={Photos} />
      <Screen name="Progress" component={Progress} />
      <Screen name="ScrollList" component={ScrollList} />
      <Screen name="Setting" component={Setting} />
      <Screen name="Timer" component={Timer} />
      <Screen name="Todo" component={Todo} />
      <Screen name="Whatsapp" component={Whatsapp} />
    </Navigator>
  );
}
