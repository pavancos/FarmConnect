import { StyleSheet, Text, View, Button, Pressable, Alert, ScrollView } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import ProductListing from '../ProductListing/ProductListing';

const Home = () => {

  const [isTheButtonPressed, setIsTheButtonPressed] = useState(false);

  function onPress() {
    if (isTheButtonPressed) {
      setIsTheButtonPressed(false);
    } else {
      setIsTheButtonPressed(true);
    }
  }

  return (
    <ScrollView  className='h-screen w-full bg-yellow-50 pt-3 pb-6'>
      <View className="bg-yellow-50  flex flex-1 flex-col gap-2 items-center mb-40">
        <View className="w-96  rounded-lg flex flex-col items-center p-2 py-4 border border-1"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', borderColor: 'rgba(0, 0, 0, 0.1)'}}
        >
          <View>
            <Text className="text-black font-bold text-xl text-center mt-4">Welcome to FarmConnect</Text>
          </View>
          <View>
            <Text className="text-black font-light text-md text-center mt-1">One Stop Platform for all Market Access</Text>
          </View>

          <View >
            <Pressable
              onPress={onPress}
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
              <Text >Go to Listing Page</Text>
            </Pressable>
          </View>

        </View>

        {
          isTheButtonPressed &&
          <View 
            className="
              w-96 rounded-lg flex flex-col items-center p-2 border border-1
            "
            style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', borderColor: 'rgba(0, 0, 0, 0.1)'}}
          >
            <ProductListing isTheButtonPressed={isTheButtonPressed} ></ProductListing>
          </View>

        }
      </View>

    </ScrollView>
  );
}

export default Home;