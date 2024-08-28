import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import utilities from '../../tailwind.json';
import React from 'react';
import { useState, useEffect } from 'react';
import RetailListingForm from '../RetailListingForm/RetailListingForm';

const Home = () => {

  const [isTheButtonPressed, setIsTheButtonPressed] = useState(false);

  function onPress(){
    if(isTheButtonPressed){
      setIsTheButtonPressed(false);
    }else{
      setIsTheButtonPressed(true);
    }
  }

  return (
    <View className='h-screen w-full flex flex-col items-center gap-2'>
      <View className="bg-green-600 w-full pb-2">
        <Text className="text-white font-bold text-2xl text-center shadow shadow-black">FarmConnect</Text>
      </View>

      <View className="w-96 bg-neutral-700 rounded-lg flex flex-col items-center p-2 py-4">
        <View>
          <Text className="text-white font-bold text-xl text-center mt-4">Welcome to FarmConnect</Text>
        </View>
        <View>
          <Text className="text-white font-light text-md text-center mt-1">One Stop Platform for all Market Access</Text>
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
          >
            <Text >Go to Listing Page</Text>
          </Pressable>
        </View>

      </View>

      {
        isTheButtonPressed &&
        <View className="w-96 bg-neutral-700 rounded-lg flex flex-col items-center p-2 py-4">
          <RetailListingForm isTheButtonPressed={isTheButtonPressed} ></RetailListingForm>
        </View> 

      }



      

    </View>

  );
}

export default Home