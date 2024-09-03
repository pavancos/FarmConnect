import {
    Button,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import ProductListing from '../components/ProductListing/ProductListing';

export default function ProductListingScreen() {
    return (

        <ScrollView className='h-screen w-full bg-yellow-50 pt-3 pb-6'>
            <View className="bg-yellow-50">
                <ProductListing />
            </View>
        </ScrollView>
    );
}
