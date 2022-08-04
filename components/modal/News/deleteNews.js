import React,  {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import RoundedButton from '../../button/RoundedButton';
// import ModalTemplate from '.';


export default function DeleteNews(props) {
const [visible, setVisible] = useState(true)
const navigation = useNavigation()

const cancel=()=>{
    // navigation.goBack()
    // navigation.navigate('HomeScreen')
    props.setVisible(false)
}

const logout=()=>{
    // navigation.goBack()
    navigation.navigate('login')
    props.setVisible(false)
}
  return (
    
            <View style={tw`m-auto bg-white rounded-xl w-8/12`}>
                <View style={tw`border-b border-purple-300 my-3 mx-5`}>
                    <Text style={tw`font-bold text-lg text-center text-purple-500`}>Confirm Delete</Text>
                </View>
                <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to delete this News</Text>
                <View style={tw`px-5 flex-row mb-4 justify-around `}>
                    <View style={tw`w-5/12`}>
                        <RoundedButton text='Delete' pressed={()=>cancel()}/>
                    </View>
                    <Pressable onPress={()=>cancel()}>
                        <Text style={tw`my-auto`}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
  );
}
