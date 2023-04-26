import React from 'react'
import { useState, useEffect } from 'react'
import { Text, Image, View, Pressable, Alert, StyleSheet } from 'react-native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

  
const Col = ({ numRows, children }) => {
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

function HomeScreen({ navigation }) {
  return (
  
      <Background>
	   
      <Logo />
	  <Header>Welcome to 6C Vinyl</Header>
      <Paragraph>
        Your Vinyl collecting journey starts now. Select any of the tabs below to get started!!
		
      </Paragraph>
	  <Button style={{width: 150, height: 50}}
        mode="outlined"
		title ="Log Out"
		color = "#420420"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
</Background>
  );
}

function SettingsScreen() {
  return (
    <Background >
      <Paragraph>Settings!</Paragraph>
	  <Image source={{uri: 'https://media.giphy.com/media/z6EG2su1f5jOTourNL/giphy.gif',}} style={{ width: 100, height: 100}}/>
    </Background>
  );
}

function CollectionsScreen() {
  return (
    <Background >
      <Paragraph>Here is what you have in your collection right now! Add new Items</Paragraph>
    </Background>
  );
}

function MainCatalogScreen () {
  return  (
    <Background >
	 
	<Header>Catalog Contents</Header>
	<View style={styles.app}>
      <Row>
        <Col numRows={2}>
         <>
         <Image source={require('../../src/assets/Beyonce.jpg')}  style={{ width: 200, height: 200}}/>
         </>
        </Col>
        <Col numRows={2}>
        <>
       <Image source={require('../../src/assets/Beetles.jpg')}  style={{ width: 200, height: 200}}/>
             </>
        </Col>
      </Row>
      <Row>
        <Col numRows={2}>
         <>
                  <Image source={require('../../src/assets/Pdiddy.jpg')} style={{ width: 200, height: 200}}/>
		</>
        </Col>
        <Col numRows={2}>         
      <>        
        <Image source={require('../../src/assets/KMFDM.jpg')}  style={{ width: 200, height: 200}}/>
         </>
        </Col>
      </Row>
	  <Row>
        <Col numRows={2}>
         <>
                  <Image source={require('../../src/assets/VanHalen.jpg')} style={{ width: 200, height: 200}}/>
		</>
        </Col>
        <Col numRows={2}>         
      <>        
        <Image source={require('../../src/assets/WHAM.jpg')}  style={{ width: 200, height: 200}}/>
         </>
        </Col>
      </Row>
    </View>
 
   
    </Background>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Dashboard({ navigation }) {
  return (
 <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'cog'
              : 'cog-outline';
              
            }else if (route.name === 'Main Catalog') {
              iconName = focused 
              ? 'albums'
              : 'albums-outline';
              
            }else if (route.name === 'Collection') {
              iconName = focused 
              ? 'people'
              : 'people-outline';
              
            }

           
            return <Ionicons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#ff71ce',
          tabBarInactiveTintColor: '#595959',
        })}
      >
    
  
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Main Catalog" component={MainCatalogScreen} />
        <Tab.Screen name="Collection" component={CollectionsScreen} />
      </Tab.Navigator>
)}

const styles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    height: 1000,
    backgroundColor: "grey"
  },

  row: {
    flexDirection: "row"
  },
  "1col":  {
    backgroundColor:  "grey",
    borderColor:  "#fff",
    borderWidth:  1,
    flex:  1
  },
  "2col":  {
    backgroundColor:  "grey",
    borderColor:  "black",
    borderWidth:  1,
    flex:  2
  },
  "3col":  {
    backgroundColor:  "grey",
    borderColor:  "#fff",
    borderWidth:  1,
    flex:  3
  },
  "4col":  {
    flex:  4
  },
   container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


});