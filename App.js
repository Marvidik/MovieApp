import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const FloatingTab = ({ label, icon, onPress, isFocused }) => (
  <TouchableOpacity
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: isFocused ? '#3498db' : 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#3498db',
      }}
    >
      <Icon name={icon} size={24} color={isFocused ? '#fff' : '#3498db'} />
    </View>
    <Text style={{ marginTop: 6, color: isFocused ? '#3498db' : 'black' }}>{label}</Text>
  </TouchableOpacity>
);


const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
);



const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({
            tabBarButton: (props) => (
              <FloatingTab
                {...props}
                label="Home"
                icon="home"
                onPress={props.onPress}
                isFocused={props.isFocused}
              />
            ),
            headerShown: false,
        
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="settings" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="person" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
