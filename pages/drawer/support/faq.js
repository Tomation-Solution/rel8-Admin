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
import RoundedButton from '../../../components/button/RoundedButton'
import AddMember from '../../../components/modal/Member/addMember'
import BatchUpload from '../../../components/modal/Member/batchUpload'
import { SupportCard } from '../../../components/card/support/SupportCard'
import EditFAQ from '../../../components/modal/Support/editFAQ'
import Delete from '../../../components/modal/delete'
import AddFAQ from '../../../components/modal/Support/addFAQ'


const data =[
    {id:'1', name:'To get Started', department:'Accounting', Year:'2009'},
    {id:'2',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'3',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'4',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'5',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'6',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
    {id:'7',name:'Chigozie Nwacukwu', department:'Accounting', Year:'2009'},
]

export default function FAQ() {

    const [edit, setEdit] = useState(false)
    const [deleteState, setDelete] = useState(false)
    const [addMember, setAddMember] = useState(false)
   

  return (
    <View style={tw`h-full`}>

    
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }
    
    <ModalTemplate
        body={<EditFAQ setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<Delete setVisible={setDelete} what='FAQ' />}
        visible={deleteState}
    />

    <ModalTemplate
        body={<AddFAQ setVisible={setAddMember}/>}
        visible={addMember}
    /> 


        

        <View>
            <Search/>
        </View>
        <View style={tw` w-4/12 mx-5`}>
            <RoundedButton text='Add FAQ' pressed={()=>setAddMember(true)} />
            
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
                        body={item.department}
                        year={item.Year}
                        setVisible={setEdit}
                        button1={<IconButton bg='bg-gray-100' icon={  
                        <MaterialIcon onPress={()=>setEdit(true)} style={tw`my-auto px-1 text-base text-blue-500`}  name='mode-edit'/>
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