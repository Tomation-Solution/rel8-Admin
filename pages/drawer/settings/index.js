import React, {useState} from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import TobBar from '../../../components/helpers/topbar';
import HomeListCard from '../../../components/card/settings/homeListCard';
import ModalTemplate from '../../../components/modal';
import Logout from '../../../components/modal/Others/Logout';
import UploadDB from '../../../components/modal/Settings/UploadDB';
import ScrollableModal from '../../../components/modal/Settings/scrollableModal';

export default function Settings({navigation}) {
  
    const [showLogout, setShowLogout] =useState(false)
    const [showUpload, setShowUpload] =useState(false)
    const [showLanguage, setShowLanguage] =useState(false)
    const [showCurrency, setShowCurrency] =useState(false)
    
    const languageData=['English','Arabic', 'Greek','Spanish','German']
    const currencyData=['Naira','Dollar', 'Euro','Yen']
    
    return (
    <SafeAreaView>
        <ModalTemplate visible={showLogout} body={<Logout setVisible={setShowLogout} />} />
        <ModalTemplate visible={showUpload} body={<UploadDB setVisible={setShowUpload} />} />
        <ModalTemplate visible={showLanguage} body={<ScrollableModal data={languageData}  setVisible={setShowLanguage} />} />
        <ModalTemplate visible={showCurrency} body={<ScrollableModal data={currencyData}  setVisible={setShowCurrency} />} />
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
        <View style={tw` mx-auto mt-10 w-10/12`}>
            <HomeListCard pressed={()=>navigation.navigate('orgInfo')} name='Organization information'/>
            <HomeListCard name='Verification'/>
            <HomeListCard name='All criteria'  pressed={()=>navigation.navigate('criteria')}/>
            <HomeListCard name='Upload Database' pressed={()=>setShowUpload(true)}/>
            <HomeListCard name='Payment plan' pressed={()=>navigation.navigate('plans')}/>
            <HomeListCard name='Language' sub='English' pressed={()=>setShowLanguage(true)}/>
            <HomeListCard name='Currency' sub='Naira' pressed={()=>setShowCurrency(true)}/>
            <HomeListCard name='Logout' pressed={()=>setShowLogout(true)}/>
        </View>
     </SafeAreaView>
  );
}
