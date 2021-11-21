import { func } from 'prop-types';
import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, ScrollView,Button } from 'react-native';

const Mlogo = {
  uri: 'https://www.muhlenberg.edu/media/muhlenbergedu/siteassets/images/logo_letter_red.png',
  width: 64,
  height: 64
};

const BackLogo = {
  uri: 'https://www.muhlenberg.edu/media/contentassets/images/homepage/mediagallery/springcampusimage.jpg',
  width: 64,
  height: 64
}

const concertlLogo = {
  uri: 'https://www.theedgesusu.co.uk/wp-content/uploads/2020/09/Webp.net-resizeimage-17.jpg',
  width: 410,
  height: 200
};

const dndLogo = {
  uri: 'https://www.gamersdecide.com/sites/default/files/styles/news_images/public/best-background-for-every-class-main_1.jpg',
  width: 410,
  height: 200
}


let backgroundExist = false
let backgroundImage = concertlLogo
function backgroundCheck(backgroundExist)
{
  if(!backgroundExist)
  {
    return 
  }
  else 
  {
    return backgroundExist = true
  }
}

const App = () => (
  <ImageBackground source={BackLogo} style={{width: '100%', height: '100%'}}>
  <View style={{flex: 1}}>
  <Text style={styles.title}>Schedule</Text>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.event}>Monday </Text>
  

    </View>
    <View style={styles.container}>
      <Text style={styles.event}>Tuesday </Text>
 


    </View>
    <View style={styles.container}>
      <Text style={styles.event}>Wednesday </Text>



    </View>
    <View style={styles.container}>
      <Text style={styles.event}>Thursday </Text>
 


    </View>
    <View style={styles.container}>
      <Text style={styles.event}>Friday </Text>
    </View>



    <View style={styles.container}>
      <Text style={styles.event}>Saturday </Text>
    </View>

    <View style={styles.container}>
      <Text style={styles.event}>Sunday </Text>
    </View>



    </ScrollView>
  </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 24, //24
    //backgroundColor: "#36454F"
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
    paddingVertical: 20,
    borderWidth: 0,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#20232a",
    color: "#A41D36",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
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


