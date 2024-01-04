import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function IncrementButtonComponent({symbol}) {
  return (
    <LinearGradient
    colors={['#8A2387', '#E94057', '#F27121']}
    style={styles.amount}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <View>
      <Text style={styles.sym}>{symbol}</Text>
    </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    sym:{
        color:"white",
    },
    amount:{
        width:21,
        height:20,
        justifyContent:"center",
        alignItems:"center",
       
    }
})