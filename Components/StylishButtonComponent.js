import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function StylishButtonComponent({onPress}) {
  return (
    <View style={styles.container}>
        <LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
    <TouchableOpacity onPress={onPress}>

      <View style={styles.button}>
        <Text style={styles.text}>GET IT</Text>
      </View>
    </TouchableOpacity>
    </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height:100,
        width:106,
        backgroundColor:"#8A2387",
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        alignItems:"center",
        justifyContent:"flex-end",
        paddingBottom:10
    },
    button:{
        height:80,
        width:80,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"#fff",
        fontWeight:"700",
        fontSize:18
    }
})