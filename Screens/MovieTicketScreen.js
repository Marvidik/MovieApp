import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import IconComponent from '../Components/IconComponent'
import TickectCircleComponent from '../Components/TickectCircleComponent'

export default function MovieTicketScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <IconComponent source={require("../assets/second.png")}/>
        <Text style={styles.text}>Movie Ticket</Text>
      </View>

      <View style={styles.ticket}>
            <View style={styles.box2}>
                <Image style={styles.image} source={require("../assets/avater.png")}/>
                <View>
                    <Text style={styles.text1}>Avater</Text>
                    <Text style={styles.text2}>The way of the water </Text>
                    <Text style={styles.text2}>120 minr</Text>
                </View>
            </View>
            <View style={styles.box3}>
                    <View style={styles.first}>
                        <Text>Customer Name</Text>
                        <Text style={styles.detail}>Idika Ebube Marvellous</Text>
                    </View>
                    <View  style={styles.second}>
                        <Text>Ticket ID</Text>
                        <Text style={styles.detail}>#1234hbj34</Text>
                    </View>
            </View>
            <View style={styles.third}>
                        <Text>Phone Number</Text>
                        <Text style={styles.detail}>08132106194</Text>
            </View>

            <Text>---------------------------------------------------------------------------------------</Text>

            <View style={styles.box4}>
                <View style={styles.firstsection}>
                <View style={styles.third}>
                        <Text>Date</Text>
                        <Text style={styles.detail}>26/03/2024</Text>
            </View>
            <View style={styles.third}>
                        <Text style={styles.inf}>Snack</Text>
                        <Text style={styles.detail}>2 pop corn, 2 Soft drink</Text>
            </View>
            <View style={styles.third}>
                        <Text>Cinema</Text>
                        <Text style={styles.detail}>Genesis Cinema</Text>
            </View>
                </View>

                <View style={styles.secondsection}>
                <View style={styles.third}>
                        <Text>Time</Text>
                        <Text style={styles.detail}>6.00 pm</Text>
            </View>
            <View style={styles.third}>
                        <Text>Seat</Text>
                        <Text style={styles.detail}>71</Text>
            </View>
            <View style={styles.third}>
                        <Text>Total</Text>
                        <Text style={styles.detail}>$35</Text>
            </View>
                </View>
            </View>
            <Text style={styles.dot2}>---------------------------------------------------------------------------------------</Text>
            <View style={styles.circleposition1}>
                 <TickectCircleComponent/>
            </View>
            <View style={styles.circleposition2}>
                 <TickectCircleComponent/>
            </View>

            <Image style={styles.bar} source={require("../assets/bar.png")}/>
           
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:44,
        backgroundColor:"black",
        flex:1,
    },
    text:{
        color:"#fff",
        fontSize:18,
        fontWeight:"700",
        alignSelf:"center",
        paddingLeft:15
    },
    box1:{
        flexDirection:"row",
        paddingLeft:10
    },
    ticket:{
        backgroundColor:"#fff",
        width:355,
        height:507,
        alignSelf:"center",
        marginTop:60,
        paddingTop:10,
    
        
    },
    image:{
        height:100,
        width:90,
        marginLeft:10,
        marginRight:20
        
    },
    box2:{
        flexDirection:"row",
      
    },
    box3:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingTop:11.5
      
    },
    text1:{
        fontSize:16,
        fontWeight:"800",
    },
    text2:{
        paddingTop:10,
        fontSize:14,
        fontWeight:"400"
    },
    circleposition1:{
        position:"relative",
        bottom:10,
        right:25
    },
    circleposition2:{
        position:"relative",
        bottom:57,
        left:330
    },
    third:{
        paddingLeft:10,
        paddingTop:10
    },
    box4:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:10
    },
    dot2:{
        position:"relative",
        top:25
    },
    bar:{
        position:"relative",
        bottom:80,
        alignSelf:"center"
    },
    detail:{
        fontSize:16,
        fontWeight:"400"
    }

})