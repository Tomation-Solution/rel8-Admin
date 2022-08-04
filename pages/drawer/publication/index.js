import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState, useEffect} from 'react'
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
import { GetPublications } from '../../../connection/publications'
import AddPublication from '../../../components/modal/Publication/addPublication'
import DeletePublicaion from '../../../components/modal/Publication/deletePublicaion'
import EditPublication from '../../../components/modal/Publication/editPublication'


const data =[
    {id:'1', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'2', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'3', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'4', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'5', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'6', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
    
]

export default function Publications({navigation}) {

    const [edit, setEdit] = useState(false)
    const [publications, setPublications] = useState(null)
    const [deleteState, setDelete] = useState(false)
    const [addNews, setAddNews] = useState(false)
    const [batch, setBatch] = useState(false)
    // const [addNews, setAddNews] = useState(false)

    useEffect (()=>{
        GetPublications(callback)
    })
    const callback =(res)=>{
        setPublications(res.data)
        // console.log(res.data)
    }

  return (
    <SafeAreaView style={tw`h-full`}>

    
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }
    <TobBar
        body={
            <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.navigate('Home')} />
                <Text style={tw`font-bold text-base`}>Publications</Text>
                <Ionicon name='md-notifications' size={20} />

            </View>
        }
    />
    
    <ModalTemplate
        body={<EditPublication setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<DeletePublicaion setVisible={setDelete}/>}
        visible={deleteState}
    />

    <ModalTemplate
        body={<AddPublication setVisible={setAddNews}/>}
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
            <RoundedButton text='Add Publication' pressed={()=>setAddNews(true)} />
            {/* <RoundedButton text=' Batch Upload' pressed={()=>setBatch(true)} /> */}
        </View>

        <View>
            <FlatList
                data={publications}
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