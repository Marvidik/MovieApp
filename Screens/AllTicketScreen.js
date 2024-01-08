import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import IconComponent from '../Components/IconComponent'
import SwitchTicketBotton from '../Components/SwitchTicketBotton'
import Tickets from '../Components/Tickets'

export default function AllTicketScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Movie Tickets</Text>
      <IconComponent source={require("../assets/first.png")}/>
      </View>

      <View style={styles.box2}>
        <SwitchTicketBotton text={"Recent Tickets"} color1/>
        <SwitchTicketBotton text={"Past Tickets"} color />
      </View>
    
      <Tickets source={require("../assets/avater.png")} name={"Avater"} subname={"Way of the water"} duration={"105 min"}/>
      <Tickets source={require("../assets/lucifer.png")} name={"Lucifer"} subname={"The Enemy"} duration={"105 min"}/>
      <Tickets source={require("../assets/morbius.png")} name={"Morbius"} subname={"The Marvin Movie"} duration={"105 min"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:44,
        backgroundColor:"black",
        flex:1
    },
    text:{
        color:"#fff",
        fontSize:16,
        fontWeight:"700"
    },
    box1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        alignItems:"center"
    },
    box2:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})