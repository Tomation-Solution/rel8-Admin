import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import {MemberCard} from '../../../components/card/MemberCard'
import Search from '../../../components/helpers/search'
import TobBar from '../../../components/helpers/topbar'
import ModalTemplate from '../../../components/modal/index'
import IconButton from '../../../components/button/IconButton'
import Delete from '../../../components/modal/Others/delete';

export default function Archive({navigation}) {
    
     const [deleteState, setDelete] = useState(false)
     const data =[
        {id:1, 'name':'Chigozie Nwacukwu', 'department':'Accounting', Year:'2009'},
        {id:2, 'name':'Chigozie Nwacukwu', 'department':'Accounting', Year:'2009'},
        {id:3, 'name':'Chigozie Nwacukwu', 'department':'Accounting', Year:'2009'},
        {id:4, 'name':'Chigozie Nwacukwu', 'department':'Accounting', Year:'2009'},
        {id:5, 'name':'Chigozie Nwacukwu', 'department':'Accounting', Year:'2009'},
        {id:6, 'name':'Chigozie Nwacukwu', 'department':'Accounting', Year:'2009'},
     ]
    
  return (
    <SafeAreaView style={tw`h-full`}>

    
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }

    <TobBar
        body={
            <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.navigate('Home')} />
                <Text style={tw`font-bold text-base`}>Archive</Text>
                <Ionicon name='md-notifications' size={20} />

            </View>
        }
        />
   <ModalTemplate
        body={<Delete setVisible={setDelete} what='User'/>}
        visible={deleteState}
    />

        <View>
            <Search/>
        </View>

        <View>
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <MemberCard 
                       name ={item.name} 
                      dept={item.department}
                        year={item.Year}
                        button1={<IconButton  bg='bg-gray-50' icon={  
                        <Ionicon onPress={()=>setDelete(true)} style={tw`my-auto px-1 text-base  text-red-800`}  name='trash'/>}/>}
                        
                        />
                )
                }
            />
        </View>
    </SafeAreaView>
  )
}