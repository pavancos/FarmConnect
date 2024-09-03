import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home.jsx';
import Form from '../Form/Form.jsx';
import ProductListing from '../ProductListing/ProductListing.jsx';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Form') {
            iconName = focused ? 'pencil' : 'pencil-outline';
          } else if (route.name === 'Listing') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#391f5c',  // Active icon color (Tomato color)
        tabBarInactiveTintColor: '#fefefe',  // Inactive icon color (Gray color)
        tabBarStyle: {
          backgroundColor: '#4ca66a',  // Tab bar background color (Ghost White)
          borderTopColor: '#000',  // Border color on the top of the tab bar (Gainsboro)
        },
        tabBarLabelStyle: {
          fontSize: 12,  // Adjust the font size of the labels
          fontWeight: '600',  // Adjust the font weight
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Form" component={Form} />
      <Tab.Screen name="Listing" component={ProductListing} />
    </Tab.Navigator>
  );
}

export default MyTabs;
