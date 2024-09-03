import React, { useState, useContext } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { GlobalContext } from '../../context/GlobalContext';
import RNPickerSelect from 'react-native-picker-select';

const ListingForm = () => {
    const { addItem } = useContext(GlobalContext);

    const [listingType, setListingType] = useState('');
    const [farmerID, setFarmerID] = useState('');
    const [farmerName, setFarmerName] = useState('');
    const [cropName, setCropName] = useState('');
    const [cropType, setCropType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    const [location, setLocation] = useState({
        area: '',
        district: '',
        state: '',
    });
    const [price, setPrice] = useState('');
    const [startingBid, setStartingBid] = useState('');

    const handleSubmit = async () => {
        if (!listingType || !farmerID || !farmerName || !cropName || !quantity
            || !harvestDate || !location.area || !location.district || !location.state
            || (listingType === 'Retail' && !price) || (listingType === 'Wholesale' && !startingBid)) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }
        const newItem = {
            id: Math.floor(Math.random() * 1000000),
            CropName: cropName,
            CropType: cropType,
            Quantity: quantity,
            DateOfHarvest: harvestDate,
            Location: location,
            Price: listingType === 'Retail' ? price : undefined,
            StartingBid: listingType === 'Wholesale' ? startingBid : undefined,
            TypeOfListing: listingType,
            FarmerId: farmerID,
            FarmerName: farmerName
        };

        try {
            const response = await fetch('https://8p0ch0bz-3000.inc1.devtunnels.ms/putListing', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            const result = await response.json();
            if (response.ok) {
                Alert.alert('Success', result.message);
                addItem(result.payload);
            } else {
                Alert.alert('Error', result.message);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to add listing');
        }
    };


    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Add New Listing:</Text>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Type Of Listing</Text>
                <RNPickerSelect
                    onValueChange={(value) => setListingType(value)}
                    items={[
                        { label: 'Retail', value: 'Retail' },
                        { label: 'Wholesale', value: 'Wholesale' },
                    ]}
                    style={pickerSelectStyles}
                    value={listingType}
                    placeholder={{ label: 'Select Listing Type', value: null }}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Farmer ID</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={farmerID}
                    onChangeText={setFarmerID}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Farmer Name</Text>
                <TextInput
                    style={styles.input}
                    value={farmerName}
                    onChangeText={setFarmerName}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Crop Name</Text>
                <TextInput
                    style={styles.input}
                    value={cropName}
                    onChangeText={setCropName}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Crop Type</Text>
                <RNPickerSelect
                    onValueChange={(value) => setCropType(value)}
                    items={[
                        { label: 'Vegetable', value: 'Vegetable' },
                        { label: 'Fruit', value: 'Fruit' },
                        { label: 'Dairy', value: 'Dairy' },
                    ]}
                    style={pickerSelectStyles}
                    value={cropType}
                    placeholder={{ label: 'Select Crop Type', value: null }}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Quantity ({listingType === 'Retail' ? 'kg' : 'q'})</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={setQuantity}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Date Of Harvest</Text>
                <TextInput
                    style={styles.input}
                    value={harvestDate}
                    onChangeText={setHarvestDate}
                    placeholder="YYYY-MM-DD"
                />
            </View>

            <View style={styles.inputGroup}
                className={
                    `flex gap-1`
                }
            >
                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Area"
                    value={location.area}
                    onChangeText={(text) => setLocation({ ...location, area: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="District"
                    value={location.district}
                    onChangeText={(text) => setLocation({ ...location, district: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="State"
                    value={location.state}
                    onChangeText={(text) => setLocation({ ...location, state: text })}
                />
            </View>

            {listingType === 'Retail' && (
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />
                </View>
            )}

            {listingType === 'Wholesale' && (
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Starting Bid</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={startingBid}
                        onChangeText={setStartingBid}
                    />
                </View>
            )}

            <View>
                <Pressable
                    onPress={handleSubmit}
                    className="
                        bg-yellow-100 border-black rounded-3xl
                        flex flex-row justify-center
                        items-center mt-8 mb-4 p-2 
                        active:bg-yellow-200 active:shadow-lg active:ring-2 active:ring-yellow-300
                    "
                    style={{
                        borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: 0.5,
                        shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 1, shadowRadius: 2, elevation: 5
                    }}
                >
                    <Text >Done</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    },
};

export default ListingForm;
