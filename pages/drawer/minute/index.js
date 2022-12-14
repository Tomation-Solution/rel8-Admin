import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import DueCard from '../../../components/card/dueCard'
import TobBar from '../../../components/helpers/topbar'
import ModalTemplate from '../../../components/modal/index'
import Search from '../../../components/helpers/search'
import { MemberCard } from '../../../components/card/MemberCard'
import IconButton from '../../../components/button/IconButton'
import EditMember from '../../../components/modal/Member/editMember'
import DeleteMember from '../../../components/modal/Member/deleteMember'
import RoundedButton from '../../../components/button/RoundedButton'
import AddMember from '../../../components/modal/Member/addMember'
import BatchUpload from '../../../components/modal/Member/batchUpload'
import { NewsCard } from '../../../components/card/news/NewsCard'
import EditNews from '../../../components/modal/News/editNews'
import DeleteNews from '../../../components/modal/News/deleteNews'
import AddNews from '../../../components/modal/News/addNews'
import Delete from '../../../components/modal/Others/delete'
import EditMinute from '../../../components/modal/Minutes/editMinute'
import AddMinute from '../../../components/modal/Minutes/addMinutes'


const data =[
    {id:'1', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'2', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'3', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'4', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'5', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'6', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
    
]

export default function Minutes({navigation}) {

    const [edit, setEdit] = useState(false)
    const [deleteState, setDelete] = useState(false)
    const [addNews, setAddNews] = useState(false)
    const [batch, setBatch] = useState(false)

  return (
    <SafeAreaView style={tw`h-full`}>

    
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }
    <TobBar
        body={
            <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.navigate('Home')} />
                <Text style={tw`font-bold text-base`}>Minute</Text>
                <Ionicon name='md-notifications' size={20} />

            </View>
        }
    />
    
    <ModalTemplate
        body={<EditMinute setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<Delete setVisible={setDelete} what='Minute'/>}
        visible={deleteState}
    />

    <ModalTemplate
        body={<AddMinute setVisible={setAddNews}/>}
        visible={addNews}
    /> 

    {/* <ModalTemplate
        body={<BatchUpload setVisible={setBatch}/>}
        visible={batch}
    />    */}

        <View>
            <Search/>
        </View>
        <View style={tw`flex-row mx-5`}>
            <RoundedButton text='Add Minute' pressed={()=>setAddNews(true)} />
            {/* <RoundedButton text=' Batch Upload' pressed={()=>setBatch(true)} /> */}
        </View>

        <View>
            <FlatList
                data={data}
                // key
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <NewsCard 
                        name ={item.name} 
                        body={item.body}
                        time={item.time}
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
    </SafeAreaView>
  )
}