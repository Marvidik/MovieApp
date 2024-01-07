import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function TickectCircleComponent() {
  return (
    <View style={styles.circle}>
    
    </View>
  )
}

const styles = StyleSheet.create({
    circle:{
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:"black"
    }
})