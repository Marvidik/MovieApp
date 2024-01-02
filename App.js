import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  floatingTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#3498db',
  },
  floatingTab: {
    position: 'relative',
    top: -5, // Adjust this value to move the icon further up
  },
  label: {
    marginTop: 6,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const navTheme = {
  colors: {
    background: "#171717"
  }
};

const App = () => {
  return (
    <NavigationContainer  >
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        style={{
          backgroundColor: 'transparent', // Set this to your gradient background color
          borderTopWidth: 0, // Remove the top border
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
            tabBarIcon: ({ color, size }) => (
              <LinearGradient
                colors={['#8A2387', '#E94057', '#F27121']}
                style={styles.iconBackground}
              >
                <Icon name="settings" size={size} color="#fff" />
              </LinearGradient>
            ),
            barStyle: { backgroundColor: '#E94057' },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LinearGradient
                colors={['#8A2387', '#E94057', '#F27121']}
                style={styles.iconBackground}
              >
                <Icon name="person" size={size} color="#fff" />
              </LinearGradient>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;