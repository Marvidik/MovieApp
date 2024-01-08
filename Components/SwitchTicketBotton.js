import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function SwitchTicketBotton({text,color,color1}) {
  return (
    <View>

    {color &&<LinearGradient
      colors={["#1B1A1A", "#1B1A1A", "#1B1A1A"]}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </LinearGradient>}

    {color1 &&<LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </LinearGradient>}
    </View>
  );
}



const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        height:50,
        marginTop:38.5,
        alignItems:"center",
        justifyContent:"center",
        width:160,
        marginHorizontal:10
      },
      buttonContent: {
        paddingVertical: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    