// BottomTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

const TabNavigator = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        initialRouteName="Home"
      >
        <TabNavigator.Screen name="Home" component={HomeScreen} />
        <TabNavigator.Screen name="Settings" component={SettingsScreen} />
        <TabNavigator.Screen name="Profile" component={ProfileScreen} />
        {/* Add more screens as needed */}
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', height: 56, backgroundColor: '#fff' }}>
      {state.routes.map((route, index) => (
        <Tab
          key={route.key}
          route={route}
          descriptor={descriptors[route.key]}
          navigation={navigation}
          index={index}
        />
      ))}
    </View>
  );
};

const Tab = ({ route, descriptor, navigation, index }) => {
  const isFocused = navigation.state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: isFocused ? '#3498db' : '#ecf0f1',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isFocused ? (
          <Animated.View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Your icon component for the selected state */}
            <Text>{route.name}</Text>
          </Animated.View>
        ) : (
          // Your icon component for the unselected state
          <Text>{route.name}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabNavigator;
