/**
Button test code with returned messages to the screen user for a survey test.
1/28/2023
Andrew Gull using react native in expo environment.
**/
import React, { Component } from 'react';  
import { ImageBackground, Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';  
 
const image = { uri: "https://reactjs.org/logo-og.png" };  
//attempt to add background image
 const App = () => (
  <View style={styles2.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles2.image}>
      <Text style={styles2.text}>Survey</Text>
    </ImageBackground>
  </View>
);
 
export default class ButtonBasics extends Component {   
    render() {  
        return (  
            <View style={styles.container}>  
	 
                <View style={styles.buttonGroup}>  
                    <Button  
                        onPress={this.onPressButton}
	    
                        title="Happy" 
                        color="#33cc33"
			onPress={() => Alert.alert('FANTASTIC!')}   
                    />  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Ok"  
                        color="#9ae59a"
			onPress={() => Alert.alert('Nice')}     
                    />  
               
                    <Button  
                        onPress={this.onPressButton}  
                        title="Disappointed"  
                        color="#ffb3b3"
			onPress={() => Alert.alert('Sorry')}     
                    />  
               
                    <Button  
                        onPress={this.onPressButton}  
                        title="Terrible!" 
						color="#ff0000"						
			onPress={() => Alert.alert('Forgive Us')}     
                    />  
                   
                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 2,
	    //adds white to top and bottom margins.
		marginBottom: 20,
		marginTop: 50,
        backgroundColor:"#000033",  
        justifyContent: 'center', 
		
    },  

    buttonGroup: {  
        margin:100,
		width: 150,
		height: 150,
		
		
    },  
    buttonGroup: {  
        margin: 50,
		//flex:1,		
        flexDirection: 'row', 
		flexWrap: 'wrap',		
        justifyContent: 'space-between'  
    }  
})
  const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 3,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
