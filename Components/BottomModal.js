// BottomModal.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { BlurView } from 'react-native-blur';
import TextInputComponent from './TextInputComponent';
import BottonComponent from './BottonComponent';
import NewTextInputComponent from './NewTextInputComponent';
import { useNavigation } from '@react-navigation/native';
import DateandTimeScreen from '../Screens/DateandTimeScreen';


const BottomModal = ({ visible, onClose }) => {

  const navigation = useNavigation();

  const navigateToOtherScreen = () => {
    navigation.navigate("DateandTimeScreen"); // Replace 'OtherScreen' with the name of your screen
  };
  
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        {/* <BlurView style={styles.blurView} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white"> */}
          <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose}>
              <Text style={styles.shape}>________</Text>
            </TouchableOpacity>
            <Text style={styles.shape}>Location</Text>
            <Text style={styles.shape2}>Selected Cinema/Location For The Movie</Text>
            <NewTextInputComponent place={"Lagos State, Nigeria"}/>
            <NewTextInputComponent  place={"Genesis Cinema"}/>
            <NewTextInputComponent place={"2 Stella Street Victorial Island, Lagos"}/>

            <TouchableOpacity
              style={styles.button}
              onPress={navigateToOtherScreen}
            >
            <BottonComponent text={"Continue"}/>  
            </TouchableOpacity>
          </View>
        {/* </BlurView> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  shape:{
    color:"#fff",
    alignSelf:"center",
    fontSize:29,
    fontWeight:"500",
    paddingBottom:20,
    paddingTop:0
  },
  shape2:{
    color:"white",
    alignSelf:"center"
  }
});

export default BottomModal;
