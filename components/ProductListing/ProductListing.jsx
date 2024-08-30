import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Alert, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import React from 'react';
import { useState, useEffect } from 'react';

const ProductListing = ({ isTheButtonPressed }) => {
  const [cropListing, setCropListing] = useState([]);
  const [loading, setLoading] = useState(true);

  const TomatoPNG = require("../../assets/vegetables/tomato.jpg");

  const fetchTheCropListing = async () => {
    try {
      let res = await fetch('http://localhost:3000/getListings');
      let data = await res.json();
      console.log(data.cropListings);
      setCropListing(data.cropListings);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    fetch('https://8p0ch0bz-3000.inc1.devtunnels.ms/getListings')
      .then((response) => response.json())
      .then((json) => setCropListing(json.cropListings))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View className="w-full flex flex-col items-center ">
      <Text className="font-bold text-2xl text-white mb-2">Retail Listing</Text>
      <View className="flex flex-col items-center gap-4 w-full mb-8">
        {cropListing.map((crop) => {
          return (
            <View
              key={crop.id}
              className="bg-green-50 border border-1 border-black p-5 w-full my-2 rounded-md flex flex-row gap-2 items-center"
            >
              <View>
                <Image source={TomatoPNG} style={{ width: 100, height: 100 }} />
              </View>
              <View className="flex flex-row gap-1">
                <Text className="font-bold text-xl text-black">{crop.CropName}</Text>
              </View>
              <Text className="font-bold text-black">{crop.Quantity}</Text>
            </View>
          );
        })}
      </View>
    </View >
  );
};

export default ProductListing;