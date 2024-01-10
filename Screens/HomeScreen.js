import { View, Text,StyleSheet,Image,ScrollView,Modal,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import ImageIconComponent from '../Components/ImageIconComponent'
import TextInputComponent from '../Components/TextInputComponent'
import TrendingCardComponent from '../Components/TrendingCardComponent'
import RecommendedCardComponent from '../Components/RecommendedCardComponent'
import BottomModal from '../Components/BottomModal';


// The main Screen and the apps home screen


export default function HomeScreen() {

  // this is used to call up the modal on the home scren
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);


  return (
    
    <View style={styles.component}>
     
      <View style={styles.box1}>
        <ImageIconComponent source={require("../assets/profile.jpg")}/>
        <Text style={styles.text}>Mandys Movies</Text>
        <ImageIconComponent source={require("../assets/carbon_notification.png")}/>
      </View>

      <TextInputComponent/>
      <ScrollView>
      <Text style={styles.text2}>Trending Now</Text>

      <View style={styles.box2}>
      <TouchableOpacity onPress={openModal}>
        <TrendingCardComponent source={require("../assets/avater.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <TrendingCardComponent source={require("../assets/lucifer.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <TrendingCardComponent source={require("../assets/morbius.png")}/>
        </TouchableOpacity>
        
      </View>
    

      <Text style={styles.text3}>Recommended</Text>

    <ScrollView horizontal={true}>
      <View style={styles.box3}>
      <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/flip.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/fullmovie.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/flop.png")}/>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <Text style={styles.text3}>Top Movies</Text>


    <ScrollView horizontal={true}>
      <View style={styles.box3}>
      <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/action.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/india.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/nigeria.png")}/>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <Text style={styles.text3}>Top Naija</Text>

    <ScrollView horizontal={true}>
      <View style={styles.box3}>
      <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/flip.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/fullmovie.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
        <RecommendedCardComponent source={require("../assets/flop.png")}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ScrollView>

    <BottomModal visible={modalVisible} onClose={closeModal} />
      
    </View>
  )
}


const styles = StyleSheet.create({
    component:{
        paddingTop:44,
        paddingHorizontal:20,
        backgroundColor:"black",
        flex:1
    },
    box1:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        color:"#fff",
        textAlign:"center",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:18,
    },
    text2:{
        color:"#fff",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:18,
        paddingTop:37
    },
    box2:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    box3:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text3:{
        color:"#fff",
        fontWeight:"700",
        fontStyle:"normal",
        fontSize:18,
        paddingTop:25,
        paddingBottom:5
    }
})