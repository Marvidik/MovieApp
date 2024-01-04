import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function IconComponent({source}) {
  return (
    <LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']}
      style={styles.icon}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View >
      <Image style={styles.image} source={source}/>
    </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    icon:{
        height:32,
        width:32,
        borderRadius:32,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        alignSelf:"center"
    }
})