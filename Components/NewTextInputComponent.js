import { View, Text ,StyleSheet,TextInput} from 'react-native'
import React from 'react'

export default function NewTextInputComponent({place}) {
  return (
    <View style={styles.input}>
       <TextInput placeholder={place} style={styles.int} placeholderTextColor={"#FFF"} />
    </View>
  )
}



const styles = StyleSheet.create({
    int:{
        color:"white",
        paddingLeft: 0,
        alignItems:"center",
        width:250
        
    },
    input:{
        marginTop:20,
        backgroundColor:"#1B1A1A",
        borderWidth:1,
        borderColor:'#8A2387',
        height:45,
        justifyContent:"center",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center"
    }
})