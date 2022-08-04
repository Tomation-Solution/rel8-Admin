import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import ModalTemplate from '../../../components/modal/index'
import Search from '../../../components/helpers/search'
import IconButton from '../../../components/button/IconButton'
import RoundedButton from '../../../components/button/RoundedButton'
import { SupportCard } from '../../../components/card/support/SupportCard'
import EditFAQ from '../../../components/modal/Support/editFAQ'
import Delete from '../../../components/modal/Others/delete'
import AddFAQ from '../../../components/modal/Support/addFAQ'
import { GetFAQs } from '../../../connection/support/faq'


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
    const [FAQList, setFAQList] = useState(null)
    const [deleteState, setDelete] = useState(false)
    const [addMember, setAddMember] = useState(false)
   

    useEffect(()=>{
        GetFAQs(callback)
    })

    const callback=(res)=>{
        // console.log(res)
        setFAQList(res.data)
    }
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
                data={FAQList}
                // key
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <SupportCard 
                        title ={item.name} 
                        body={item.body}
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