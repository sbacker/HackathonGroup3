/*
11/21/2021
Group: 3
Created By: Sam Backer, Eli Coopersmith, Maxx Kronisch, June Tejada 
*/

import { func } from 'prop-types';
import React from 'react';
import {Alert, ImageBackground, Image, StyleSheet, Text, View, ScrollView,Button } from 'react-native';


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

const menuIcon = {
  uri: 'http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png',
  width: 40,
  height: 40
}

const PersonalSchedule = () => (
  <ImageBackground source={BackLogo} style={{width: '100%', height: '100%'}}>
  <View>
    <Text style={styles.title}>Edit Schedule</Text>
    <View style = {styles.container}>
   
     <Button onPress={() => {}} title="Add Event" />
     
    </View>  
     <View style = {styles.container}>
     <Button onPress={() => {}} title="Delete Event" />
     </View>
   </View>  
   </ImageBackground>
   
 
);


const Schedule = () => (
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

const Event = () => (
  <ImageBackground source={BackLogo} style={{width: '100%', height: '100%'}}>
  <View style={{flex: 1}}>
  <Text style={styles.title}>Mvent</Text>
  <Button
      title = "Add to Schedule"
      color = "#A41D36"
      onPress = {<Schedule/>}
    />  
    <Button
      title = "Schedule"
      color = "#A41D36"
      onPress = {<PersonalSchedule/>}
    />  

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

     <View style={styles.container}>
       <Text style={styles.event}>Big Band </Text>
       <View style={styles.fixToText}>
         <Button
            title="     ✓     "
            color="#46AA2B"
            onPress={Add}
          />
          <Button
            title="     x     "
            color = "#D32027"
            onPress={Remove}
          />
       </View>
     </View>
   
   <View style={styles.container}>
     <Text style={styles.event}>DnD </Text>
     <View style={styles.fixToText}>
          <Button
            title="     ✓     "
            color="#46AA2B"
            onPress={Add}
          />
          <Button
            title="     x     "
            color = "#D32027"
            onPress={Remove}
          />
     </View>
   </View>

   <View style={styles.container}>
     <Text style={styles.event}>Comp Sci Club Meeting </Text>
     <View style={styles.fixToText}>
          <Button
            title="     ✓     "
            color="#46AA2B"
            onPress={Add}
          />
          <Button
            title="     x     "
            color = "#D32027"
            onPress={Remove}
          />
       </View>
   </View>

   <View style={styles.container}>
     <Text style={styles.event}>Learning About Buttons </Text>
     <View style={styles.fixToText}>
          <Button
            title="     ✓     "
            color="#46AA2B"
            onPress={Add}
          />
          <Button
            title="     x     "
            color = "#D32027"
            onPress={Remove}
          />
       </View>
   </View>

   <View style={styles.container}>
     <Text style={styles.event}>Hackathon</Text>
     <View style={styles.fixToText}>
          <Button
            title="     ✓     "
            color="#46AA2B"
            onPress={Add}
          />
          <Button
            title="     x     "
            color = "#D32027"
            onPress={Remove}
          />
       </View>
   </View>

   <View style={styles.container}>
     <Text style={styles.event}>Pizza Party With Dragoonius#6547 </Text>
     <View style={styles.fixToText}>
          <Button
            title="     ✓     "
            color="#46AA2B"
            onPress={Add}
          />
          <Button
            title="     x     "
            color = "#D32027"
            onPress={Remove}
          />
       </View>
   </View>

   
   </ScrollView>
   </View>
  </ImageBackground>

);

function Add()
{
  alert("Event added to schedule.")
}

function Remove()
{
  alert("Event removed.")
}

const App = () => 
( 
  <View>
    <Event />
    <Schedule/>
  </View>

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
    justifyContent: 'space-evenly',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#A41e34',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});

export default Event;