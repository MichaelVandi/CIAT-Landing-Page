import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {FaCode, FaLayerGroup, FaPalette, FaLock, FaFilm} from 'react-icons/fa';

class Skills extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        const AboutComponent =()=>{

            return(
                <View style = {styles.container}>
                    <Text style= {styles.heading}>
                        Skill<mark style={{backgroundColor: 'black', color: 'white'}}>s</mark>
                    </Text>

                    <View>
                        <Text style={styles.normalText}>
                        <FaCode style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Programming:</strong>Java, C++, React [Native and JS] , JavaScript, Python, C#, JQuery, Ajax, 
                        PHP, VB.net, HTML (5), CSS (3)
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.normalText}>
                        <FaPalette style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>U.I. Design:</strong>
                        XML, HTML (5), CSS (3), Bootstrap, Jinja 2
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.normalText}>
                        <FaLayerGroup style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Databases:</strong>
                        PostgreSQL, Firebase, Azure, ORMs , Microsoft Access
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.normalText}>
                        <FaLock style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Security and Administration:</strong>
                        Junit, Linux, Microsoft Azure
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.normalText}>
                        <FaFilm style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Multimedia Editing:</strong>
                        Adobe [Flash, Photoshop, Premier Pro, Audition, Dreamweaver]
                        </Text>
                    </View>

                </View>
            )
        }
        return(
            <AboutComponent/>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        marginTop: 15,
        padding: 5,  
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 27,
        fontFamily: 'Monospace',
        marginVertical: 10,
    },
    normalText:{
        fontSize: 16,
        marginTop: 4
    },
    sub_heading:{
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 15,
    }
})


export default Skills;