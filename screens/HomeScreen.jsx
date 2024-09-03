import {
    Button,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Home from '../components/Home/Home';

export default function HomeScreen() {
    return (
        <View className="bg-yellow-50">

            <Home />
        </View>

    );
}
