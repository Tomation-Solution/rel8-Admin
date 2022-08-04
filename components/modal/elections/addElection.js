import React, {useState} from 'react';
import { View,ScrollView, SafeAreaView,Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AddElections } from '../../../connection/elections';
import CheckButton from '../../button/CheckButton';

import RoundedButton from '../../button/RoundedButton';
import Dropdown from '../../dropdown';
import FileUpload from '../../input/fileUpload';
import InputField from '../../input/TextField';


export default function AddElection(props) {

    const [name, setName] = useState(null)
    const [role, setRole] = useState(null)
    const [details, setDetails] = useState(null)
    

    const eventTypes=[
        {id:1, name:'Paid'},
        {id:2, name:'Free'},
    ]

    const eventCategories=[
        {id:1, name:'National'},
        {id:2, name:'Chapters'},
        {id:2, name:'Members'},
    ]

    const locationTypes=[
        {id:1, name:'Physical'},
        {id:2, name:'Virtiual'},
        {id:2, name:'Hybrid'},
    ]

    const addElection=()=>{
        AddElections(callback,{ "name":name, "role_name":role,"role_detail":details})
    }

    const callback =(res)=>{
        console.log(res)
    }
  return (
    <SafeAreaView style={tw`m-auto bg-white rounded-xl w-10/12`}>
        <View style={tw`border-b py-2 border-purple-300 my-3 mx-5`}>
            <Text style={tw`font-bold text-lg text-center text-purple-500`}>Add Election</Text>
        </View>
        {/* <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to logout of the application</Text> */}
        {/* <ScrollView> */}
        <InputField label='Election Name' setText={setName} />
        <InputField label='Role Name' setText={setRole} />
        {/* <InputField label='Date' setText={setAddress} /> */}
        <InputField label='Description' setText={setDetails} />
        {/* <Dropdown label='Event Type' selected={type} setSelected={setType} data={eventTypes}/>
        <Dropdown label='Event Category' selected={category} setSelected={setCategory} data={eventCategories}/>
        <InputField label='Fee Name' setText={setFeeName} />
        <InputField label='Amount' setText={setFeeAmount} />
        
        <Dropdown label='Location Type' selected={category} setSelected={setCategory} data={locationTypes}/>
        <InputField label='Address' setText={setAddress} />
        <View>
            <FileUpload label='upload Image' isImage />
        </View>
        <View style={tw`flex-row`}>
            <CheckButton label='Recurrent' />
            <CheckButton label='One-TIme' />
        </View> */}

        {/* </ScrollView> */}
        <View style={tw`px-5 flex-row mb-4 justify-around `}>
            <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>addElection()}/>
            </View>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Text style={tw`my-auto`}>Cancel</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}
