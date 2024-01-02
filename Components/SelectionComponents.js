import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function SelectionComponents({text1,text2,style2}) {
    const allstyles=[style2,styles.container]
  return (
    <View style={allstyles}>
      <Text style={styles.text}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height:60,
        width:45,
        borderRadius:5,
       margin:4,
        justifyContent:"space-evenly"
    },
    text:{
        fontWeight:"700",
        fontSize:14,
        color:"white",
        alignSelf:"center"
        
        
    }
})