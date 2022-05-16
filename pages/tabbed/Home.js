import { View, SafeAreaView, ScrollView, StatusBar, Platform,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/helpers/topbar'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import Search from '../../components/helpers/search'
import IconCard from '../../components/card/iconCard'
import DueCard from '../../components/card/dueCard'

// import { SearchBar } from 'react-native-screens'

export default function Home({navigation}) {
  return (
    <SafeAreaView>
        {Platform.OS == 'android'?
        <StatusBar/>:<></>    
    }

    <TobBar
        body={
            <View style={tw`flex-row justify-between px-2 py-3 bg-gray-100`}>
                <Ionicon name='menu' onPress={()=>navigation.toggleDrawer()} size={23} />
                <Text>Admin Dashboard</Text>
                <Ionicon name='md-notifications' size={20} />

            </View>
        }
    />
    <Search />
    <ScrollView style={tw`px-4`}>
        <Text style={tw`mt-1`}>Directory</Text>
        <View style={tw`flex-row justify-between px-1 my-3`}>
          <IconCard
            bg='bg-green-50'
            icon={<Ionicon name='people' size={20} style={tw`bg-red-50 p-2 text-green-400 my-auto rounded-full`} />}
            amount={20}
            description=' Members'
          />

          <IconCard
            bg='bg-red-50'
            icon={<Ionicon name='calendar' size={20} style={tw`bg-red-50 p-2 text-pink-400  my-auto rounded-full`} />}
            amount={30}
            description='Events'
          />
          
        </View>
        
        <View style={tw`flex-row justify-between px-1 my-3`}>
          <IconCard
            bg='bg-blue-50'
            icon={<Ionicon name='person' size={18} style={tw`bg-red-50 p-2 text-blue-400 my-auto rounded-full`} />}
            amount={20}
            description='Committee Members'
          />

          <IconCard
            bg='bg-purple-100'
            icon={<MaterialIcon name='groups' size={22} style={tw`bg-gray-100 p-2 text-purple-500 my-auto rounded-full`} />}
            amount={30}
            description='Exco Members'
          />
          
        </View>

        <View style={tw`pt-3`}>
          <Text style={tw`font-bold text-base`}>Dues</Text>
        </View>
        <View style={tw` justify-between px-1 my-3`}>
          <DueCard
            bg='bg-blue-500'
            icon={<Ionicon name='person' size={20} style={tw`bg-pink-50 p-2  my-auto rounded-full`} />}
            amount='200,000'
            color='text-white'
            description='Total Income'
          />
          <View style={tw`h-2`}></View>
          <DueCard
            bg='bg-blue-100'
            icon={<MaterialIcon name='groups' size={22} style={tw`bg-gray-50 p-2  my-auto rounded-full`} />}
            amount='398,000'
            color='text-blue-700'
            description='Total Outstanding'
          />
          
        </View>
        


    </ScrollView>
      
    </SafeAreaView>
  )
}