import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

export default class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data:[
        {
            type: '20-12-2020',
            color: '#39b54a',
            data:[
                {
                  name:'Thor',
                  image: require("../asset/thor.jpg"),
                },
                {
                  name:'Scarlet ',
                  image: require("../asset/blackw.jpg"),
                },
                {
                  name:'Banne',
                  image: require("../asset/hulk.jpg"),
                },
                {
                  name:'Tony Stark',
                  image: require("../asset/ironman.jpg"),
                }
            ]
        },

        {
            type: '19-12-2020',
            color: 'orange',
            data:[
                {
                  name:'Peter Paker',
                  image: require("../asset/spider.jpg"),
                },
                {
                  name:'Doctor',
                  image: require("../asset/doctrange.jpg"),
                },
                {
                  name:'Em day',
                  image: require("../asset/animebb.jpg"),
                },
                {
                  name:'Scarlet ',
                  image: require("../asset/blackw.jpg"),
                },
                {
                  name:'Tony Stark',
                  image: require("../asset/ironman.jpg"),
                },
                {
                  name:'Scarlet ',
                  image: require("../asset/blackw.jpg"),
                },
              ]
          },

        {
            type: '18-12-2020',
            color: 'red',
            data:[
              {
                name:'Scarlet ',
                image: require("../asset/blackw.jpg"),
              },
              {
                name:'Banne',
                image: require("../asset/hulk.jpg"),
              },
              {
                name:'Tony Stark',
                image: require("../asset/ironman.jpg"),
              }
            ]
        },

        {
          type: '17-12-2020',
          color: 'red',
          data:[
            {
              name:'Doctor',
              image: require("../asset/doctrange.jpg"),
            },
            {
              name:'Em day',
              image: require("../asset/animebb.jpg"),
            },
            {
              name:'Scarlet ',
              image: require("../asset/blackw.jpg"),
            },
            {
              name:'Tony Stark',
              image: require("../asset/ironman.jpg"),
            },
            {
              name:'Scarlet ',
              image: require("../asset/blackw.jpg"),
            },
          ]
      },
            {
              type: '16-12-2020',
              color: 'red',
              data:[
                {
                  name:'Em day',
                  image: require("../asset/animebb.jpg"),
                },
                {
                  name:'Captain Marvel',
                  image: require("../asset/capmarvel.jpg"),
                },
                {
                  name:'Scarlet ',
                  image: require("../asset/blackw.jpg"),
                },
                {
                  name:'Tony Stark',
                  image: require("../asset/ironman.jpg"),
                },
                {
                  name:'Scarlet ',
                  image: require("../asset/blackw.jpg"),
                },
              ]
          },
    ]
    }
  }

  renderItem_type = ({item}) => {
    return(
        <TouchableOpacity 
        
        style={styles.item_type}>
            <Image 
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>

    )
  }

  renderItem = ({item}) => {
    return(
      <View style={{flex:1}}>
          <Text style={[styles.type,{
            color: item.color
          }]}>{item.type}</Text>
          <View style={[styles.item,{
            backgroundColor:item.color
          }]}>
              <FlatList 
                data={item.data}
                renderItem={this.renderItem_type}
                keyExtractor={(item,index)=>index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.ItemSeparatorComponent_type}
              />
          </View>
      </View>
    )
  }

  ItemSeparatorComponent_type = () => {
    return(
      <View 
        style={{width:10}}
      />
    )
  }
  
  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{height:20}}
      />
    )
  }
  
  render(){
    return(
      <View style={styles.container}>
          <FlatList 
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=>index.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
          />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:10,
    marginBottom:10,
    backgroundColor:'white'
  },
  type: {
    fontSize:18,
    fontWeight:'bold'
  },
  item: {
    marginTop:10,
    flexDirection:'row',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10
  },
  item_type: {
    flex:1,
    alignItems:'center'
  },
  image:{
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'white'
  },
  name: {
    marginTop:10,
    color:'white',
    fontSize:15
  }
});
