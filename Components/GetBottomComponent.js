import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StylishButtonComponent from './StylishButtonComponent';

export default function GetBottomComponent({onPress}) {
  return (
    <LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.content}>
            <View style={styles.view1}>
                <View style={styles.icontext}>
                <MaterialCommunityIcons name="calendar" size={24} color="#fff" />
                <Text style={styles.text}>Aug 26, 2023  | 6:00 PM</Text>
                </View>

                <View style={styles.icontext}>
                <MaterialCommunityIcons name="chair-rolling" size={24} color="#fff" />
                <Text style={styles.text}>Section: Seat 71, 72</Text>
                </View>

                <View style={styles.icontext}>
                <MaterialCommunityIcons name="bucket" size={24} color="#fff" />
                <Text style={styles.text}>Snack: 2 popcorn, 2 soft drinks</Text>
                </View>

                <View style={styles.icontext}>
                <MaterialCommunityIcons name="cart" size={24} color="#fff" />
                <Text style={styles.text2}>Total $35</Text>
                </View>

            </View>

            <View style={styles.view2}>
                <StylishButtonComponent onPress={onPress}/>
                <Text style={styles.snacks}>Get Snacks?</Text>

            </View>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    button:{
        height:172,
        width:"100%"
    },
    content:{
        flexDirection:"row"
    },
    view1:{
        
    },
    view2:{

    },
    icontext:{
        flexDirection:"row",
        paddingTop:10,
        paddingHorizontal:20
    },
    text:{
        color:"white",
        paddingLeft:5
    },
    text2:{
        color:"white",
        paddingLeft:5,
        fontSize:18,
        fontWeight:"500"
    },
    snacks:{
        color:"#fff",
        fontSize:16,
        fontWeight:"700",
        alignSelf:"center",
        paddingTop:5
    }

})