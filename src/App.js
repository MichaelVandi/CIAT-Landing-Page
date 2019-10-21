// App.js - WEB
import React, { Component} from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {FaBars} from 'react-icons/fa';
import HomeScreen from "./HomeScreen";
import SideNav from "./SideNav";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from './Resume';
import ContactMe from './ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNavMobile from './SideNavMobile';
import './App.css';

var device_width = Dimensions.get('window').width;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSideNav: true,
      showHamburgerMenu: false,
      showMobileNav: false
    }
    
  }
    /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 768) {
      this.setState({
        showSideNav: false,
        showHamburgerMenu: true
      })
    } else {
      this.setState({
        showSideNav: true,
        showHamburgerMenu: false,
        showMobileNav: false
      })
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

  componentWillMount(){
    if(device_width < 768){
      this.setState({
        showSideNav: false,
        showHamburgerMenu: true,
        
      })
    }
    else{
      this.setState({
        showSideNav: true,
        showHamburgerMenu: false
      })
    }
  }
  onHamburgerClick =()=>{
    this.setState({
      showMobileNav: !this.state.showMobileNav
    })
  }

  render() {
    
    const ShowSideNav =()=>{
      if(this.state.showSideNav == true){
        return(
          <SideNav/>
        )
      }
      else{
        return (null);
      }
    }
    const ShowHamburgerMenu =()=>{
      if(this.state.showHamburgerMenu == true){
        return(
          <TouchableOpacity onPress={this.onHamburgerClick} style={styles.elevation} >
              <FaBars size ="1.5em"/>
          </TouchableOpacity>
        )
      }
      else{
        return(null);
      }
    }
    const ShowMobileNav = ()=>{
      if(this.state.showMobileNav == true){
        // Show Mobile Nav
        return(
          <View style={styles.mobile_nav}>
            <Row>
              <Col xs="8" style={{backgroundColor: '#ECECEC',}}>
                <SideNavMobile/>
              </Col>
              <Col>

              </Col>
            </Row>
          </View>
        )
      }
      else{
        return(null)
      }
    }
    return (
      <View>
      
      <ShowHamburgerMenu/>
      <ShowMobileNav/>  
      <Container fluid={false}>
        <View>
          <Row className="justify-content-md-center">
            <Col md="3" style={{backgroundColor: '#ECECEC',}}>
              <ShowSideNav />
            </Col>
           
            <Col md="9">
              <div id="home">
                <HomeScreen/>
              </div>
              <div id="about">
                <AboutMe/>
              </div>
              <div id="projects">
                <Projects/>
              </div>
              <div id="resume">
                <Resume/>
              </div>
              <div id="contact">
                <ContactMe/>
              </div>
            </Col>
          </Row>
        </View>
      </Container>
      </View>
    );
  }

}
const styles =StyleSheet.create({
    container:{
      backgroundColor: '#EDEDED'
    },
    elevation: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 0.7,
      borderRadius: 5,
      padding: 3,
      margin: 3,
      width: 30,
      height: 30,
      position: 'fixed',
      zIndex: 10,
      backgroundColor: 'white'
    },
    mobile_nav: {
      padding: 5,
      position: 'absolute',
      zIndex: 8,

    }

})

export default App;
