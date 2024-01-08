import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileListComponent({icon,text,color}) {
  return (
    <View style={styles.input}>
      <MaterialCommunityIcons name={icon} size={24} color={color} />
      <Text style={styles.int} >{text}</Text>
      <MaterialCommunityIcons name="greater-than" size={24} color="#fff" />
    </View>
  )
}


const styles = StyleSheet.create({
    input:{
        marginTop:15,
        backgroundColor:"#1B1A1A",
        height:45,
        justifyContent:"space-between",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:10,
        paddingHorizontal:10
    },
    int:{
        color:"white",
        paddingLeft: 10,
        alignItems:"center",
        width:250
        
    },
    search:{
        alignItems:"center",
        justifyContent:"center"
    }

})