import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import * as webBrowser from 'expo-web-browser'
import * as google from 'expo-auth-session/providers/google'
import axios from 'axios'
//web: 59045300049-q41hk0a5130f1s5cagsjkqk9jk2gniap.apps.googleusercontent.com
//ios: 59045300049-2krv3gobllv0i32vmbl0pkd3vpp45l99.apps.googleusercontent.com
//android: 59045300049-t654e5tdf62tf2qfihq47m95ib404vle.apps.googleusercontent.com

webBrowser.maybeCompleteAuthSession();
export default function LoginScreen({ navigation }) {
  
    const [accessToken, setAccessToken] = React.useState(null);
      const [user, setUser] = React.useState(null);
      const [request, response, promptAsync] = google.useIdTokenAuthRequest({
        clientId: "59045300049-q41hk0a5130f1s5cagsjkqk9jk2gniap.apps.googleusercontent.com",
        IosClientId: "59045300049-2krv3gobllv0i32vmbl0pkd3vpp45l99.apps.googleusercontent.com",
        AndroidClientId: "59045300049-t654e5tdf62tf2qfihq47m95ib404vle.apps.googleusercontent.com"
      });
      React.useEffect(() => {
        if(response?. type == "success"){
          setAccessToken(response.authentication.accessToken);
          accessToken && fetchUserInfo();
        }
      }, [response, accessToken]);
      async function fetchUserInfo(){
        let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: {
            authorization: 'Bearer ${accessToken}'}
        })
        const useInfo = await response.json();
        setUser(useInfo);
      }
  
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const axios = require("axios");

/*const getUser = async () => {
	try{
		const response = await axios.get ('http://localhost:3000/users');
		setUsers(response.data);
	}catch (err) {
		if (err.response){
			console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
		  console.log(response.data);
		}
	}
}*/

 function onLoginPressed () {
//getUser();

const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
	
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
    
  /*  }else{
		userFound = false;
		for(let i = 0; i < data.length; i++){
         if(email == data[i].(UserEmail){
            console.log("Username found at index ", i);
            userFound=true;
            if(userFound){
              // validate password
              if(password == data[i].UserPassword){
                // login succesful
                console.log("Login succesful as user: ", UserEmail);
                //bring user to home screen
                HomeNav();
              }else{
                setText("Incorrect email or password");
                alert(errorText);
                console.log("Invalid password for user: ", UserEmail);
              }
          }
          
        } if (!userFound){
            setText("Incorrect email or password");
            alert(errorText);*/
			return
        }

	  navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
const ShowUserInfo = () => {
  if(user) {
    return(
      <view style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>welcome</Text>
      <image source = {{uri: user.picture}} style = {{width: 100, height: 100, borderRadius: 50}}/>
      <Text style= {{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
      </view>
    )
  }
}
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.container}>
        {user && <ShowUserInfo />}
        {user === null &&
        <>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          >
          <Image source={require("../assets/google-signin.png")} style={{width: 300, height: 40} }/>
          </TouchableOpacity>
          </>
          }
      </View>
      <View style={styles.row}>
	<Text style={styles.link}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.forgot}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.prime2,
  },
})
