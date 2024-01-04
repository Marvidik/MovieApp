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
    <LinearGradient
      colors={['#8A2387', '#E94057', '#F27121']} // Add your gradient colors here
      start={{ x: 0, y: 0 }}
end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <NavigationContainer  >
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: all, // Background color
              borderTopWidth: 0, // Remove top border
              height:65
            },
            tabBarIconStyle: {
              // Style for all icons
              
            },
            tabBarActiveTintColor: '#fff', // Active tab color
            tabBarInactiveTintColor: '#868e96', // Inactive tab color
            tabBarLabelStyle: {
              // Style for all labels (if visible)
            },
          }}
          style={{
            backgroundColor: 'transparent', // Set this to your gradient background color
            borderTopWidth: 0, // Remove the top border
          }}
        >
          <Tab.Screen
            name="Home"
            component={TicketsStack}
            options={({ route }) => ({
              tabBarButton: (props) => (
                <FloatingTab
                  {...props}
                  icon="home"
                  onPress={props.onPress}
                  isFocused={props.isFocused}
                />
              ),
              headerShown: false,
            })}
          />
          <Tab.Screen
          name="Tickets"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="receipt" size={size} color={"#fff"} />,
          }}
        />
          <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="person" size={size} color={"#fff"} />,
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
       </LinearGradient>
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