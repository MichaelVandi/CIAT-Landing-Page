import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {View, Text, Image, StyleSheet} from "react-native";
import Button from 'react-bootstrap/Button';

class ExpandedProject extends React.Component{
    constructor(props){
        super(props)
        this.state={
            img_lg1: "",
            img_lg2: "",
            img_lg3: "",
            show_modal: true,
        }
    }
    componentWillReceiveProps(){
        this.setState({
            img_lg1: this.props.image1,
            img_lg2: this.props.image2,
            img_lg3: this.props.image3,
            show_modal: this.props.show_modal
        })
    }

    render(){
        const ShowExpandedView = ()=>{
            if(this.props.image1 !="" && this.state.show_modal == true){
                // Show modal
                return(
                    <View style={styles.large_img_carousel}>
                        <Carousel>
                            <div>
                                <img src = {this.props.image1}/>
                            </div>

                            <div>
                                <img src = {this.props.image2}/>
                            </div>
                            <div>
                                <img src = {this.props.image3}/>
                            </div>
                        </Carousel>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 20}}>
                        <Button onClick={()=>{this.setState({show_modal: false,})}} 
                            style={{alignSelf: 'flex-end'}} variant="success">Close</Button>
                        </View>

                    </View>
                )
            }
            else{
                return null
            }
        }
        return(
            <ShowExpandedView/>
        )
    }

}
const styles = StyleSheet.create({
    large_img_carousel:{
        width: "90%",
        height: 'auto',
        position: 'relative',
        zIndex: 200,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
      }
})
export default ExpandedProject;