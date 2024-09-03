import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import ListingFormScreen from './screens/ListingFormScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalProvider } from './context/GlobalContext';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <GlobalProvider>
      <NavigationContainer>

        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4ca66a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarStyle: {
              backgroundColor: '#4ca66a',
              borderTopColor: '#000',
            },
            tabBarActiveTintColor: '#fefefe',
            tabBarInactiveTintColor: '#391f5c',
            contentStyle: {
              backgroundColor: 'red',
            }
          }}

        >
          <Tab.Screen
            name="Home" component={HomeScreen}
            options={{
              title: 'FarmConnect',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),

            }}
          />
          <Tab.Screen
            name="Form" component={ListingFormScreen}
            options={{
              title: 'Form',
              tabBarLabel: 'Form',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Listing" component={ProductListingScreen}
            options={{
              title: 'Listing',
              tabBarLabel: 'Listing',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalProvider>

  );
}
