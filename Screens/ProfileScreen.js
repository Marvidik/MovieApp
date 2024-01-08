import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileListComponent from '../Components/ProfileListComponent';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <MaterialCommunityIcons name="map-marker" size={24} color="#fff" />
        <Text style={styles.text}>Lagos, Nigeria</Text>
      </View>

      <Image style={styles.image} source={require("../assets/profile.jpg")}/>
      <Text style={styles.text2}>IDIKA EBUBE MARVELLOUS</Text>

      <ProfileListComponent icon={"lock"}  text={"Change Password"}  color={"#E94057"}/>
      <ProfileListComponent icon={"bell"}  text={"Notifications"} color={"#8A2387"}/>
      <ProfileListComponent icon={"information"}  text={"Help"}  color={"#4084E9"}/>
      <ProfileListComponent icon={"heart"}  text={"Tell a Friend"} color={"#E94040"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      paddingTop:40,
      backgroundColor:"black",
      flex:1,
      paddingLeft:10
    },
    text:{
      color:"#fff",
      paddingLeft:20
    },
    box1:{
      flexDirection:"row",
      fontSize:16,
      fontWeight:"700"
    },
    image:{
      height:150,
      width:150,
      borderRadius:75,
      alignSelf:"center",
      marginTop:20
    },
    text2:{
      color:"white",
      alignSelf:"center",
      marginTop:10,
      fontSize:16,
      fontWeight:"700",
      marginBottom:50
    }
})