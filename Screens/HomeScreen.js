import { View, Text,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'
import ImageIconComponent from '../Components/ImageIconComponent'
import TextInputComponent from '../Components/TextInputComponent'
import TrendingCardComponent from '../Components/TrendingCardComponent'
import RecommendedCardComponent from '../Components/RecommendedCardComponent'



export default function HomeScreen() {
  return (
    <View style={styles.component}>
      <View style={styles.box1}>
        <ImageIconComponent source={require("../assets/profile.jpg")}/>
        <Text style={styles.text}>Choose Movies</Text>
        <ImageIconComponent source={require("../assets/carbon_notification.png")}/>
      </View>

      <TextInputComponent/>

      <Text style={styles.text2}>Trending Now</Text>

      <View style={styles.box2}>
        <TrendingCardComponent source={require("../assets/avater.png")}/>
        <TrendingCardComponent source={require("../assets/lucifer.png")}/>
        <TrendingCardComponent source={require("../assets/morbius.png")}/>
      </View>

      <Text style={styles.text3}>Recommended</Text>

    <ScrollView horizontal={true}>
      <View style={styles.box3}>
        <RecommendedCardComponent source={require("../assets/flip.png")}/>
        <RecommendedCardComponent source={require("../assets/fullmovie.png")}/>
        <RecommendedCardComponent source={require("../assets/flop.png")}/>
      </View>
    </ScrollView>

    <Text style={styles.text3}>Top Movies</Text>

    <ScrollView horizontal={true}>
      <View style={styles.box3}>
        <RecommendedCardComponent source={require("../assets/action.png")}/>
        <RecommendedCardComponent source={require("../assets/india.png")}/>
        <RecommendedCardComponent source={require("../assets/nigeria.png")}/>
      </View>
    </ScrollView>
      
    </View>
  )
}


const styles = StyleSheet.create({
    component:{
        paddingTop:44,
        paddingHorizontal:20,
        backgroundColor:"black",
        flex:1
    },
    box1:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        color:"#fff",
        textAlign:"center",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:18,
    },
    text2:{
        color:"#fff",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:18,
        paddingTop:37
    },
    box2:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    box3:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text3:{
        color:"#fff",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:18,
        paddingTop:25,
        paddingBottom:5
    }
})