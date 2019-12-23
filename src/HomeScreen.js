import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, } from "react-native";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-scroll";

var device_height = Dimensions.get("window").height;
var device_width = Dimensions.get("window").width;
var home_height = device_height * 0.97;

var img_width;
if(device_width>250 && device_width<400){
  var home_height = device_height * 0.6;
}
else if(device_width>400 && device_width<500){
  var home_height = device_height * 0.65;
}
else if(device_width>500 && device_width<700){
  var home_height = device_height * 0.8;
}
else if(device_width>700){
  var home_height = device_height * 0.97;
}
class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      carousel_img1: require('./img/workspace_stock.jpg'),
      carousel_img2: require('./img/code_laptop.jpg'),
      carousel_img3: require('./img/statue_pose.JPG'),
    }
  }

  render(){
    const HomeComponent = () => {
      return (
        <View style = {styles.container}>
        <View style={{width: '98%'}}>
          <Carousel style={styles.carousel} autoPlay={true} showThumbs ={false} infiniteLoop={true} 
            interval={5000} stopOnHover={false}>
            {/* <div>
              <img style={{width: "100%", height: "auto", borderRadius: 10,}} 
                alt="Workspace" src={this.state.carousel_img1}/>
            </div> */}
            <div>
              <img style={{width: "100%", height: "auto", borderRadius: 10,}} 
                alt="Workspace" src={this.state.carousel_img2}/>
            </div>

          </Carousel>
          <Text style={styles.carousel_text}>Hi! I'm Michael and ...I write cod
            <mark style={{backgroundColor: 'white', color: 'black', marginLeft: 1}}>e</mark></Text>
          </View>

          <View style={styles.button_container}>
            <TouchableOpacity style={styles.touchable}>
              <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-fb3f6.appspot.com/o/Michael_Vandi_Resume.pdf?alt=media&token=8799292d-d259-4796-8db2-2f1d78c08945"
              style={{color:'black', fontSize: 16, fontFamily: 'Monospace', fontWeight:'bold',}}
              target="_blank">
              Download Resume</a>
            </TouchableOpacity>

            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={500}>
              <TouchableOpacity style={styles.touchable}>
                <Text style={styles.button_text}>Projects</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity style={styles.touchable}>
            <a style={{color:'black', fontSize: 16, fontFamily: 'Monospace', fontWeight:'bold',}}
              href ="https://github.com/MichaelVandi/" target="_blank">
              My Github</a>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable} onPress={()=> alert("Coming soon...")}>
              <Text style={styles.button_text}>Visit My Blog</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    return(
      <HomeComponent/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: home_height,
    marginTop: 62,
    
  },
  carousel: {
    width: "100%",
    backgroundColor:'transparent',
  },
  carousel_text:{
    color: 'white',
    fontWeight: 'bold',
    width: '55%',
    fontSize: 29,
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginBottom: 50,
    marginLeft: 8,
    zIndex: 4,
    textAlign: "left",
    fontFamily: 'Monospace',
    
  },
  touchable:{
    borderColor: "#D0D1D2",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginRight: 10,
    marginBottom: 5,
    shadowColor: '#000000',
    shadowOffset: {
    width: 2,
    height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  button_container:{
    display:'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  button_text:{
    color:'black',
    fontSize: 17,
    fontFamily: 'Monospace',
    fontWeight:'bold',
  }
});

export default HomeScreen;
