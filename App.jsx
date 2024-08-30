import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from './components/Home/Home';

export default function App() {
  return (
    <SafeAreaView>
      <View className="bg-yellow-50">
        <View className="bg-green-600 w-full py-5">
          <Text className="text-white font-bold text-2xl text-center shadow shadow-black">FarmConnect</Text>
        </View>
        <Home />
      </View>
      <StatusBar
        animated={true}
        backgroundColor="#419A5F"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={false}
      />
    </SafeAreaView>

  );
}
