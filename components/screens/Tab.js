import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Home from '../../pages/tabbed/Home';


const Chat=()=>{
    return(
        <Text>Home</Text>
    )
}
const MyAccount=()=>{
    return(
        <Text>Home</Text>
    )
}
const Members=()=>{
    return(
        <Text>Home</Text>
    )
}

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator  backBehavior='' 
    screenOptions={
      {headerShown:false, tabBarShowLabel:true,
      tabBarActiveTintColor:'#053B8D', 
      tabBarInactiveTintColor:'#C4C4C4',
      tabBarStyle:{
        shadowColor:'#fff'
      }
      } } >

        <Tab.Screen name='Home' 
        component={Home} 
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicon name="home" size={23} color={color}  />
        ),
      }}/>

      <Tab.Screen name='news' 
        component={Chat} 
        options={{
        tabBarLabel: 'News',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="info" size={23} color={color}  />
        ),
      }}/>
      
      <Tab.Screen name='account' 
        component={MyAccount} 
        options={{
        tabBarLabel: 'Dues',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="account-balance-wallet" size={23} color={color}  />
        ),
      }}/>

      <Tab.Screen name='members' 
        component={Members} 
        options={{
        tabBarLabel: 'Events',
        tabBarIcon: ({ color, size }) => (
          <Ionicon name="calendar" size={25} color={color}  />
        ),
      }}/>
      

  </Tab.Navigator>
  )
}