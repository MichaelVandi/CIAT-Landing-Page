import React from "react";
import {View, Text, StyleSheet} from "react-native";

class AboutMe extends React.Component{
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
                        Who Am I<mark style={{backgroundColor: 'black', color: 'white'}}>?</mark>
                    </Text>
                    <Text style ={styles.normalText}>
                    Hi! I’m Michael. I am an Applied Computer Science student at the University of Baltimore 
                    and I also study part-time at the Harvard Extension School. 
                    </Text>

                    <Text style= {styles.normalText}>
                    <strong>How did I get into Tech? </strong>I am from Freetown, Sierra Leone in Sub Saharan Africa. It is unconventional for a 
                    little kid growing up in West Africa to be tech-savvy. However, I defied the odds by 
                    showing exceptional interest in technology. As a kid, we used to go weeks without 
                    electricity, so I would use scraps to make LED lights to study and impress my neighbors 
                    and family. On my sixth birthday, my aunt gave me a toy laptop as a present —the best gift 
                    I ever had! It was an awkward-looking laptop with black and white display programmed 
                    with a variety of games. I would spend hours trying to figure out how to use the laptop. 
                    Some days, I wondered how the games on it were made and I wanted to build my own games too. 
                    To do this, I would randomly press keys on the keyboard pretending to write code as I have 
                    seen in movies. After a while of doing this, the laptop crashed. I cried all night. 
                    This experience triggered my determination to become a computer scientist and build my own 
                    games someday just like the ones I had on the toy laptop. I have come a really long way 
                    since then. Nine years later, at age 15, in my final year of high school, I learned how to 
                    code, built my first android app and 2D game and I fell in love with coding ever since.

                    </Text>
                    <Text style= {styles.normalText}>
                    Professionally, I have had a few cool internships, built apps and websites for small 
                    businesses and worked on a handful of personal projects while still maintaining a perfect 
                    GPA in school. My transition from Sierra Leone to the United States steered a desire in 
                    me to contribute positively to technological changes globally and extend the benefits of 
                    tech to underprivileged communities and I look forward to more opportunities that would 
                    enable me to make real impacts in society.
                    </Text>

                    <Text style= {styles.normalText}>
                    In my leisure time, I write code, listen to audiobooks and music, play the guitar, 
                    research on fun stuff and I think I lift weights too (:-)  I owe all this progress to my 
                    Mum, who with little finances raised me to be the man I am today. 
                    </Text>
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
        marginBottom: 10,
    }
})


export default AboutMe;