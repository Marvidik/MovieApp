import { View, Text, StyleSheet,TextInput,Image} from 'react-native'
import React from 'react'

export default function LastInputComponent({place,source}) {
  return (
    <View style={styles.input}>
    <TextInput placeholder={place} style={styles.int} placeholderTextColor={"#FFF"} />
     {source && <Image style={styles.search} source={source}/>}
 </View>
  )
}


const styles = StyleSheet.create({
    int:{
        color:"white",
        alignItems:"center",
        width:100
        
    },
    input:{
        backgroundColor:"#1B1A1A",
        height:45,
        justifyContent:"space-around",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center"
    },
    search:{
        alignItems:"center",
        justifyContent:"center",
  
    }
})