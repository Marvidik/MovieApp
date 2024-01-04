import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import IncrementButtonComponent from './IncrementButtonComponent'

export default function SnacksComponent({size,amount}) {
  return (
    <View style={styles.container}>
        <View style={styles.number}>
            <IncrementButtonComponent symbol={1}/>
        </View>
      <Text style={styles.text1}>{size}</Text>
      <Text style={styles.text1}>${amount}</Text>

      <View style={styles.increment}>
      <IncrementButtonComponent symbol={"+"}/>
      <IncrementButtonComponent symbol={"-"}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:85,
        width:70,
        backgroundColor:"#1B1A1A",
        borderRadius:10,
        borderWidth:1,
        borderColor:"red",
        paddingHorizontal:4,
        marginHorizontal:5,
        alignSelf:"flex-end"
    },
    text1:{
        color:"white",
        alignSelf:"center",
        fontSize:16,
        fontWeight:"400"
    },
    number:{
        alignSelf:"flex-end",
        paddingTop:2
    },
    increment:{
        flexDirection:"row",
        justifyContent:"space-evenly"
        
    }
})