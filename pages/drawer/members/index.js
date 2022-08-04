import { View, SafeAreaView, Text } from 'react-native'
import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import Member from '../member';
import TobBar from '../../../components/helpers/topbar';
import TabbedButton from '../../../components/button/TabbedButton';
import Excos from '../Excos';
import Committe from '../Committee';
// import Member from '../members/member';


const Stack = createStackNavigator()
export default function MemberIndex({navigation}) {
    const [selected, setSelected] = useState(0)

    const handleChangeTab =(num)=>{
        if(num==0){
            setSelected(0)
            // alert(num)
            navigation.navigate('member')

        }else if(num ==1){
            setSelected(1)
            navigation.navigate('exco')


        }else{
            setSelected(2)
            navigation.navigate('committee')

        }
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
            <TabbedButton index={0} selected={selected} pressed={()=>handleChangeTab(0)}  text='Members'/>
            <TabbedButton index={1} selected={selected} pressed={()=>handleChangeTab(1)}  text='Excos'/>
            <TabbedButton index={2} selected={selected} pressed={()=>handleChangeTab(2)}  text='Committees'/>
        </View>
        {/* <Text>Yo</Text> */}
        
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='member' component={Member}/>
            <Stack.Screen name='exco' component={Excos}/>
            <Stack.Screen name='committee' component={Committe}/>
        </Stack.Navigator>
     </SafeAreaView>
  )
}