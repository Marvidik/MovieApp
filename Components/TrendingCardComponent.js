import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function TrendingCardComponent({source}) {
  return (
    <View style={styles.trending}>
      <Image style={styles.image} source={source}/>
    </View>
  )
}



const styles = StyleSheet.create({
    trending:{
        height:150,
        width:100,
        paddingTop:4

    },
    image:{
        height:150,
        width:100,
        borderRadius:20

    }
})