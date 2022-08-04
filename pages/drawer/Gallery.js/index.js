import { View,SafeAreaView, FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import TobBar from '../../../components/helpers/topbar'
import ModalTemplate from '../../../components/modal/index'
import Search from '../../../components/helpers/search'
import IconButton from '../../../components/button/IconButton'
import RoundedButton from '../../../components/button/RoundedButton'
import { GalleryCard } from '../../../components/card/gallery/GalleryCard'
import AddImage from '../../../components/modal/Gallery/addImage'
import EditImage from '../../../components/modal/Gallery/editImage'
import DeleteImage from '../../../components/modal/Gallery/deleteImage'
import { GetGallery } from '../../../connection/gallery'


const data =[
    {id:'1', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'2', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'3', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'4', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'5', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'6', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
    
]

export default function Gallery({navigation}) {

    const [edit, setEdit] = useState(false)
    const [deleteState, setDelete] = useState(false)
    const [addNews, setAddNews] = useState(false)
    const [galleryData, setGalleryData] = useState(null)

    useEffect(()=>{
        GetGallery(callback)
    })
    const callback=(res)=>{
        setGalleryData(res.data)
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
                <Text style={tw`font-bold text-base`}>Gallery</Text>
                <Ionicon name='md-notifications' size={20} />
            </View>
        }
    />
    
    <ModalTemplate
        body={<EditImage setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<DeleteImage setVisible={setDelete}/>}
        visible={deleteState}
    />

    <ModalTemplate
        body={<AddImage setVisible={setAddNews}/>}
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
            <RoundedButton text='Add Picture' pressed={()=>setAddNews(true)} />
            {/* <RoundedButton text=' Batch Upload' pressed={()=>setBatch(true)} /> */}
        </View>

        <View>
            <FlatList
                data={galleryData}
                // key
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <GalleryCard 
                        name ={item.name} 
                        body={item.body}
                        time={item.time}
                        image={item.photo_file}
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