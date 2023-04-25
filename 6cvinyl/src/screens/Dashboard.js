import React from 'react'
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
    </Background>
  );
}
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
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

