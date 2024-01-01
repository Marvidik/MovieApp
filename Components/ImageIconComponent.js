import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function ImageIconComponent({source}) {
  return (
    <View style={styles.imageicon}>
      <Image style={styles.image} source={source}/>
    </View>
  )
}


const styles = StyleSheet.create({
    imageicon:{
        height:32,
        width:32,
        
    },
    image:{
        height:32,
        width:32,
        borderRadius:32
    }
    
})