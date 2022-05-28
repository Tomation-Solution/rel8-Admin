import { View, Text } from "react-native"
import tw from "tailwind-react-native-classnames"
import IconButton from "../../button/IconButton"
import RoundedButton from "../../button/RoundedButton"

export const NewsCard =(props)=>{
    return(
        <View style={tw`bg-white rounded-lg my-1 mx-2  p-2`}>
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
    )
}