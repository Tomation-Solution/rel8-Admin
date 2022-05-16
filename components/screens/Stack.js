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
          {/* <StackScreen.Screen name='members' component={Members}/> */}
          <StackScreen.Screen name='dashboard' component={Drawer}/>
              {/* {()=>(TabScreen)

              }
          </StackScreen.Screen> */}
            
      </StackScreen.Navigator>
  )
}