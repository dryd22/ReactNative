import * as React from 'react';
import { Button, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HappyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lime' }}>
      <Image source={{uri: 'https://c8.alamy.com/comp/2J0Y4NK/happy-emoji-emoticon-showing-double-thumbs-up-like-2J0Y4NK.jpg'}}  
       style={{width: 200, height: 200}} />
    </View>
  );
}

function SadScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan'}}>
      <Image source={{uri: 'https://c8.alamy.com/comp/2BWXBWX/sad-emoji-emoticon-crying-bitterly-2BWXBWX.jpg'}} style = {{width: 200, height: 200}} />
    </View>
  );
}
function HowdyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
      <Image source={{uri: 'https://thumbs.dreamstime.com/b/smiling-cowboy-emoticon-vector-design-90543422.jpg'}}
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
