import { StyleSheet, Text, View, Button, Pressable, Alert, Image, ScrollView } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import RetailProduct from '../RetailProduct/RetailProduct';
import WholesaleProduct from '../WholesaleProduct/WholesaleProduct';

const ProductListing = ({ isTheButtonPressed }) => {
  const [cropListing, setCropListing] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('https://8p0ch0bz-3000.inc1.devtunnels.ms/getListings')
      .then((response) => response.json())
      .then((json) => setCropListing(json.cropListings))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View className="w-full flex flex-col items-center h-screen">
        <Text className="font-bold text-2xl text-black mb-5">Retail Listing</Text>
        <View className="flex flex-col items-center gap-4 w-full ">
          {cropListing.map((crop, index) => {
            if (crop.TypeOfListing === 'Retail') {
              return (
                <View
                  className="w-full mx-auto"
                  key={crop._id + index}
                >
                  <RetailProduct key={crop._id + index} crop={crop} />
                </View>
              )
            } else {
              return (
                <View
                  className="w-full mx-auto"
                  key={crop._id + index}
                >
                  <WholesaleProduct key={crop._id + index} crop={crop} />
                </View>
              )
            }
          }
          )}
        </View>
      </View >
    </ScrollView>
  );
};

export default ProductListing;