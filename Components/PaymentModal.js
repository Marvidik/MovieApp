import { View, Text ,StyleSheet,Modal,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BottonComponent from './BottonComponent';
import NewTextInputComponent from './NewTextInputComponent';
import LastInputComponent from './LastInputComponent';
import MovieTicketScreen from '../Screens/MovieTicketScreen';

export default function PaymentModal({ visible, onClose }) {

    const navigation = useNavigation();

  const navigateToOtherScreen = () => {
    navigation.navigate("MovieTicketScreen"); // Replace 'OtherScreen' with the name of your screen
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
            <Text style={styles.shape}>Payment</Text>

            <View style={styles.allinput}>
            <Text style={styles.cards}>Card Name</Text>
            <NewTextInputComponent place={"Idika Ebube Marvellous"}/>
            </View>
            <View style={styles.allinput}>
            <Text style={styles.cards}>Card Number</Text>
            <NewTextInputComponent place={"3546 7453 7352 8473"}/>
            </View>

            <View style={styles.cvv}>
                <View style={styles.info}>
                <Text style={styles.cards}>Expiry Date</Text>
                <LastInputComponent place={"Expiry Date"} source={require("../assets/calender.png")}/>
                </View>
                <View style={styles.info}>
                <Text style={styles.cards}>Cvv</Text>
                <LastInputComponent place={"****"}/>
                </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={navigateToOtherScreen}
            >
            <BottonComponent text={"Pay"}/>  
            </TouchableOpacity>
          </View>
        {/* </BlurView> */}
      </View>
    </Modal>
  )
}



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
      },
      cards:{
        color:"#fff",
        paddingBottom:5
      },
      cvv:{
        flexDirection:"row",
        justifyContent:"space-around"
      },
      info:{
        width:"50%",
        justifyContent:"space-between",
        paddingTop:30,
        paddingLeft:5
      },
      allinput:{
        paddingTop:30
      }
})