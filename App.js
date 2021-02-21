import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import DetailPage from './pages/DetailPages'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  
  // return (<ScrollView style={styles.container}>
  //   <Text style={styles.title}>제목</Text>
  // </ScrollView>);
    return (<DetailPage/>);

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop:50,
    margin:50,
  }
})