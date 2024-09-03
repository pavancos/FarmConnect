import { StyleSheet, Text, View, Button, Pressable, Alert, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import React from 'react';
import { useState, useEffect } from 'react';

export default RetailProduct = ({ crop }) => {
    const TomatoPNG = require("../../assets/vegetables/tomato.jpg");
    return (
        <View
            key={crop.id}
            className=" border border-1  w-full py-1 rounded-md flex flex-row gap-2 items-center"
            style={{
                backgroundColor: '#8b987e', margin: 0, padding: 0,
                borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: 0.5,
                shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8, shadowRadius: 2, elevation: 5
            }}
        >
            <View
                className="h-full flex flex-row justify-center items-center p-0 m-0"
                style={{
                    margin: 0
                }}
            >
                <Image
                    source={TomatoPNG}
                    className="rounded-lg"
                    style={{
                        width: 150, height: 150, borderRadius: 10
                    }}
                />
            </View>
            <View className="h-full">

                <View className="flex flex-row gap-1">
                    {/* <Text className="font-bold text-white">{crop.Quantity}</Text> */}
                    <Text className="font-bold text-2xl text-white">{crop.CropName}</Text>
                </View>
                <View className="flex flex-col gap-1">
                    <Text className="font-light text-md text-white">Quantity: {crop.Quantity}</Text>
                    <Text className="font-light text-md text-white">Type: {crop.CropType}</Text>
                    <Text className="font-light text-md text-white">Type of Listing: {crop.TypeOfListing}</Text>
                    <Text className="font-semibold text-md text-white">
                        {
                            crop.TypeOfListing === 'Retail' ? `Price: ₹${crop.Price}` : `Starting Bid: ₹${crop.StartingBid}`
                        }
                    </Text>
                    <Pressable
                        className="bg-green-500 p-2 rounded-lg flex flex-row justify-center items-center
                        border border-1
                        active:bg-green-700 active:shadow-lg active:ring-2 active:ring-green-300
                        "
                        style={{
                            borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: 0.5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 2, height: 2 },
                            shadowOpacity: 1, shadowRadius: 2, elevation: 5
                        }}
                    >
                        <Text>
                            Add to Cart
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}


