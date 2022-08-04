import React, {useState} from 'react';
import { View,ScrollView, SafeAreaView,Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { CreateNormalDue } from '../../../connection/dues';
import { AddElections } from '../../../connection/elections';
import CheckButton from '../../button/CheckButton';

import RoundedButton from '../../button/RoundedButton';
import Dropdown from '../../dropdown';
import FileUpload from '../../input/fileUpload';
import InputField from '../../input/TextField';


export default function AddDue(props) {

    const [name, setName] = useState(null)
    const [amount, setAmount] = useState(null)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [exco, setExco] = useState(false)
    const [selectedType, setScheduleType] = useState(null)
    const [days, setDays] = useState([0])
    const [selectedMonths, setSelectedMonths] = useState([0])
    const [reOccuring, setReOccuring] = useState(false)
    const [forChapter, setForChapter] = useState(false)
    
    // console.log(selectedType)

    const scheduleType=[
        {id:1, name:'Day', value:'day'},
        {id:2, name:'Month of Year', value:'month_of_year'},
        {id:3, name:'Day of Week', value:'day_of_week'},
    ]

    const weekDays=[
        {id:1, name:'Sun', value:0},
        {id:2, name:'Mon', value:1},
        {id:3, name:'Tue', value:2},
        {id:4, name:'Wed', value:3},
        {id:5, name:'Thu', value:4},
        {id:6, name:'Fri', value:5},
        {id:7, name:'Sat', value:6},
    ]

    const months=[
        {id:1, name:'Jan', value:0},
        {id:2, name:'Feb', value:1},
        {id:3, name:'Mar', value:2},
        {id:4, name:'Apr', value:3},
        {id:5, name:'May', value:4},
        {id:6, name:'Jun', value:5},
        {id:7, name:'Jul', value:6},
        {id:8, name:'Aug', value:7},
        {id:9, name:'Sep', value:8},
        {id:10, name:'Oct', value:9},
        {id:11, name:'Nov', value:10},
        {id:12, name:'Dec', value:11},

    ]

    const handleSelectDay =(val,list, setValue)=>{
        list.includes(val.value) ? 
        setValue(list.filter(e=>e!=val.value)):
        setValue([...list, val.value])
    }
    const addElection=()=>{
        AddElections(callback,{ "name":name, "role_name":role,"role_detail":details})
    }

    const callback =(res)=>{
        console.log(res)
        props.setVisible(false)
    }
    // console.log(selectedType)
    const handleSubmit=()=>{
        const data ={'name':name, amount:amount, startDate:date, startTime:time,
        re_occuring:reOccuring, is_for_excos:exco,scheduletype:selectedType.value,
        schedule:selectedType?selectedType.value=='month_of_year'?selectedMonths:(selectedType.value=='day_of_week'?days:''):'',
        for_chapters:forChapter
    }
    CreateNormalDue(callback, data)
    }
  return (
    <SafeAreaView style={tw`m-auto bg-white rounded-xl w-10/12`}>
        <View style={tw`border-b py-2 border-purple-300 my-3 mx-5`}>
            <Text style={tw`font-bold text-lg text-center text-purple-500`}>Add Due</Text>
        </View>
       
        <InputField label='Due Name' setText={setName} />
        <InputField label='Amount' setText={setAmount} />
        <InputField label='Start Date' setText={setDate} />
        <InputField label='Start Time' setText={setTime} />
        <View style={tw`flex-row`}>
            <CheckButton label=' ReOccuring?' checked={reOccuring} pressed={()=>setReOccuring(!reOccuring)} />
            <CheckButton label='For Excos?' checked={exco} pressed={()=>setExco(!exco)}/>
        </View>
        
        <View style={tw`mx-1.5`}>
            <CheckButton label='For Chapter?' checked={forChapter} pressed={()=>setForChapter(!forChapter)}/>
        </View>

        <Dropdown label='Schedule Type' selected={selectedType} setSelected={setScheduleType} data={scheduleType} />
        {selectedType&&selectedType.value =='day_of_week' &&
        <View style={tw`flex-row w-11/12 mx-5`}>
            {weekDays.map((e)=>
            <CheckButton key={e.id} checked={days.includes(e.value)?true:false}  vertical label={e.name} pressed={()=>handleSelectDay(e, days,setDays)}/>)}
        </View>}
{ selectedType&&selectedType.id ==2 &&
        <View style={tw`flex-row flex-wrap mx-5`}>
            {months.map((e)=>
            <CheckButton key={e.id} checked={selectedMonths.includes(e.value)?true:false}  vertical label={e.name} pressed={()=>handleSelectDay(e, selectedMonths,setSelectedMonths)}/>)}
        </View>}


        <View style={tw`px-5 flex-row mb-4 justify-around `}>
            <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>handleSubmit()}/>
            </View>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Text style={tw`my-auto`}>Cancel</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}
