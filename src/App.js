// App.js - WEB
import React, { Component} from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
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
import Skills from './Skills';
import './App.css';
import ExpandedProject from './ExpandedProject';

var device_width = Dimensions.get('window').width;
var header_text_size = 26;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSideNav: true,
      showHamburgerMenu: false,
      showMobileNav: false,
      showLargeProject: false,
      img_lg1: '',
      img_lg2: '',
      img_lg3:'',
      project_thumbnail:'',
      project_video:''
    }
    
  }
    /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth <= 768) {
      this.setState({
        showSideNav: false,
        showHamburgerMenu: true,
      })
    } else {
      this.setState({
        showSideNav: true,
        showHamburgerMenu: false,
        showMobileNav: false,
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
      header_text_size = 23;
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

  projectCallback=(image1, image2, image3)=>{
    this.setState({
      img_lg1: image1,
      img_lg2: image2,
      img_lg3: image3,
      showLargeProject: true,
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
      <View style={styles.header}>
        <Text style={styles.headerText}>michael_vandi<mark style={{backgroundColor: 'black', color: 'white'}}>;</mark></Text>
      </View>   
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
              <div id="skills">
                <Skills/>
              </div>
              <div id="projects">
                <Projects imagesFromProject={this.projectCallback} projectDemo={this.demoCallBack}/>
              </div>
              <div id="resume">
                <Resume/>
              </div>
              <div id="contact">
                <ContactMe/>
              </div>
              
              <div className="d-none d-md-block" style={{position: "fixed",
                top: "10px",
                //left: "50%",
                //zIndex: 204,
                transform: "translate(-50%, -50%, -50%, -50%)",
                }}>
          <ExpandedProject
            image1={this.state.img_lg1} 
            image2={this.state.img_lg2} 
            image3={this.state.img_lg3}
            show_modal={true}
          />
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
      marginTop: 5,
      zIndex: 210,
      backgroundColor: 'white'
    },
    mobile_nav: {
      padding: 5,
      position: 'absolute',
      zIndex: 8,
    },
    largeProject: {
      position: "absolute",
      margin: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: "100px",
      height: "100px",
    },
    header:{
      backgroundColor: 'white',
      //backgroundColor: '#00688B',
      width: '100%',
      height: 50,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 0.7,
      position: 'fixed',
      zIndex: 205
    },
    headerText:{
      fontFamily: 'Monospace',
      fontSize: header_text_size,
      color: 'black',
      //color: 'white',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
      paddingTop: 4,
    }

})

export default App;
