import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonComponent({ text }) {
  return (
    <LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    borderRadius: 10,
    height:50,
    marginTop:38.5,
    marginBottom:55.5,
    alignItems:"center",
    justifyContent:"center"
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
