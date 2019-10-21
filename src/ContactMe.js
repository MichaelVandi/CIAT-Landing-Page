import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaEnvelope, FaGithub, FaPhone, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import * as emailjs from 'emailjs-com'

class ContactMe extends React.Component{
    constructor(props){
        super(props);

        this.state={
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
            success_msg: '',
            fail_msg: '',
            
        }
        this.from_name = React.createRef();
        //this.handleChange = this.handleChange.bind(this);
    }
    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    sendEmail =()=>{
        let templateParams = {
            from_name: this.state.from_name,
            to_name: 'Michael',
            subject: this.state.subject,
            message_html: this.state.message,
            reply_to: this.state.from_email,
       }
       var that = this;
       emailjs.send('zoho', 'template_83TGLJXz', templateParams, 'user_SsazCpFD70PMO2FuhPDOK')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        that.setState({success_msg: 'Message sent successfully!!'})
        }, function(error) {
        console.log('FAILED...', error);
        that.setState({fail_msg: 'Something went wrong, please try again later'})
        });
        this.resetForm();
    }
    resetForm =()=>{
        this.setState({
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
        })
    }

    onSendClick =()=>{
        if(!this.state.from_email.toUpperCase().match("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$")){
            alert("Invalid Email address")
            return null;
        }
        if(this.state.from_email.trim() =="" || this.state.from_name.trim() ==""
        || this.state.subject.trim() =="" || this.state.message.trim() ==""){
            alert("Please enter all fields")
            
        }
        // First test passed, now performing regex and other tests
        else if(this.state.from_name.trim().length >1 && 
            this.state.from_email.toUpperCase().match("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$")&&
            this.state.subject.trim().length >1 && this.state.message.trim().length >1){
            // Test passed send email now
            this.sendEmail();
        }
    }

    render(){

        return(
            <View>
                <Text style={styles.heading_text}>
                    Contact M<mark style={{backgroundColor: 'black', color: 'white', marginLeft: 1}}>e</mark>
                </Text>
                <View style={{marginTop: 20, marginBottom: 50}}>
                    {/* Contact row */}
                    <Row>
                        {/* Col for main contact info */}
                        <Col sm="5" style={{marginBottom: 15}}>
                            <View style={styles.message_card}>
                                {/* Contains the contact me card header */}
                                <View>
                                    <View>
                                        <Text style={styles.message_header_text}>Contact Info</Text>
                                    </View>
                                    <Text style={styles.info_text}> 
                                    <FaEnvelope style={{marginRight: 5}}/>
                                    mikevee2013@gmail.com</Text>

                                    <Text style={styles.info_text}> 
                                    <FaEnvelope style={{marginRight: 5}}/>
                                    mvandi@mvandi.com</Text>

                                    <Text style={styles.info_text}> 
                                    <FaGithub style={{marginRight: 5}}/> Github: <a href ="https://github.com/MichaelVandi/">
                                    MichaelVandi</a></Text>

                                    <Text style={styles.info_text}> 
                                    <FaPhone style={{marginRight: 5}}/> <a href ="">
                                    +1(443) 582 9119</a></Text>
                                    
                                    <Text style={styles.info_text}> 
                                    <FaLinkedin style={{marginRight: 5}}/>LinkedIn: <a href ="https://www.linkedin.com/in/michael-vandi/">
                                    Michael Vandi</a></Text>

                                    <Text style={styles.info_text}> 
                                    <FaInstagram style={{marginRight: 5}}/>Instagram: <a href ="https://www.instagram.com/mike_ehl_/">
                                    mike_ehl_</a></Text>

                                </View>
                                {/* Contains the contact me inputs */}
                                <View>

                                </View>


                            </View>

                        </Col>
                        {/* Col for sending emails */}
                        <Col style={{marginBottom: 15}}>
                        <View style={styles.message_card}>
                                {/* Contains the contact me card header */}
                                <View style={styles.message_header_view}>
                                    <View style={styles.message_header}>
                                        <Text style={styles.message_header_text}>Send me a message</Text>
                                    </View>

                                </View>
                                {/* Contains the contact me inputs */}
                                <View>

                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCol>
                                            <form>
                                                
                                                <div className="grey-text">
                                                <MDBInput
                                                    label="Your name"
                                                    icon="user"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    id="from_name"
                                                    key="from_name"
                                                    value={this.state.from_name}
                                                    onInput={this.handleInput}
                                                />
                                                <MDBInput
                                                    label="Your email"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    id="from_email"
                                                    key="from_email"
                                                    value={this.state.from_email}
                                                    onInput={this.handleInput}
                                                />
                                                <MDBInput
                                                    label="Subject"
                                                    icon="tag"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    id="subject"
                                                    key="subject"
                                                    value={this.state.subject}
                                                    onInput={this.handleInput}
                                                />
                                                <MDBInput
                                                    type="textarea"
                                                    rows="2"
                                                    label="Your message"
                                                    icon="pencil-alt"
                                                    id="message"
                                                    key="message"
                                                    value={this.state.message}
                                                    onInput={this.handleInput}
                                                />
                                                </div>
                                                <div className="text-center">
                                                <MDBBtn onClick={()=> this.onSendClick()}
                                                    style={{width: '100%', }} outline color="secondary">
                                                    Send 
                                                </MDBBtn>
                                                </div>
                                                <Text style={{color: 'green'}}>{this.state.success_msg}</Text>
                                                <Text style={{color: 'red'}}>{this.state.fail_msg}</Text>
                                            </form>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBContainer>

                                </View>


                            </View>

                        </Col>
                    </Row>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    message_card:{
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#D0D1D2',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: '100%',
        padding:10,
        marginBottom: 20,
    },
    message_header_view:{
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    message_header:{
        width: '80%',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        borderRadius: 5,
        marginBottom: 15,
    },
    message_header_text:{
        textAlign: 'center',
        fontFamily: 'Monospace',
        fontSize: 25,
        fontWeight:'bold',
    },
    heading_text:{
        fontWeight:'bold',
        fontSize: 27,
        fontFamily: 'Monospace',
        marginVertical: 10, 
    },
    info_text:{
        fontSize: 16,
        marginVertical: 5,
    }
})
export default ContactMe;