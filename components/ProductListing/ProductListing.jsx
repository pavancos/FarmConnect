import { StyleSheet, Text, View, Button, Pressable, Alert, Image } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import RetailProduct from '../RetailProduct/RetailProduct';
import WholesaleProduct from '../WholesaleProduct/WholesaleProduct';

const ProductListing = () => {
  const [cropListing, setCropListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch('https://8p0ch0bz-3000.inc1.devtunnels.ms/getListings');
      const json = await response.json();
      setCropListing(json.cropListings);
    } catch (error) {
      console.error(error," ",error.stack);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(isClicked){
      fetchData();
    }
    setIsClicked(false);
  })



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
      <View>
        <Pressable
          onPress={()=>{
            setIsClicked(true);
          }}
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
          <Text >Update Page</Text>
        </Pressable>
      </View>
      <View className="flex flex-col items-center gap-4 w-full ">
        {cropListing.map((crop, index) => {
          if (crop.TypeOfListing === 'Retail') {
            return (
              <View
                className="w-full mx-auto"
                key={crop._id + index}
              >
                <RetailProduct crop={crop} />
              </View>
            )
          } else {
            return (
              <View
                className="w-full mx-auto"
                key={crop._id + index}
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