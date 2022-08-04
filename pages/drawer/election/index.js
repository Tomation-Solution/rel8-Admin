import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Platform, FlatList,StatusBar,Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import tw from 'tailwind-react-native-classnames';

import IconButton from '../../../components/button/IconButton';
import RoundedButton from '../../../components/button/RoundedButton';
import { ElectionsCard } from '../../../components/card/elections/ElectionsCard';
// import { ElectionsCard } from '../../../components/card/news/NewsCard';

import TobBar from '../../../components/helpers/topbar';
import ModalTemplate from '../../../components/modal';
import AddElection from '../../../components/modal/elections/addElection';
import DeleteElection from '../../../components/modal/elections/deleteElection';
import EditElection from '../../../components/modal/elections/editElection';
import { GetElections } from '../../../connection/elections';



export default function Election({navigation}) {
    const [elections, setElections] = useState(null)
    const [edit, setEdit] = useState(false)
    const [addElection, setAddElection] = useState(false)
    const [deleteElection, setDelete] = useState(false)
    const data =[
        {id:1, name:'Presidential', description:'Position of the overseer of the club', date:'19/02/22 -09/07/22'},
        {id:2, name:' Vice Presidential', description:'Position of the overseer of the club', date:'19/02/22 -09/07/22'},
        {id:3, name:'Treasurer', description:'Position of the overseer of the club', date:'19/02/22 -09/07/22'},
        {id:4, name:'National Secretary', description:'Position of the overseer of the club', date:'19/02/22 -09/07/22'}
    ]

    useEffect(()=>{
        let isSubscribed = true;
        GetElections(callback)
        return () => (isSubscribed = false)
    })

    const callback=(res)=>{ 
        setElections(res.data.data)
    }

  return (
    <SafeAreaView>
         {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }

    <ModalTemplate
        body={<EditElection setVisible={setEdit}/>}
        visible={edit}
    />

    <ModalTemplate
        body={<DeleteElection setVisible={setDelete} />}
        visible={deleteElection}
    />

    <ModalTemplate
        body={<AddElection setVisible={setAddElection}/>}
        visible={addElection}
    /> 
    <TobBar
        body={
            <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.navigate('Home')} />
                <Text style={tw`font-bold text-base`}>Elections</Text>
                <Ionicon name='md-notifications' size={20} />

            </View>
        }
    />
      {/* <Text>elections</Text> */}
        <View style={tw`w-4/12 mx-3`}>
            <RoundedButton text='Add Election' pressed={()=>setAddElection(true)} />
        </View>
      <View>
            <FlatList
                data={elections}
                // key
                keyExtractor={(item)=>item.id}
                ListFooterComponent={<View style={tw`h-32`}/>}
                renderItem={({item})=>(
                    <ElectionsCard 
                        name ={item.name} 
                        body={item.role_detail}
                        time={item.date}
                        item={item}
                        setVisible={setEdit}
                        navigation={navigation}
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
     </SafeAreaView>
  );
}
