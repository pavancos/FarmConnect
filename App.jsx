import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind} from 'tailwind-rn';
import Home from './components/Home/Home';

export default function App() {
  return (
    <TailwindProvider value={utilities}>
      <StatusBar></StatusBar>
      <View className="flex-1 flex-col items-center justify-center mt-6  bg-yellow-50">
        <View className="bg-green-600 w-full p-9">
        </View>
        <Home></Home>
      </View>
      
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EBEAD4',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }

// });
