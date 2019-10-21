import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { withRouter } from "react-router-dom";
import {Link} from "react-scroll";

var device_width = Dimensions.get("window").width;
var device_height = Dimensions.get("window").height;
var img_width = device_width * 0.2;

class SideNavMobile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile_img: require("./img/ted_x1.jpg"),
      img_width: 200,
      device_width: device_width,
    }
  }
      /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth >250 && window.innerWidth <=400) {
      this.setState({img_width: 80, device_width: window.innerWidth})
      img_width = 80
    } else if(window.innerWidth > 400 && window.innerWidth <=500) {
      this.setState({img_width: 100, device_width: window.innerWidth})
      img_width = 80
    }
    else if(window.innerWidth > 500 && window.innerWidth <=700){
      this.setState({img_width: 160, device_width: window.innerWidth})
      img_width = 80
    }
    else if(window.innerWidth > 700 && window.innerWidth <=800){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 100
    }
    else if(window.innerWidth > 800 && window.innerWidth <=900){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 120
    }
    else if(window.innerWidth > 900 && window.innerWidth <=1000){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 10
    }
    else if(window.innerWidth > 1000 && window.innerWidth <=1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 180
    }
    else if(window.innerWidth > 1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 200
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render (){
    const Nav = () => {
      return (
        <View style={styles.main}>
          <View style={{width: 'auto', alignItems: "center", justifyContent: "center"}}>
            <Image style={{width: img_width, height: img_width,
              borderRadius: '50%'}} source={this.state.profile_img}  />
          </View>
          <View style={{width: 'auto', alignItems: "center", justifyContent: "center", flexDirection: 'column'}}>
            <Text style = {styles.nameText}> Michael Vandi</Text>
            <Text style ={styles.posText}> Full-Stack Developer</Text>
          </View>
          <View>
          <div className="navbar" style={{flexDirection: 'column'}}>
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-10} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <Text style = {styles.text}> Home</Text>
                </TouchableOpacity>
              </Link>

              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-10} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <Text style = {styles.text}> About</Text>
                </TouchableOpacity>
              </Link>

              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500}>
                <TouchableOpacity onPress={this.onProjectsPress} style = {styles.button}>
                  <Text style = {styles.text}> Projects</Text>
                </TouchableOpacity>
              </Link>

              <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-10} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <Text style = {styles.text}> Resume</Text>
                </TouchableOpacity>
              </Link>

              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-10} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <Text style = {styles.text}> Contact</Text>
                </TouchableOpacity>
              </Link>
                <Text style={styles.copyrightText}>
                © 2019 All rights reserved
                </Text>
            </div>
          </View>
          {/* <Button title="Home" onPress={() => history.push("/")} />
          <Button title="Second" onPress={() => history.push("/second")} /> */}
        </View>
    
      );
    };
    return(
      <Nav/>
    );
  }
}



const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    width: 'auto',
    backgroundColor: "#ECECEC",
    height: device_height,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
    padding: 10,
    borderRadius: 10,
    position: 'fixed',
  
  },
  button:{
    borderBottomColor: "#D0D1D2",
    borderBottomWidth: 1,
    justifyContent: 'center',
    width:'100%',
    padding: 5,
    marginBottom: 5,
  },
  text:{
    fontSize: 14,
  },
  profile_img:{
    borderRadius: "50%",
    width: img_width,
    height: img_width,
  },
  nameText:{
    fontWeight:"bold",
    fontSize: 18,
    fontFamily:'Monospace'
  },
  posText:{
    fontSize: 15,
  },
  copyrightText:{
    width: "100%",
    textAlign:"center",
  }
});

export default withRouter(SideNavMobile);
