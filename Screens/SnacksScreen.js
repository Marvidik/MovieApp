import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import IconComponent from '../Components/IconComponent'
import SnacksComponent from '../Components/SnacksComponent'
import ButtonComponent from '../Components/BottonComponent';
import { useNavigation } from '@react-navigation/native';
import PaymentModal from '../Components/PaymentModal';

export default function SnacksScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);


  const navigation = useNavigation();
  const navigateToOtherScreen = () => {
    navigation.navigate('SnacksScreen'); // Replace 'OntherScreen' with the name of your screen
  };
  return (
    <View  style={styles.container}>
      <View style={styles.box1}>
        <IconComponent source={require("../assets/second.png")}/>
        <Text style={styles.text}>Add Snacks</Text>
        <IconComponent source={require("../assets/first.png")}/>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text2}>The snack will be available on the movie date</Text>
        <Text style={styles.text2}> selected by you. kindly come along with your </Text>
        <Text style={styles.text2}> ticket to claim your snacks.</Text>
      </View>

      <View style={styles.box3}>
        <Image source={require("../assets/popcorn.png")}/>

        <View style={styles.pop}>
            <Text  style={styles.text4}>PopCorn</Text>
        <SnacksComponent   size={"S"}  amount={"32"} />
        </View>
        <SnacksComponent   size={"M"}  amount={"32"} />
        <SnacksComponent   size={"L"}  amount={"32"} />
      </View>
      <View style={styles.box3}>
        <Image source={require("../assets/juice.png")}/>
        <View style={styles.pop}>
            <Text  style={styles.text4}>Drinks</Text>
        <SnacksComponent   size={"S"}  amount={"32"} />
        </View>
        <SnacksComponent   size={"M"}  amount={"32"} />
      </View>
      <TouchableOpacity
              style={styles.button}
              onPress={openModal}
            >
      <ButtonComponent  text={"Check Out"}/>
      </TouchableOpacity>

      <PaymentModal visible={modalVisible} onClose={closeModal}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:44,
        backgroundColor:"black",
        flex:1,
        paddingHorizontal:20
    },
    text:{
        color:"white",
        fontSize:18,
        fontWeight:"700",
        alignSelf:"center"
    },
    text2:{
        color:"white",
        fontSize:14,
        fontWeight:"400",
    },
    box1:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    box2:{
        height:60,
        width:320,
        paddingTop:31.5,
        paddingHorizontal:10,
        alignItems:"center",
        alignSelf:"center"
    },
    box3:{
        paddingTop:40.97,
        flexDirection:"row",
      
    },
    pop:{
        alignSelf:"flex-end",
    },
    text4:{
        color:"white",
        fontSize:18,
        fontWeight:"700",
        alignSelf:"center",
        paddingBottom:20
    },
    button:{
      position:"relative",
      top:100
    }
})