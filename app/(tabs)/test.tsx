import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import UploadImage from '@/components/UploadImage';

import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function TabThreeScreen() {
  const [data, setData] = useState('');

  // useFocusEffect(() => {
  //   console.log("send request")
  //   // Make an API call to the Gin backend
  //   // axios.get('http://192.168.0.100:8080/ping')
  //   //   .then(response => {
  //   //     setData(response.data.message);  // Set the response message in state
  //   //   })
  //   //   .catch(error => {
  //   //     console.error('Error fetching data:', error);
  //   //   });

  //   fetch('http://192.168.0.100:8080/ping', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(response => response.json())
  //   .then(json => {
  //     console.log(json)
  //     setData(json.message);  // Set the response message in state
  //   })
  // });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">test</ThemedText>
      </ThemedView>
      {/* <ThemedText>Response from Backend: {data}</ThemedText> */}
      <UploadImage></UploadImage>
      
    </ParallaxScrollView>
  );
}



const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
