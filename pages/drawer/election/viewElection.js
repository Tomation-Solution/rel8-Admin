import React, {useState} from 'react';
import { View, SafeAreaView, FlatList,Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import TobBar from '../../../components/helpers/topbar';
import SelectableButton from '../../../components/button/SelectableButton';
import RoundedButton from '../../../components/button/RoundedButton';

export default function ViewElection({navigation, route}) {
    
    const [selectedList, setSelectedList] = useState([])

    const data=[
        {id:1, name:'Ade Ademola',},
        {id:2, name:'Ade Ademola',},
        {id:3, name:'Ade Ademola',},
        {id:4, name:'Ade Ademola',},
        {id:5, name:'Ade Ademola',},
    ]
    
    const handleAddtoList =(value)=>{
        // alert(value)
        if(selectedList.includes(value)){
            setSelectedList(selectedList.filter(e=>e!=value))
        }else{
        setSelectedList([...selectedList, value])
    }
        console.log(selectedList)
    }

  return (
    <SafeAreaView>
         <TobBar
        body={
            <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.goBack()} />
                <Text style={tw`font-bold text-base`}>{route.params.item.name} Elections</Text>
                <Ionicon name='md-notifications' size={20} />
            </View>
        }
    />
        <View>
        <Text style={tw`font-bold mx-3`}>Add Constestants</Text>

        <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                style={tw`mx-auto`}
                numColumns={2}
                renderItem={
                    ({item})=>(
                        <SelectableButton pressed={()=>handleAddtoList(item.id)} text={item.name}  id={item.id} selected={selectedList} navigation= {navigation}/>
                    
                    )
                }
            />
            {/* {
                data.map(e=><SelectableButton text={e.name} />)
            } */}
           {selectedList.length>0 && <View style={tw`w-4/12 mx-auto`}>
                <RoundedButton text='Submit' />
            </View>}
        </View>
     </SafeAreaView>
  );
}
