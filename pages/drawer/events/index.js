import { View, SafeAreaView, Text } from 'react-native'
import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import Member from './member';
import TobBar from '../../../components/helpers/topbar';
import TabbedButton from '../../../components/button/TabbedButton';
import Chapter from './Chapter';
import National from './National';
import All from './all';
// import Member from '../members/member';


const Stack = createStackNavigator()
export default function EventIndex({navigation}) {
    const [selected, setSelected] = useState(3)

    const handleChangeTab =(num,to)=>{
        setSelected(num)
        navigation.navigate(to)
        // if(num==0){
        //     setSelected(0)
        //     // alert(num)
        //     navigation.navigate('member')

        // }else if(num ==1){
        //     setSelected(1)
        //     navigation.navigate('national')


        // }else{
        //     setSelected(2)
        //     navigation.navigate('chapter')

        // }
    }

  return (
    <SafeAreaView style={tw`h-full`}>
        <TobBar
            body={
                <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                    <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.goBack()} />
                    <Text style={tw`font-bold text-base`}>Members Directory</Text>
                    <Ionicon name='md-notifications' size={20} />

                </View>
            }
        />

        <View style={tw`flex-row justify-around`}>
        <TabbedButton index={3} selected={selected} pressed={()=>handleChangeTab(3,'all')}  text='All'/>
             <TabbedButton index={1} selected={selected} pressed={()=>handleChangeTab(1,'national')}  text='National'/>
            <TabbedButton index={2} selected={selected} pressed={()=>handleChangeTab(2, 'chapter')}  text='Chapters'/>
            <TabbedButton index={0} selected={selected} pressed={()=>handleChangeTab(0, 'member')}  text='Members'/>
        </View>
        {/* <Text>Yo</Text> */}
        
        <Stack.Navigator screenOptions={{headerShown:false}} >
            
            <Stack.Screen name='all' component={All}/>
            <Stack.Screen name='national' component={National}/>
            <Stack.Screen name='chapter' component={Chapter}/>
            <Stack.Screen name='member' component={Member}/>
        </Stack.Navigator>
     </SafeAreaView>
  )
}