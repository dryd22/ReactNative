import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
  return (
      <Background>
       <Button style={{width: 150, height: 40}}
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
      <Logo />
      <Header>Welcome to 6C Vinyl</Header>
      <Paragraph>
        Your Vinyl collecting journey starts now. Select any of the tabs below to get started!!
      </Paragraph>
</Background>
  );
}

function SettingsScreen() {
  return (
    <Background >
      <Paragraph>Settings!</Paragraph>
    </Background>
  );
}

function CollectionsScreen() {
  return (
    <Background >
      <Paragraph>Here is what you have in your collection right now!</Paragraph>
    </Background>
  );
}

function MainCatalogScreen() {
  return (
    <Background >
      <Paragraph>Main Catalog!</Paragraph>
    </Background>
  );
}

const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
  return (
 
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Main Catalog" component={MainCatalogScreen} />
        <Tab.Screen name="Collections" component={CollectionsScreen} />
      </Tab.Navigator>
  )
}
