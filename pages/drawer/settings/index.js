import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import TobBar from '../../../components/helpers/topbar';

export default function Settings() {
  return (
    <SafeAreaView>
      <TobBar
            body={
                <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                    <Ionicon name='ios-arrow-back' size={20} onPress={()=>navigation.goBack()} />
                    <Text style={tw`font-bold text-base`}>Settings</Text>
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
     </SafeAreaView>
  );
}
