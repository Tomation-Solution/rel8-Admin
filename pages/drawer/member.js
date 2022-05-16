import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import DueCard from '../../components/card/dueCard'
import TobBar from '../../components/helpers/topbar'
import Search from '../../components/helpers/search'
import { MemberCard } from '../../components/card/MemberCard'
import IconButton from '../../components/button/IconButton'


const data =[
    {id:'1', name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'2',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'3',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'4',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'5',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'6',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'7',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
]

export default function Member() {
  return (
    <View style={tw`h-full`}>
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }
    

        <View style={tw`w-full flex-row  mx-auto py-4`}>
            <View style={tw`w-6/12 pl-2 pr-1`}>
                <DueCard 
                    description='Total Active Members' 
                    text={true}
                    color='text-blue-700'
                    amount='2,900'
                    bg='bg-blue-100'
                />
            </View>

            <View style={tw`w-6/12 pr-2`}>

            <DueCard 
                description='Total Non Active Members' 
                text={true}
                color='text-gray-200'
                amount='2,900'
                bg='bg-blue-800'
            />
            </View>
        </View>

        <View>
            <Search/>
        </View>

        <View>
            <FlatList
                data={data}
                // key
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <MemberCard 
                        name ={item.name} 
                        dept={item.department}
                        year={item.Year}
                        
                        button1={<IconButton bg='bg-gray-100' icon={  <MaterialIcon style={tw`my-auto px-1 text-base text-blue-500`}  name='mode-edit'/>}/>}
                        button2={<IconButton bg='bg-gray-50' icon={  <Ionicon style={tw`my-auto px-1 text-base text-red-800`}  name='trash'/>}/>}
                        />
                )
                }
            />
        </View>
      {/* <Text>Ms</Text> */}
    </View>
  )
}