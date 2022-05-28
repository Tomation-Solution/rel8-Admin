import { View, Text, Image } from "react-native"
import tw from "tailwind-react-native-classnames"
import IconButton from "../../button/IconButton"
import RoundedButton from "../../button/RoundedButton"

export const GalleryCard =(props)=>{
    return(
        <View style={tw`bg-white  flex-row rounded-lg my-1 mx-2  p-2`}>
            <View >
            <Image style={tw`h-20 w-20 rounded-lg`} source={require('../../../images/onboarding/guy.png')} />

            </View>
            <View style={tw`w-9/12 mx-3`}>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-bold text-base`}>{props.name}</Text>
                    {/* <Text style={tw`text-xs`}>{props.time}</Text> */}
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
        </View>
    )
}