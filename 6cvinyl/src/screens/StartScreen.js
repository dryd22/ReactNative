import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import LottieView from 'lottie-react-native'



export default function StartScreen({ navigation }) {
  return (
    <Background>
	
      <LottieView source={require('../../src/assets/lottie/88944-vinyl-loading.json')} 
      style={{ width: '80%', aspectRatio: 1 }} autoPlay loop />
      <Header>6c Vinyl</Header>
      <Paragraph>
Login or sign up to start your vinyl collecting journey</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
