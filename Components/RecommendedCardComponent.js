import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function RecommendedCardComponent({source}) {
  return (
    <View style={styles.recommended}>
      <Image style={styles.image} source={source} resizeMode="cover"/>
    </View>
  )
}


const styles = StyleSheet.create({
    recommended:{
        height:130.5,
        width:235,
        paddingTop:4,
        marginHorizontal:10

    },
    image:{
        height:130.5,
        width:235,
        borderRadius:20

    }
    
})