/**
Button test code with returned messages to the screen user for a survey test.
1/28/2023
Andrew Gull using react native in expo environment.
**/
import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
 
  

  
export default class ButtonBasics extends Component {  
    onPressButton() {  
        //Alert.alert('You clicked the button!')  
    }  
  
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
        flex: 1,
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
		//flex:4,		
        flexDirection: 'row', 
		flexWrap: 'wrap',		
        justifyContent: 'space-between'  
    }  
})  