import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, FlatList, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import CheckButton from '../../../components/button/CheckButton';
import RoundedButton from '../../../components/button/RoundedButton';
import TobBar from '../../../components/helpers/topbar';
import ModalTemplate from '../../../components/modal';
import AddCriteria from '../../../components/modal/Settings/addCriteria';
import ChapterNameButton from '../../../components/button/chapterNameButton';
import InputField from '../../../components/input/TextField';

export default function OrgInfo({navigation}) {
    const [criteriaData, setCriteriaData] = useState({})
    const [name, setName] = useState(false)
    const [edit, setEdit] = useState(false)
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

    const chapters=['Lagos', 'Oyo']

return (
    <SafeAreaView>
        <ModalTemplate visible={showAdd} body={<AddCriteria setVisible={setShowAdd} />}/>
        <TobBar
            body={
                <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                    <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.goBack()} />
                    <Text style={tw`font-bold text-base`}>Organization Information</Text>
                    <Ionicon name='md-notifications' size={20} />
                </View>
            }
        />
        <View style={tw`flex-row w-10/12 mx-auto`}>
            <View>
                <Image style={tw`h-20 rounded-full w-20`} source={require('../../../images/onboarding/guy.png')} />
            </View>
            <View style={tw`my-auto mx-5`}>
                <Text style={tw`font-bold text-base pb-1`}>University of Lagos</Text>
                <Text>Alumni Association</Text>
            </View>
        </View>

        <Text style={tw`font-bold text-base mx-5 mt-5`}>Chapter Names</Text>
        {!edit ?
            <FlatList
            data={data}
            keyExtractor={(item,index)=>index}
            numColumns={2}
            columnWrapperStyle={tw`justify-between px-2`}
            renderItem={({item})=>
            // <View >
                <ChapterNameButton label={item.name} pressed={()=>setName(!name)} checked={name}/>
                
                // <InputField label={item.name} pressed={()=>setName(!name)} checked={name}/>
            }
        />:
        <ScrollView>
        {chapters.map((e, index)=><InputField noLabel key={index} label={e} />
            )
       }
        </ScrollView> 
        }
      <View style={tw`w-5/12 mx-auto`}>
          { edit ?
          <RoundedButton text='Submit' pressed={()=>setEdit(false)}/>:
          <RoundedButton text='Edit' pressed={()=>setEdit(true)}/>
          }
      </View>

      
    </SafeAreaView>
  );
}
