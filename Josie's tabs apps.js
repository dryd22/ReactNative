import * as React from 'react';
import { Button, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HappyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lime' }}>
      <Image source={{uri: 'https://media.giphy.com/media/QWvra259h4LCvdJnxP/giphy.gif'}}  
       style={{width: 200, height: 200}} />
    </View>
  );
}

function SadScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan'}}>
      <Image source={{uri: 'https://media2.giphy.com/media/tMnVRbvYiP8jala5Hg/200.webp?cid=ecf05e475kcj4qbkthweks29exikp6rqaaidgjhuvupbng27&rid=200.webp&ct=g'}} style = {{width: 200, height: 200}} />
    </View>
  );
}
function HowdyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
      <Image source={{uri: 'https://media1.giphy.com/media/Ww26UTo6jq36WnRl5l/giphy.gif?cid=ecf05e47t50hd56z071oav2xdyb3qtytimch77uqtidn2c46&rid=giphy.gif&ct=g'}}
        style = {{width: 200, height: 200}}/>
    </View>
  );
}
const HappyStack = createNativeStackNavigator();

function HappyStackScreen() {
  return (
    <HappyStack.Navigator>
      <HappyStack.Screen name="Happy" component={HappyScreen} />
    </HappyStack.Navigator>
  );
}

const SadStack = createNativeStackNavigator();

function SadStackScreen() {
  return (
    <SadStack.Navigator>
      <SadStack.Screen name="Sad" component={SadScreen} />
    </SadStack.Navigator>
  );
}
const HowdyStack = createNativeStackNavigator();

function HowdyStackScreen() {
  return (
    <HowdyStack.Navigator>
      <HowdyStack.Screen name="Howdy" component={HowdyScreen} />
    </HowdyStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Happy" component={HappyStackScreen} />
        <Tab.Screen name="Howdy" component={HowdyStackScreen} />
        <Tab.Screen name="Sad" component={SadStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
