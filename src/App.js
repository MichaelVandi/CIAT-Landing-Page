// App.js - WEB
import React, { Component} from "react";
import { View, StyleSheet, Dimensions, 
  TouchableOpacity, Text, ImageBackground, Image } from "react-native";
import {FaBars, FaArrowRight} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


var device_width = Dimensions.get('window').width;
var device_height = Dimensions.get('window').height;
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



  render() {


    return (
      <View>
        {/* For background image and links */}
        <View style={styles.header}>
          <Text style={styles.headerText}>CIAT App</Text>
        </View>   
        <ImageBackground
          style={{height: device_height * 0.5, width: '100%', marginTop: 40,}}
          source={require('./img/cover.png')}
        >
        </ImageBackground>
        <Container fluid={false}>

        <View style={{marginVertical: 40}}>
            <Row className="justify-content-md-center">
              {/* For image 1 */}
              <Col md="4" style={{paddingVertical: 10}}>
                <TouchableOpacity style={styles.androidButton}>
                <a href="https://firebasestorage.googleapis.com/v0/b/ciat-app.appspot.com/o/app-release.apk?alt=media&token=aea7424e-849f-41b3-9d80-95a441079f00"
                style={{color:'#2D3047', fontSize: 20, fontWeight:'bold', textAlign: 'center'}}
                target="_blank">
                Download Android</a>
              </TouchableOpacity>
              </Col>
            {/* For image 2 */}
              <Col md="4" style={{paddingVertical: 10}}>
                <TouchableOpacity style={styles.iosButton}>
                  <a href="https://firebasestorage.googleapis.com/v0/b/ciat-app.appspot.com/o/app-release.apk?alt=media&token=aea7424e-849f-41b3-9d80-95a441079f00"
                  style={{color:'#107E7D', fontSize: 20, fontWeight:'bold', textAlign: 'center'}}
                  target="_blank">
                  Download iOs</a>
                </TouchableOpacity>
              </Col>
              {/* For image 3 */}
              <Col md="4" style={{paddingVertical: 10}}>
                <TouchableOpacity style={styles.sourceCodeButton}>
                    <a href="https://github.com/MichaelVandi/CIAT"
                    style={{color:'#79797C', fontSize: 20, fontWeight:'bold', textAlign: 'center'}}
                    target="_blank">
                    Source Code</a>
                </TouchableOpacity>
              </Col>
            </Row>
          </View>

          <View style={{marginVertical: 40}}>
            <Row className="justify-content-md-center">
              {/* For image 1 */}
              <Col md="4" style={{paddingVertical: 10}}>
                <View style={styles.elevation}>
                  <Text style={styles.titleText}>Active GIS Mapping</Text>
                  {/*Image */}
                  <Image
                    style={styles.appImage}
                    source={require('./img/map_screen.png')}
                    resizeMode='contain'
                  />
                  <Text style={styles.descriptionText}>Our active GIS mapping gives you a holistic view of COVID-19 
                  cases in every zip code in Maryland.</Text>
                </View>

              </Col>
            {/* For image 2 */}
              <Col md="4" style={{paddingVertical: 10}}>
              {/* Photo by Ketut Subiyanto from Pexels */}
                <View style={styles.elevation}>
                  <Text style={styles.titleText}>Localized Statistics</Text>
                  {/*Image */}
                  <Image
                    style={styles.appImage}
                    source={require('./img/stats_screen.png')}
                    resizeMode='contain'
                  />
                  <Text style={styles.descriptionText}>We generate statistics from verified sources
                  specifically tailored to your zip code or city.</Text>
                </View>
                    
              </Col>
              {/* For image 3 */}
              <Col md="4" style={{paddingVertical: 10}}>
                <View style={styles.elevation}>
                    <Text style={styles.titleText}>Links to Resources</Text>
                    {/*Image */}
                    <Image
                      style={styles.appImage}
                      source={require('./img/resources_screen.png')}
                      resizeMode='contain'
                    />
                    <Text style={styles.descriptionText}>We also provide you with links to useful resources like where to
                    get health supplies.</Text>
                  </View>
              </Col>
            </Row>
          </View>

          <View style={{marginVertical: 40}}>
            <Row className="justify-content-md-center">
              {/* For image 1 */}
              <Col md="6" style={{paddingVertical: 10}}>
                <ImageBackground
                  style={{height: device_height * 0.5, width: '100%'}}
                  source={require('./img/beta_test.jpg')}
                >
                </ImageBackground>
              </Col>
            {/* For image 2 */}
              <Col md="6" style={{paddingVertical: 10}}>
                <View style={{ 
                width: '100%', height: device_height * 0.5}}>
                  <Text style={styles.titleText}>Join Our Beta</Text>
                  <Text style={styles.descriptionText}>Send your email to one of the following email addresses to
                    receive an invite </Text>

                    <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 10}}>
                      <FaArrowRight size ="1.5em" color="#107E7D" style={{marginTop: 5, marginRight: 10}}/>
                      <Text style={styles.listText}>Olubukola Akanbi: olubukola.akanbi@ubalt.edu</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 10}}>
                      <FaArrowRight size ="1.5em" color="#107E7D" style={{marginTop: 5, marginRight: 10}}/>
                      <Text style={styles.listText}>Charles Chase: charles.chase@ubalt.edu</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 10}}>
                      <FaArrowRight size ="1.5em" color="#107E7D" style={{marginTop: 5, marginRight: 10}}/>
                      <Text style={styles.listText}>Stephanie Parey: stephanie.parey@ubalt.edu</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 10}}>
                      <FaArrowRight size ="1.5em" color="#107E7D" style={{marginTop: 5, marginRight: 10}}/>
                      <Text style={styles.listText}>Michael Vandi: michael.vandi@ubalt.edu</Text>
                    </View>
                </View>
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
      borderRadius: 10,
      padding: 10,
      backgroundColor: 'white', 
      marginBottom: 30,
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
      fontSize: header_text_size,
      fontWeight: 'bold',
      color: '#107E7D',
      //color: 'white',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
      paddingTop: 4,
    },
    appImage: {
      width: "90%",
      height: device_height * 0.5,
    },
    titleText: {
      fontWeight:'bold',
      fontSize: 30,
      color: "#2D3047",
      width: '100%',
      textAlign: 'center',
    },
    descriptionText: {
      fontSize: 20,
      height: 100
    },
    androidButton:{
      borderColor: "#2D3047",
      borderRadius: 10,
      borderWidth: 2,
      padding: 10,
      marginBottom: 20,
    },
    iosButton:{
      borderColor: "#107E7D",
      borderRadius: 10,
      borderWidth: 2,
      padding: 10,
      marginBottom: 20,
    },
    sourceCodeButton: {
      borderColor: "#79797C",
      borderRadius: 10,
      borderWidth: 2,
      padding: 10,
      marginBottom: 20,
    },
    listText: {
      fontWeight:'normal',
      fontSize: 20,
      color: "#2D3047",
    }

})

export default App;
