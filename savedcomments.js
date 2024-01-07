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