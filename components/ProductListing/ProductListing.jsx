import { StyleSheet, Text, View, Button, Pressable, Alert, Image } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import RetailProduct from '../RetailProduct/RetailProduct';
import WholesaleProduct from '../WholesaleProduct/WholesaleProduct';

const ProductListing = () => {
  const [cropListing, setCropListing] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('https://8p0ch0bz-3000.inc1.devtunnels.ms/getListings')
      .then((response) => {
        return response.json();
      })
      .then((json) => setCropListing(json.cropListings))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View className="w-full flex flex-col items-center py-4 px-2 bg-yellow-50">
      <View className="flex flex-col items-center gap-4 w-full ">
        {cropListing.map((crop, index) => {
          if (crop.TypeOfListing === 'Retail') {
            return (
              <View
                className="w-full mx-auto"
                key={crop._id+index}
              >
                <RetailProduct  crop={crop} />
              </View>
            )
          } else {
            return (
              <View
                className="w-full mx-auto"
                key={crop._id+index}
              >
                <WholesaleProduct key={index} crop={crop} />
              </View>
            )
          }
        }
        )}
      </View>
    </View >
  );
};

export default ProductListing;