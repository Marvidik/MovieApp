import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function TimeSelectionComponent({style2,text}) {
    const allstyles=[style2,styles.container]
  return (
    <View style={allstyles}>
    <Text style={styles.text}>{text}</Text>
  </View>
  )
}



const styles = StyleSheet.create({
    container:{
        height:45,
        width:45,
        borderRadius:7,
       margin:4,
    justifyContent:"space-evenly",
    marginTop:20
    },
    text:{
        fontWeight:"700",
        fontSize:14,
        color:"white",
        alignSelf:"center"
        
        
    }
})