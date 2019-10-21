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
                        Hi! I'm Michael. I am a Computer Science Student at the University of Baltimore and I also 
                        study part time at the Harvard Extension School. I've worked on a handful of personal projects
                        which I often make open source and I've also had a few cool internship activities.
                    </Text>

                    <Text style= {styles.normalText}>
                        <strong>How did I get into software stuff ?</strong> It's unbelievable every time I think of my journey
                        into Computer Science and my academic and career growth over the last few years. 
                        I am originally from Freetown, Sierra Leone— a developing
                        country in Sub Saharan (West) Africa. Growing up in Freetown gave me the opportunity to
                        experience a variety of ethnic cultures. However, I always had some exceptional 
                        inner drive for tech. When I was 6 years old, My Aunt gave me a toy laptop as a present.
                        It was an awkward looking laptop with black and white display programmed with a variety
                        of cartoon games. I would spent hours trying to figure out the instructions 
                        on the laptop and how to use the computer correctly. Some days, I wondered how the games
                        were built and I wanted to build my own games too. To do this, I would randomly press
                        keys on the keyboard pretending to write code. After a while of doing this, the toy
                        laptop crashed. This experience triggered an interest in me to become a computer
                        scientist. I grew the passion to build my own programs someday just like the ones on the
                        toy laptop. 
                    </Text>
                    <Text style= {styles.normalText}>
                        In my final year of high school, I built my first android app. Not long after, 
                        I received an opportunity to study in the United States. Since my relocation
                        to the states my computer science career has been beautifully forming together
                        one piece at a time. Things I once considered dreams were now my daily life, ranging
                        from getting scholarships, working and networking with amazing teams etc.
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
        fontSize: 15,
        marginBottom: 10,
    }
})


export default AboutMe;