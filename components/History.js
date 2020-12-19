import React,{Component} from 'react';

import {Card, Icon,Image,Avatar} from 'react-native-elements';
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import All from "./home_child/All";
import Menu from "./home_child/Menu";
import Popular from "./home_child/Popular";

class RankingScreen extends Component{
    render(){
        return(    
          <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                source={require("./asset/header.png")}
                style={styles.imageBackground}
                resizeMode="contain"
                >
                    <Text style={styles.title}>HISTORY</Text>
                </ImageBackground>
            </View>
            <View style={styles.tabbar}>
              <ScrollableTabView
                initialPage={0}
                tabBarActiveTextColor="green"
                renderTabBar={() => <DefaultTabBar
                  underlineStyle={{
                    backgroundColor:'green'
                  }} />}
              >
                
                <Menu tabLabel="Player History"/>
                

              </ScrollableTabView>
            </View>
          </View>

        )
    }
}
export default RankingScreen;

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  header: {
    marginTop:20,
    position:'absolute'
  },
  tabbar: {
    flex:1,
    marginTop: width*0.3,
    paddingHorizontal:30
  },
  imageBackground: {
    width: width*0.4,
    height: width*0.4,
    alignItems:'center'
  },
  title: {
    color:'white',
    marginTop:25,
    fontWeight:'bold',
    fontSize:25
  }
});