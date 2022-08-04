import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


import TobBar from '../../../components/helpers/topbar'
import ModalTemplate from '../../../components/modal/index'
import Search from '../../../components/helpers/search'
import { MemberCard } from '../../../components/card/MemberCard'
import IconButton from '../../../components/button/IconButton'
import EditMember from '../../../components/modal/Member/editMember'
import DeleteMember from '../../../components/modal/Member/deleteMember'
import RoundedButton from '../../../components/button/RoundedButton'
import EditEvent from '../../../components/modal/Event/editEvent'
import DeleteEvent from '../../../components/modal/Event/deleteEvent'
import AddEvent from '../../../components/modal/Event/addEvent'


const data =[
    {id:'1', name:'National AANI Meeting 2022', department:'Lagos Chapter', Year:'22/03/2022'},
    {id:'2',name:'Introduction of New Exco Members', department:'Oyo Chapter', Year:'22/05/2022'},
    {id:'3',name:'Annual Symposium 2022', department:'Oyo Chapter', Year:'22/08/2022'},
    {id:'4',name:'Annual Symposium 2022', department:'Lagos Chapter', Year:'22/08/2022'},
]

export default function Chapter() {

    const [edit, setEdit] = useState(false)
    const [addEvent, setAddEvent] = useState(false)
    const [deleteState, setDelete] = useState(false)

  return (
    <View style={tw`h-full`}>

    
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }
    
    <ModalTemplate
        body={<EditEvent setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<DeleteEvent setVisible={setDelete}/>}
        visible={deleteState}
    />
    <ModalTemplate
        body={<AddEvent setVisible={setAddEvent}/>}
        visible={addEvent}
    /> 
    
        <View>
            <Search/>
        </View>

        <View style={tw`w-4/12 mx-4 justify-around`}>
            <RoundedButton text='Add Event' pressed={()=>setAddEvent(true)} />
            {/* <RoundedButton text=' Batch Upload' pressed={()=>setBatch(true)} /> */}
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