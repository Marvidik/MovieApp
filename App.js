import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import DateandTimeScreen from './Screens/DateandTimeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SnacksScreen from './Screens/SnacksScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FloatingTab = ({ label, icon, onPress, isFocused }) => (
  <TouchableOpacity
    style={styles.floatingTabContainer}
    onPress={onPress}
  >
    <LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']}
      style={styles.gradientBackground}
    >
      <View style={styles.floatingTab}>
        <Icon name={icon} size={24} color="#fff" />
      </View>
    </LinearGradient>
    <Text style={[styles.label, { color: isFocused ? '#3498db' : 'black' }]}>{label}</Text>
  </TouchableOpacity>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Settings Screen</Text>
  </View>
);


const navTheme = {
  colors: {
    background:<LinearGradient
    colors={['#8A2387', '#E94057', '#F27121']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  ></LinearGradient>
  }
};
const all =<LinearGradient
colors={['#8A2387', '#E94057', '#F27121']}
start={{ x: 0, y: 0 }}
end={{ x: 1, y: 0 }}
></LinearGradient>

const TicketsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tickets" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="DateandTimeScreen" component={DateandTimeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="SnacksScreen" component={SnacksScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const App = () => {
  return (
      <NavigationContainer  >
        <Stack.Navigator>
        <Stack.Screen name="Tickets" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DateandTimeScreen" component={DateandTimeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SnacksScreen" component={SnacksScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
      
  );
};


const styles = StyleSheet.create({
  floatingTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:"relative",
    top:-50,

  },
  gradientBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor: 'black',
  },
  floatingTab: {
    position: 'relative',

   
  },
  label: {
    marginTop: 6,
  },
});


export default App;