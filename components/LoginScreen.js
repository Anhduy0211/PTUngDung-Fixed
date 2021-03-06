
import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground, TouchableHighlight,Platform } from 'react-native';

import * as Animatable from 'react-native-animatable';
export const isAndroid = () => Platform.OS === 'android';
export const isIOS = () => Platform.OS === 'ios';
import * as Google from 'expo-google-app-auth';
const Login=(props)=> {

  const SignInWithGoogle =  () => {
       Google.logInAsync({
              clientId: isAndroid() ? '242605181936-8h6mavod7qdrq9c5o7tlck9aonh38itf.apps.googleusercontent.com': isIOS()?'242605181936-8n0kf6qp1t6mca6cnl0glc8kml601c4s.apps.googleusercontent.com' :false,
              scopes: ['profile', 'email'],
          })
          // .then(data => console.log(data))
          .then(data=>props.navigation.navigate("MainScreen",{data:data}))
          .catch(e=>console.log(e))
  }
      return (
        
             <View style={styles.container} >
              
            <ImageBackground source={require('./images/question.gif')} style={styles.image}>
            <Animatable.View animation="fadeInDown" duration={1000} delay={1000}>
              <View style={{width:'50%',alignItems:'center',textAlign:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:30,marginBottom:30}}>MRio</Text>
              <Text style={{fontWeight:'bold'}}>JOIN WITH 10 MILLIONS PLAYER ENJOYED IN THE WORLD</Text>
              <TouchableHighlight style={styles.login}
                  onPress={SignInWithGoogle}
                  underlayColor='#fff' >
              <Text style={styles.loginstyleButton}>Login with Google</Text>
              </TouchableHighlight>    

            </View>
            </Animatable.View>
            </ImageBackground>
           
          </View>
        
         
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  image: {
    
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  login:{
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  loginstyleButton:{
    paddingTop:15,
    fontWeight:'bold',
    backgroundColor:'#e77063',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    textAlign:'center',
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'center',
    height:50,
    width:200
  }

});



export default Login;
