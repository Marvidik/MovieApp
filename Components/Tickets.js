import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import IconComponent from '../Components/IconComponent'

export default function Tickets({source,name,subname,duration}) {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
            <Image style={styles.image}  source={source}/>
            <View style={styles.box2}>
                <Text style={styles.text}>{name}</Text>
                <Text>{subname}</Text>
                <Text>{duration}</Text>
            </View>
        </View>
        <IconComponent source={require("../assets/forward.png")}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height:120,
        width:"96%",
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignSelf:"center",
        marginTop:20,
        borderRadius:12,
        paddingHorizontal:5,

    },
    box1:{
        flexDirection:"row"
    },
    image:{
        height:95,
        width:80,
        marginRight:10
    },
    text:{
        fontSize:16,
        fontWeight:"700"
    },
    box2:{
        justifyContent:"space-between"
    }
})