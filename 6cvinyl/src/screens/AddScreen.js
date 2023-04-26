import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
export default function AddScreen({ navigation }) { 
    return ( 
        <Background>
        <Header>Add a Record</Header> 
        <TextInput>          
        label = "Name"      
        </TextInput>   
        <TextInput>   
        label = "Artist/Band" 
        </TextInput>    
        <TextInput>    
        label = "Genre"    
        </TextInput>    
        <Button       
        mode="contained"     
        onPress={() => navigation.navigate('Dashboard')}>   
        Add</Button>   
        </Background>  
)}