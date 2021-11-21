import React from "react";
import { Image, StyleSheet, Text, View, Button, Alert } from "react-native";
import {Banner} from 'react-native-paper';

const Separator = () => (
  <View style={styles.separator} />
);
var count = 0

const Event = () => (
  <View style={styles.container}>
    <Text style={styles.event}>{count} </Text>
    <View style={styles.fixToText}>
        <Button
          title="     ✓     "
          color="#46AA2B"
          onPress={() => Alert.alert(<Event />)}
        />
        <Button
          title="     x     "
          color = "#D32027"
          onPress={
            () => Alert.alert('Right button pressed')
            
          }
        />
      </View>
  </View>
);
const App = () => 

( 
  
  <View styles={styles.container}>
    <Event />
    <separator />
    <Event />
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
    justifyContent: 'space-evenly',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#A41e34',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
