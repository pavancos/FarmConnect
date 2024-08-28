import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import React from 'react';
import { useState, useEffect } from 'react';


const RetailListingForm = ({ isTheButtonPressed }) => {
  const [cropListing, setCropListing] = useState([]);



  const fetchTheCropListing = async () => {
    try {
      let res = await fetch('http://localhost:3000/getListings');
      let data = await res.json();
      console.log(data.cropListings);
      setCropListing(data);
      return true;

    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /*
  fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
   */

  useEffect(() => {
    fetch('https://8p0ch0bz-3000.inc1.devtunnels.ms/getListings')
      .then((response) => response.json())
      .then((json) => setCropListing(json.cropListings))
      .catch((error) => console.error(error))
  }, []);





  return (
    <>
      <View className="flex flex-col items-center gap-4 w-full">
        {
          cropListing.map((crop, index) => {
            return (
              <View
                key={index}
                className="bg-green-50 border border-1
                    border-black p-5 w-full my-2 
                    rounded-md flex flex-row gap-2
                    items-center
                 "
              >
                <View
                  className="flex flex-row gap-1"
                >
                  <Text className="font-bold text-xl text-black">{crop.CropName}</Text>
                </View>

                
                <Text className="font-bold text-black">{crop.Quantity}</Text>
              </View>
            );
          })
        }
      </View>


    </>

  )
}

export default RetailListingForm
