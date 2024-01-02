import { View, Text,StyleSheet,Image, ImageBackground } from 'react-native'
import React from 'react'
import SelectionComponents from '../Components/SelectionComponents'
import { LinearGradient } from 'expo-linear-gradient';
import BottonComponent from '../Components/BottonComponent';
import TimeSelectionComponent from '../Components/TimeSelectionComponent';

export default function DateandTimeScreen() {
    const all =<LinearGradient
colors={['#8A2387', '#E94057', '#F27121']}
start={{ x: 0, y: 0 }}
end={{ x: 1, y: 0 }}
></LinearGradient>
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground style={styles.image} source={require("../assets/avater.png")}>

        <View style={styles.overlay}>
        <Text style={styles.text}>Avater</Text>
        <Text style={styles.text3}>The Way Of The Water</Text>
        <Text style={styles.text2}>Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron. It stars Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver.</Text>
      </View>
        </ImageBackground>
      </View>
      <View>
      <Text style={styles.text4}>Pick Date and Time</Text>
      <Text style={styles.text4}>January</Text>
      <Text style={styles.text4}>________________</Text>

      <View style={styles.box}>
        <SelectionComponents style2={{backgroundColor:'#E94057'}} text1={"Mon"} text2={"01"}/>
        <SelectionComponents style2={{backgroundColor:'black'}} text1={"Mon"} text2={"01"}/>
        <SelectionComponents style2={{backgroundColor:'black'}} text1={"Mon"} text2={"01"}/>
        <SelectionComponents style2={{backgroundColor:'black'}} text1={"Mon"} text2={"01"}/>
        <SelectionComponents style2={{backgroundColor:'black'}} text1={"Mon"} text2={"01"}/>
        <SelectionComponents style2={{backgroundColor:'black'}} text1={"Mon"} text2={"01"}/>
      </View>
      <Text style={styles.text4}>Time</Text>
      <View style={styles.box}>
      <TimeSelectionComponent  style2={{backgroundColor:'black'}} text={"10:00am"}/>
        <TimeSelectionComponent  style2={{backgroundColor:'black'}} text={"2:00pm"}/>
        <TimeSelectionComponent  style2={{backgroundColor:'#E94057'}} text={"4:00pm"}/>
        <TimeSelectionComponent  style2={{backgroundColor:'black'}} text={"6:00pm"}/>
        <TimeSelectionComponent  style2={{backgroundColor:'black'}} text={"8:00pm"}/>
        <TimeSelectionComponent  style2={{backgroundColor:'black'}} text={"1:00am"}/>
      </View>

      </View>

    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        backgroundColor:"black",
        flex:1
    },
    image:{
        width:"100%",
        height:443,
        resizeMode: 'cover'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the last value for opacity/darkness
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#fff', // Color of the text
        fontSize: 24,
        fontWeight: 'bold',
        top:"25%"
      },
      text2:{
        paddingHorizontal:20,
        color:"#fff",
        top:"30%"
      },
      text3:{
        paddingHorizontal:20,
        color:"#fff",
        top:"30%",
        fontSize:18,
        fontWeight:"500"
      },
      text4:{
        paddingHorizontal:20,
        color:"#fff",
        fontSize:18,
        fontWeight:"500",
        alignSelf:"center"
      },
      box:{
        flexDirection:"row",
        paddingHorizontal:20
      }
})