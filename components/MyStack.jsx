import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs/MyTabs.jsx';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000', // Set your desired header background color
        },
        headerTintColor: '#000', // Set your desired header text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ title: 'Home' }} // Customize the header title
      />
      <Stack.Screen
        name="Form"
        component={MyTabs}
        options={{ title: 'Form' }} // Customize the header title
      />
        <Stack.Screen
            name="Listing"
            component={MyTabs}
            options={{ title: 'Listing' }} // Customize the header title
        />
    </Stack.Navigator>
  );
}

export default MyStack;
