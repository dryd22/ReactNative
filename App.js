/**
Button test code with returned messages to the screen user for a survey test.
1/28/2023
Andrew Gull using react native in expo environment. i OS aprpeas to color font rather than button.
**/
import React, { Component } from 'react';  
import { ImageBackground, Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';  
 
const image = { uri: "https://pics.me.me/thumb_take-our-survey-right-meow-memecrunch-com-cat-survey-50110191.png" };  


 
export default class ButtonBasics extends Component {   
    render() {  
        return (  
            <View style={styles.container}> 
<ImageBackground source={image} resizeMode="contain" style={styles.image}>
      <Text style={styles.text}>It's Survey Time</Text>
    </ImageBackground>			
	 
                <View style={styles.buttonGroup}>  
                    <Button  
                        onPress={this.onPressButton}
	    
                        title=" Happy " 
                        color="#33cc33"
			onPress={() => Alert.alert('FANTASTIC!')}   
                    />  
                    <Button  
                        onPress={this.onPressButton}  
                        title="  Ok  "  
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
		marginBottom: 20,
		marginTop: 50,
        backgroundColor:"#000033",  
        justifyContent: 'center',	
    },
	image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
	  
    color: "white",
    fontSize: 50,
    lineHeight: 52,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000033"
  },
	
    
    buttonGroup: {  
        margin: 20,
		flexDirection: 'row', 
		justifyContent: 'space-between'  
    }  
});


