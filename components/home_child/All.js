import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable';
var data = [
        {
            rank: "Rank 1",
            name:'Tony Stark',
            animation:'zoomInRight',
            image: require("../asset/ironman.jpg"),
            rating: 3,
            price: "Score: 13442"
        },
        {
            rank: "Rank 2",
            name:'Roger',
            animation:'zoomInLeft',
            image: require("../asset/captain.jpg"),
            rating: 5,
            price: "Score: 10015"
        },
        {
            rank: "Rank 3",
            name:'Banne',
            animation:'zoomInRight',
            image: require("../asset/hulk.jpg"),
            rating: 4,
            price: "Score: 7520"
        },
        {
            rank: "Rank 4",
            name:'Scarlet ',
            animation:'zoomInLeft',
            image: require("../asset/blackw.jpg"),
            rating: 2,
            price: "Score: 4312"
        },
        
        {
          rank: "Rank 5",
          animation:'zoomInRight',
          name:'Thor',
          image: require("../asset/thor.jpg"),
          rating: 5,
          price: "Score: 2313"
        },
        {
          rank: "Rank 6",
          name:'Peter Paker',
          animation:'zoomInLeft',
          image: require("../asset/spider.jpg"),
          rating: 5,
          price: "Score: 2100"
        },
        {
          rank: "Rank 7",
          name:'Hentai',
          animation:'zoomInLeft',
          image: require("../asset/bb.jpg"),
          rating: 5,
          price: "Score: 1434"
        },
        {
          rank: "Rank 8",
          name:'Doctor',
          animation:'zoomInLeft',
          image: require("../asset/doctrange.jpg"),
          rating: 5,
          price: "Score: 1266"
        },
        {
          rank: "Rank 9",
          name:'Em day',
          animation:'zoomInRight',
          image: require("../asset/animebb.jpg"),
          rating: 5,
          price: "Score: 784"
        },
        {
          rank: "Rank 10",
          name:'Captain Marvel',
          animation:'zoomInLeft',
          image: require("../asset/capmarvel.jpg"),
          rating: 5,
          price: "Score: 88"
        },

];

export default class All extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: data,
      data_temp: data,
      search: ''
    }
  }

  _rating(item){
      let rating = [];
      for(i=0;i<item;i++){
        rating.push(
          <Image 
            source={require("../asset/star.png")}
            style={{width:15, height:15, marginRight:3}}
            resizeMode="cover"
          />
        )
      }
      return rating;
  }

  renderItem = ({item}) => {
    return(
      <Animatable.View animation={item.animation} duration={2000} delay={800} >
        <LinearGradient 
        colors={['#009245', '#8cc631']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        style={styles.item}
        >
          <View style={styles.image_container}>
              <Image 
                source={item.image}
                style={styles.image}
              />
          </View>
          <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.price_container}>
                  <View style={styles.price}>
                      <Text style={styles.textPrice}>{item.rank}</Text>
                  </View>
              </View>
                
                
              <View style={styles.price_container}>
                  <View style={styles.price}>
                      <Text style={styles.textPrice}>{item.price}</Text>
                  </View>
              </View>
          </View>

        </LinearGradient>
        </Animatable.View>
    )
  }

  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{
          height:10
        }}
      />
    )
  }

  _search(text){
      let data = [];
      this.state.data_temp.map(function(value){
        if(value.name.indexOf(text) > -1){
          data.push(value);
        }
      });
      this.setState({
        data:data,
        search:text
      });
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.section}>
              <TextInput 
                placeholder="Search.."
                style={{ flex:1, marginLeft:10}}
                value={this.state.search}
                onChangeText={(text)=>this._search(text)}
              />
              <TouchableOpacity
              onPress={()=>this._search("")}
              style={{paddingHorizontal:10}}>
                <Ionicons 
                  name="ios-close"
                  color="gray"
                  size={20}
                />
              </TouchableOpacity>

          </View>
          <View style={styles.flatList}>
              <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
              />
          </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingBottom:5
  },
  flatList: {
    flex:1,
    marginTop:10
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10
  },
  image_container: {
    width: 90,
    height: 90
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10
  },
  content: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  rating: {
    marginTop:5,
    flexDirection:'row'
  },
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  price_container: {
    flexDirection:'row',
    marginTop:10
  },
  price: {
    backgroundColor:'white',
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:50
  },
  textPrice: {
    color:'green',
    fontWeight:'bold'
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10
  }
});
