import React, {useState} from 'react';
import { View, Image,SafeAreaView, ScrollView,Text, Switch,Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';

import Logout from '../../modal/Logout';
import ModalTemplate from '../../modal';
import Loading from '../../modal/Loading';


const handlePress=(props)=>{
    props.navigation.toggleDrawer()
    props.navigation.navigate(props.to)
    props.setSelected(props.id)
}

const DrawerButton =(props)=>{
    return(
        <DrawerItem activeTintColor='#365C2A'
            key={props.id}
            style={tw`${props.bg}`}
                label={props.label}
                onPress={() => handlePress(props)}
                icon={({ focused, color, size }) => (props.icon) }
            />
    )
}
export default function CustomDrawerList({navigation}) {
    // const navigation = useNavigation();
    const [selected, setSelected] = useState(1)
    const [visible, setVisible] = useState(false)
    const [showDropdown, setshowDropdown] = useState(false)
    const [showPlatforms, setshowPlaform] = useState(false)
    const [currentPlatform, setCurrentPlatform] =useState('Member')
    const [showComiittee, setShowCommittee] = useState(false)
    const [directory, setDirectory] =useState({member:true, exco:false,comm:false})
    const [loadVisible, setLoadVisible] = useState(false)
    const [loadMessage, setLoadMessage] = useState('')

    const handlePlatform =(platform)=>{
        setCurrentPlatform(platform)
        setshowPlaform(false)
    }
    const drawerData=[
        {id:1, label:'Members Zone', to:'membersList', icon:<Ionicon name='md-home' size={22} color={'grey'}/>},
        {id:2, label:'Events', to:'events', icon:(<MaterialIcon name='event-available' style={tw`text-center `} color={'grey'} size={22}/>)},
        
    // {id:9, label:'Logout', to:'subscribe'},
    ]

    const drawerData2 =[
        
        {id:8, label:'Support', to:'supports', icon:<MaterialIcon name="headset-mic" size={22} color={'grey'}
     /> },
     {id:7, label:'Settings', to:'settings', icon:<MaterialIcon name="settings" size={22} color={'grey'}
     /> },
    ]

    const options =[
        {id:9, label:'News', to:'news'},
        {id:10, label:'Archive', to:'archive'},
        {id:11, label:'Gallery', to:'gallery'},
        {id:11, label:'Publications', to:'publications'},
        {id:11, label:'Minutes', to:'minute'},
       
    ]

    const committeeList =[
        {id:9, label:'Welfare Committee', to:'exco'},
        {id:10, label:'Planning Committee', to:'publication'},
    ]

    const handleSub=(to)=>{
        setshowDropdown(false)
        navigation.toggleDrawer()
        navigation.navigate(to)
        // props.setSelected(props.id)
    }

    const handleSwitch=(val)=>{
        if(val==1){
            setDirectory({member:true, exco:false, comm:false})
            navigation.navigate('Home', {type:'member'})
            setSelected(0)
    

        }else if(val==2){
            setDirectory({member:false, exco:true, comm:false})
            navigation.navigate('Home', {type:'exco'})
            setSelected(0)

        }else{
            setDirectory({member:false, exco:false, comm:true})
            setSelected(0)
            setShowCommittee(!showComiittee)
        }
    }

    const handleCommitteeSub =(message)=>{
        setLoadMessage(message)
        setShowCommittee(false)
        navigation.toggleDrawer();
        setLoadVisible(true)
    }


  return (
        <SafeAreaView style={{flex:1}}>
            
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />

            <ModalTemplate 
                visible={loadVisible}
                body={<Loading setLoadVisible={setLoadVisible} 
                name={loadMessage} 
                to={()=>navigation.navigate('Home',{type:'committee'})}
                />}
            /> 
           
            <ScrollView >

                <Text style={tw`pb-3 mb-6 mx-auto pt-5 text-lg border-b border-gray-300 w-8/12 text-center font-bold`}>Admin Panel</Text>

            <Pressable onPress={()=>navigation.navigate('members')} style={tw` flex-row mx-5 justify-between my-4`}>
                <View style={tw`flex-row`}>
                    <MaterialIcon name='groups' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Members Zone</Text>
                </View>
                
            </Pressable>
           

            { drawerData.map(e=>
            
                <DrawerButton
                    label={e.label}
                    navigation={navigation}
                    id={e.id}
                    key={e.id}
                    to={e.to}
                    setSelected={setSelected}
                    selected={selected}
                    bg={selected == e.id ?'bg-green-200':''}
                    icon={e.icon}
                />)}
            
            
            <Pressable onPress={()=>setshowDropdown(!showDropdown)} style={tw`my-4 flex-row mx-5`}>
                <Ionicon name='ios-file-tray-full' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text style={tw`text-gray-500`}>Resources</Text>
                <Ionicon name={showDropdown?'md-caret-up-outline':'md-caret-down-outline'} style={tw` my-auto px-2 text-gray-400`}/>
            </Pressable>
            { showDropdown ? options.map(e=>
            <Pressable key={e.id} onPress={()=>handleSub(e.to)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData2.map(e=>
            <DrawerButton
                label={e.label}
                key={e.id}
                navigation={navigation}
                id={e.id}
                to={e.to}
                setSelected={setSelected}
                selected={selected}
                bg={selected == e.id ?'bg-purple-100':''}
                icon={e.icon}
            />)}
            
            <Pressable onPress={()=>setVisible(true)} style={tw`my-4 flex-row mx-5`}>
                <MaterialIcon name='logout' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text>Logout</Text>
            </Pressable>
            </ScrollView>
        </SafeAreaView>
  );
}
