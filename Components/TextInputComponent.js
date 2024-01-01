import { View, Text,StyleSheet,TextInput,Image} from 'react-native'
import React from 'react'

export default function TextInputComponent() {
  return (
    <View style={styles.input}>
      <Image style={styles.search} source={require("../assets/search.png")}/>
      <TextInput placeholder='Search' style={styles.int} placeholderTextColor={"#FFF"} />
      <Image style={styles.search} source={require("../assets/eva_options-2-outline.png")}/>
    </View>
  )
}



const styles = StyleSheet.create({
    input:{
        marginTop:20,
        backgroundColor:"#1B1A1A",
        borderWidth:1,
        borderColor:'#8A2387',
        height:45,
        justifyContent:"center",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
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