import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import DueCard from '../../components/card/dueCard'
import TobBar from '../../components/helpers/topbar'
import ModalTemplate from '../../components/modal/index'
import Search from '../../components/helpers/search'
import { MemberCard } from '../../components/card/MemberCard'
import IconButton from '../../components/button/IconButton'
import EditMember from '../../components/modal/Member/editMember'
import DeleteMember from '../../components/modal/Member/deleteMember'
import RoundedButton from '../../components/button/RoundedButton'
import AddMember from '../../components/modal/Member/addMember'
import BatchUpload from '../../components/modal/Member/batchUpload'
import { GetMembers } from '../../connection/members'


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
    const [memberList, setMemberList] = useState(null)
    const [edit, setEdit] = useState(false)
    const [deleteState, setDelete] = useState(false)
    const [addMember, setAddMember] = useState(false)
    const [batch, setBatch] = useState(false)


    useEffect(()=>{
        GetMembers(callback)
    })

    const callback =(res)=>{
        console.log(res.data.data[0].members.map(e=>e))
        setMemberList(res.data.data[0].members.map(e=>e))
    }

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
        body={<DeleteMember setVisible={setDelete}/>}
        visible={deleteState}
    />

    <ModalTemplate
        body={<AddMember setVisible={setAddMember}/>}
        visible={addMember}
    /> 

    <ModalTemplate
        body={<BatchUpload setVisible={setBatch}/>}
        visible={batch}
    />   

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
        <View style={tw`flex-row justify-around`}>
            <RoundedButton text='Add Member' pressed={()=>setAddMember(true)} />
            <RoundedButton text=' Batch Upload' pressed={()=>setBatch(true)} />
        </View>

        <View>
            <FlatList
                data={memberList}
                // key
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <MemberCard 
                        name ={item.memeber_info.map(f=>{if(f.name=='First Name' || f.name=='Second Name' ) {return f.value + ' '}})}
                        dept={item.user__email}
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