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
import ListingForm from '../components/ListingForm/ListingForm';

export default function ListingFormScreen() {
    return (
        <View className="bg-yellow-50 flex flex-1">
            <ScrollView>
                <ListingForm />

            </ScrollView>
        </View>
    );
}
