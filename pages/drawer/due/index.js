import { View,SafeAreaView, ScrollView,FlatList, Platform, StatusBar,Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import DueCard from '../../../components/card/dueCard'
import TobBar from '../../../components/helpers/topbar'
import ModalTemplate from '../../../components/modal/index'
import Search from '../../../components/helpers/search'
import IconButton from '../../../components/button/IconButton'
import RoundedButton from '../../../components/button/RoundedButton'
import { NewsCard } from '../../../components/card/news/NewsCard'
import Delete from '../../../components/modal/Others/delete'
import EditMinute from '../../../components/modal/Minutes/editMinute'
import AddMinute from '../../../components/modal/Minutes/addMinutes'
import { GetDues } from '../../../connection/dues'
import { GetStats } from '../../../connection/dashboard'
import EditDue from '../../../components/modal/due/editDue'
import AddDue from '../../../components/modal/due/addDue'
import DeleteDue from '../../../components/modal/due/deleteDue'


const data =[
    {id:'1', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'2', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'3', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'4', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'5', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
{id:'6', name:'Annual Members Meeting', time:'22/03/2022', body:'Exco Meeting'},
    
]


export default function Dues({navigation}) {

    const [edit, setEdit] = useState(false)
    const [deleteState, setDelete] = useState(false)
    const [addDue, setAddDue] = useState(false)
    const [dues, setDue] = useState(null)
    const [stats, setStats] = useState(null)
    const [owingMember, setOwingMembers] = useState(0)

    useEffect(()=>{
        GetStats(statCallback);
        GetDues(callback)
    },[])

    const statCallback=(res)=>{
        // console.log(res.data.data)
        setStats(res.data.data[0])
    }
    const callback=(res)=>{
        setDue(res.data.data[0].dues)
        setOwingMembers(res.data.data[0].list_of_owing_members)
        // console.log(res.data.data[0].dues)
    }

    const handleDelete =(id)=>{
        setDelete(true)
        setId(id)
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
                <Text style={tw`font-bold text-base`}>Dues</Text>
                <Ionicon name='md-notifications' size={20} />

            </View>
        }
    />
    
    <ModalTemplate
        body={<EditDue setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<DeleteDue setVisible={setDelete} what='Due'/>}
        visible={deleteState} 
    />

    <ModalTemplate
        body={<AddDue setVisible={setAddDue}/>}
        visible={addDue}
    /> 

    <View style={tw`w-full flex-row  py-4`}>
       <ScrollView 
       horizontal 
       showsHorizontalScrollIndicator={false} >
        <View style={tw`w-5/12 pl-2 pr-2`}>
            <DueCard 
                description='Total Income' 
                // text={true}
                color='text-blue-700'
                amount={stats?stats.total_income:0}
                bg='bg-blue-100'
            />
        </View>

        <View style={tw`w-5/12 pr-2`}>
            <DueCard 
                description='Total Oustanding' 
                // text={true}
                color='text-white'
                amount={stats?stats.amount_owing:0}
                bg='bg-blue-500'
            />
        </View>

        <View style={tw`w-5/12 pr-2`}>
            <DueCard 
                description='Members Owing' 
                text={true}
                color='text-gray-200'
                amount={dues?owingMember.length:0}
                bg='bg-blue-800'
            />
        </View>
        </ScrollView>
    </View>
        <View>
            <Search/>
        </View>
        <View style={tw`flex-row mx-5`}>
            <RoundedButton text='Add Dues' pressed={()=>setAddDue(true)} />
            {/* <RoundedButton text=' Batch Upload' pressed={()=>setBatch(true)} /> */}
        </View>

        <View>
            <FlatList
                data={dues}
                // key
                keyExtractor={(item, index)=>item.Name}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <NewsCard 
                        name ={item.Name} 
                        body={'N '+item.amount}
                        time={item.startDate+' '+ item.startTime}
                        setVisible={setEdit}
                        button1={<IconButton bg='bg-gray-100' icon={  
                        <MaterialIcon onPress={()=>setEdit(true)} style={tw`my-auto px-1 text-base text-blue-500`}  name='mode-edit'/>
                    }/>}
                        button2={<IconButton  bg='bg-gray-50' icon={  
                        <Ionicon onPress={()=>handleDelete(item.id)} style={tw`my-auto px-1 text-base text-red-800`}  name='trash'/>}/>}
                        
                        />
                )
                }
            />
        </View>
      {/* <Text>Ms</Text> */}
    </SafeAreaView>
  )
}