import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import WebPage from './pages/WebPage'
import HesticaPage from './pages/HesticaPage'
import PethratonPage from './pages/PethratonPage'
import DetailPage from './pages/DetailPage'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  // return (<ScrollView style={styles.container}>
  //   <Text style={styles.title}>제목</Text>
  // </ScrollView>);
  // return (<DetailPage/>);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            //https://icons.expo.fyi/
            if      (route.name === 'Home')        iconName = 'home';
            else if (route.name === 'About')       iconName = 'hourglass';
            else if (route.name === 'Web')         iconName = 'browsers';
            else if (route.name === 'Hestica')     iconName = 'browsers';
            else if (route.name === 'Pethraton')   iconName = 'browsers';
            else if (route.name === 'Setting')     iconName = 'settings';
            return (<Ionicons name={iconName} size={size} color={color} />);
          }
        })}
          tabBarOptions = {{
          activeTintColor: '#99F',
          inactiveTintColor: 'gray',
        }}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={DetailPage} />
      <Tab.Screen name="Web" component={WebPage} />
      <Tab.Screen name="Hestica" component={HesticaPage} />
      <Tab.Screen name="Pethraton" component={PethratonPage} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 50,
    margin: 50,
  }
})