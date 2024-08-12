import {createStackNavigator} from '@react-navigation/stack';
import {
  AccountScreen,
  CallUs,
  ChatWithUs,
  FAQs,
  SendMail,
  ChangePassword,
  SecurityEntry,
  TermsAndPolicy,
  HelpEntry,
  ProfileEntry,
  FAQsDetails,
  TermsAndCons,
  EditPicture,
} from '@screen';
import {
  AccountRoutes,
  HelpRoutes,
  SecurityRoutes,
} from '@navigation';

const HelpStack = createStackNavigator<HelpRoutes>();
const SecurityStack = createStackNavigator<SecurityRoutes>();
const {Navigator, Screen} = createStackNavigator<AccountRoutes>();

export default function AccountNavigator() {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Dashboard">
      <Screen name="Dashboard" component={AccountScreen} />
      <Screen name="HelpNavigator" component={HelpNavigator} />
      <Screen name="ProfileEntry" component={ProfileEntry} />
      <Screen name="EditPicture" component={EditPicture} />
      <Screen name="SecurityNavigator" component={SecurityNavigator} />
      <Screen name="TermsAndPolicy" component={TermsAndPolicy} />
      <Screen name="TermsAndCons" component={TermsAndCons} />
    </Navigator>
  );
}

const HelpNavigator = () => {
  return (
<HelpStack.Screen name="SendMail" component={SendMail} />
    <HelpStack.Navigator screenOptions={{headerShown: false}}>
      <HelpStack.Screen name="HelpEntry" component={HelpEntry} />
      <HelpStack.Screen name="ChatWithUs" component={ChatWithUs} />
      <HelpStack.Screen name="FAQsDetails" component={FAQsDetails} />
      <HelpStack.Screen name="CallUs" component={CallUs} />
      <HelpStack.Screen name="FAQs" component={FAQs} />
    </HelpStack.Navigator>
  );
};

const SecurityNavigator = () => {
  return (
    <SecurityStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SecurityEntry">
      <SecurityStack.Screen name="SecurityEntry" component={SecurityEntry} />
      <SecurityStack.Screen name="ChangePassword" component={ChangePassword} />
    </SecurityStack.Navigator>
  );
};
