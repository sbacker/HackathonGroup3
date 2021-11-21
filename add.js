import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};



const App = () => (
   <View>
     <Text style={styles.title}>Mvent</Text>
     <View style = {styles.container}>
    
      <Button onPress={() => {}} title="Add Event" />
      
     </View>  
      <View style = {styles.container}>
      <Button onPress={() => {}} title="Delete Event" />
      </View>
    </View>  
    
  
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#373a36"
  },
  title: {
    marginTop: 0,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 0,
    backgroundColor: "#A41D36",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  event: {
    marginTop: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#a2aaad",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
 
});


export default App;
