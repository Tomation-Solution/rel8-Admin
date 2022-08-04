import { View, Text, Pressable } from "react-native"
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native"
import IconButton from "../../button/IconButton"
import RoundedButton from "../../button/RoundedButton"

export const ElectionsCard =(props)=>{
    const navigation = useNavigation()
    return(
        <Pressable onPress={()=>navigation.navigate('viewElection',{item:props.item})} style={tw`bg-white  rounded-lg my-1 mx-2  p-2`}>
            <View>
            <View style={tw`flex-row justify-between`}>
            <Text style={tw`font-bold text-base`}>{props.name}</Text>
                <Text style={tw`text-xs`}>{props.time}</Text>
            </View>
        
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`my-auto`}>{props.body}</Text>
                {/* <Text style={tw`my-auto`}>{props.year}</Text> */}
                <View style={tw`w-20 flex-row justify-between`}>
                    {props.button1}

                    {props.button2}
                    {/* <RoundedButton text='View' pressed={()=>props.navigation.navigate('view-member')}/> */}
                </View> 
                
            </View>
            </View>
            {/* <View style={tw`w-1 h-10 bg-red-900`}></View> */}
        </Pressable>
    )
}