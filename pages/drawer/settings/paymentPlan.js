import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView,Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import TobBar from '../../../components/helpers/topbar';
import CheckButton from '../../../components/button/CheckButton';
import PlanCard from '../../../components/modal/Settings/planCard';

export default function PaymentPlans({navigation}) {
    const [selected, setSelected] = useState(null)
    const [showList, setShowList] =useState(false)
    const data=[
        {'name':'mini', 'value':'100 - 500'},
        {'name':'mini', 'value':'500 - 1500'},
        {'name':'mini', 'value':'1500 - 5000'},
        {'name':'mini', 'value':'5001 - Above'},
    ]

    const planData =[
        {name:'Chat with alumnus members', value:true},
        {name:'Chat with alumnus members', value:true},
        {name:'Chat with alumnus members', value:true},
        {name:'Chat with alumnus members', value:false},
    ]

    const handleSelect=(value)=>{
        setSelected(value)
        setShowList(false)
    }
  return (
    <SafeAreaView>
      <TobBar
            body={
                <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                    <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.goBack()} />
                    <Text style={tw`font-bold text-base`}>Payment Plans</Text>
                    <Ionicon name='md-notifications' size={20} />
                </View>
            }
        />
        <View>
            <CheckButton label='Bulk Payment' />
            <CheckButton label='Individual Payment' />
        </View>

        <View>
            <Text style={tw`mx-5 my-2`}>Number of Users</Text>
            <Pressable onPress={()=>setShowList(!showList)} style={tw`bg-gray-300 flex-row justify-between w-8/12 mx-5 p-3 rounded-lg`}>
                <Text>{selected ? selected.value:'Pick User'}</Text>
              {showList ?  
                <Ionicon name='remove' size={15} />
                :
                <Ionicon name='add' size={15} />
            }
            </Pressable>
            {showList &&
            <View style={tw`w-7/12 p-2 bg-gray-200 mx-7`}>
                { data.map((e, index)=>
                    <Pressable key={index} onPress={()=>handleSelect(e)}>
                        <Text key={index} style={tw`py-1`}>{e.value}</Text>
                    </Pressable>
                    )
                }
            </View>}
            {selected &&
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw`flex-row mt-8 py-2 px-3`}>

                <View style={tw`w-3/12 mx-2`}>
                    <PlanCard title='3 Months' amount={200} duration='Month' headerBg='bg-purple-900' data={planData} />
                </View>

                <View style={tw`w-3/12 mx-2`}>
                    <PlanCard title='6 Months' border amount={190} duration='Month' headerBg='bg-pink-600' data={planData} />
                </View>

                <View style={tw`w-3/12 mx-2`}>
                    <PlanCard title='1 Year' amount={185} duration='Month' headerBg='bg-pink-800' data={planData} />
                </View>
            </ScrollView>}
        </View>
     </SafeAreaView>
  );
}
