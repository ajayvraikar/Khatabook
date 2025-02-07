import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import NewKhata from '../Screens/NewKhata';
import AddCustomer from '../Screens/AddCustomer';
import CustomerTransactionView from '../Screens/CustomerTransactionView';
import TransactionEntryDetails from '../Screens/TransactionEntryDetails';
import {View} from 'react-native';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
       
        <Tab.Screen name="Home" component={Home} />
      
        <Tab.Screen
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
}

export default MyTabs;
