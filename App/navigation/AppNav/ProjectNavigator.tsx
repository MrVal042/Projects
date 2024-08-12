import {ProjectRoutes} from '@navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Budget,
  BottomSheet,
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
  Entry,
  AboutScreen,
} from '@screen';

const {Navigator, Screen} = createStackNavigator<ProjectRoutes>();

export default function BudgetNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="About">
      <Screen name="About" component={AboutScreen} />
      <Screen name="Budget" component={Budget} />
      <Screen name="BottomSheet" component={BottomSheet} />
      <Screen name="Calender" component={Calender} />
      <Screen name="Camera" component={Camera} />
      <Screen name="Clock" component={Clock} />
      <Screen name="Contacts" component={Contacts} />
      <Screen name="Gallery" component={Gallery} />
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
      <Screen name="Entry" component={Entry} options={{headerShown: false}} />
    </Navigator>
  );
}
