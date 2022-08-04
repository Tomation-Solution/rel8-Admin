import React, {useState} from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import CheckButton from '../../../components/button/CheckButton';
import RoundedButton from '../../../components/button/RoundedButton';
import TobBar from '../../../components/helpers/topbar';
import ModalTemplate from '../../../components/modal';
import AddCriteria from '../../../components/modal/Settings/addCriteria';

export default function Criteria({navigation}) {
    const [criteriaData, setCriteriaData] = useState({})
    const [name, setName] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    
    const data=[
        {'name':'Name', value:true},
        {'name':'Phone Number', value:true},
        {'name':'Email Address', value:true},
        {'name':'Department', value:true},
        {'name':'Course of Study', value:true},
        {'name':'Graduation Year', value:true},
        {'name':'Matric Number', value:true},
        {'name':'Period of Study', value:true},
        {'name':'Chapter', value:true},
        // {id:1, 'name':'Matric Number', value:true},
      
    ]

return (
    <SafeAreaView>
        <ModalTemplate visible={showAdd} body={<AddCriteria setVisible={setShowAdd} />}/>
        <TobBar
            body={
                <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                    <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.goBack()} />
                    <Text style={tw`font-bold text-base`}>Criteria</Text>
                    <Ionicon name='md-notifications' size={20} />
                </View>
            }
        />
        <FlatList
            data={data}
            keyExtractor={(item,index)=>index}
            numColumns={2}
            columnWrapperStyle={tw`justify-between px-2`}
            renderItem={({item})=>
            // <View >
                <CheckButton label={item.name} pressed={()=>setName(!name)} checked={name}/>
                
            // </View>
            }
        />
      <View style={tw`w-5/12 mx-auto`}>
          <RoundedButton text='Add New' pressed={()=>setShowAdd(true)}/>
      </View>

      
    </SafeAreaView>
  );
}
