import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../pages/authentication/login';
import Register from '../../pages/authentication/register';
import AccountCreated from '../../pages/authentication/accountCreated';
import Drawer from './drawer/Drawer';
import TabScreen from './Tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Members from '../../pages/drawer/members';
import MemberIndex from '../../pages/drawer/members/';
import News from '../../pages/drawer/news';
import Publications from '../../pages/drawer/publication';
import Gallery from '../../pages/drawer/Gallery.js';
import Archive from '../../pages/drawer/archive';
import Minutes from '../../pages/drawer/minute';
import Dues from '../../pages/drawer/due';
import SupportIndex from '../../pages/drawer/support';
import Settings from '../../pages/drawer/settings';
import Criteria from '../../pages/drawer/settings/criteria';
import OrgInfo from '../../pages/drawer/settings/orgInfo';
import PaymentPlans from '../../pages/drawer/settings/paymentPlan';
import EventIndex from '../../pages/drawer/events';
import Election from '../../pages/drawer/election';
import ViewElection from '../../pages/drawer/election/viewElection';


const StackScreen =createStackNavigator()
const Tab = createBottomTabNavigator();

export default function Stack() {
  return (
    // <NavigationContainer>
      <StackScreen.Navigator screenOptions={{headerShown:false}} >
          <StackScreen.Screen name='login' component={Login}/>
          <StackScreen.Screen  name='register' component={Register}/>
          <StackScreen.Screen  name='accountCreated' component={AccountCreated}/>
          <StackScreen.Screen name='members' component={MemberIndex}/>
          <StackScreen.Screen name='events' component={EventIndex}/>
          <StackScreen.Screen name='new' component={News}/>
          <StackScreen.Screen name='publications' component={Publications}/>
          <StackScreen.Screen name='dashboard' component={Drawer}/>
          <StackScreen.Screen name='gallery' component={Gallery}/>
          <StackScreen.Screen name='elections' component={Election}/>
          <StackScreen.Screen name='viewElection' component={ViewElection}/>
          <StackScreen.Screen name='archive' component={Archive}/>
          <StackScreen.Screen name='minute' component={Minutes}/>
          <StackScreen.Screen name='dues' component={Dues}/>
          <StackScreen.Screen name='supports' component={SupportIndex}/>
          <StackScreen.Screen name='settings' component={Settings}/>
          <StackScreen.Screen name='criteria' component={Criteria}/>
          <StackScreen.Screen name='orgInfo' component={OrgInfo}/>
          <StackScreen.Screen name='plans' component={PaymentPlans}/>
              {/* {()=>(TabScreen)

              }
          </StackScreen.Screen> */}
            
      </StackScreen.Navigator>
  )
}