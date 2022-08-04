import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import DueCard from '../../../components/card/dueCard'
// import TobBar from '../../components/helpers/topbar'
import ModalTemplate from '../../../components/modal/index'
// import Logout from '../../components/modal/Logout'
import Search from '../../../components/helpers/search'
import { MemberCard } from '../../../components/card/MemberCard'
import IconButton from '../../../components/button/IconButton'
import EditMember from '../../../components/modal/Member/editMember'
import DeleteMember from '../../../components/modal/Member/deleteMember'
import { SupportCard } from '../../../components/card/support/SupportCard'
import Delete from '../../../components/modal/Others/delete'


const data =[
    {id:'1', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    {id:'2', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    {id:'3', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    {id:'4', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    {id:'5', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    {id:'6', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    {id:'7', name:'Account creation error', body:'i have been issues creatig my account', time:'12/10/2022  -  8:00 am'},
    
]

export default function Support() {

    const [edit, setEdit] = useState(false)
    const [deleteState, setDelete] = useState(false)

  return (
    <View style={tw`h-full`}>

    
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }
    
    <ModalTemplate
        body={<EditMember setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<Delete setVisible={setDelete} what='support ticket' />}
        visible={deleteState}
    />

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
                    <SupportCard 
                        title ={item.name} 
                        body={item.body}
                        time={item.time}
                        setVisible={setEdit}
                        button1={<IconButton bg='bg-gray-100' icon={  
                        <MaterialIcon onPress={()=>setEdit(true)} style={tw`my-auto px-1 text-base text-blue-500`}  name='check'/>
                    }/>}
                        button2={<IconButton  bg='bg-gray-50' icon={  
                        <Ionicon onPress={()=>setDelete(true)} style={tw`my-auto px-1 text-base text-red-800`}  name='trash'/>}/>}
                        />
                )
                }
            />
        </View>
      {/* <Text>Ms</Text> */}
    </View>
  )
}