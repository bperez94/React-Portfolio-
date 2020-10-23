import React, { Component } from "react";

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id ='about' >
            
            <div className = 'row'>

                <div className ='three columns'>
                
                  {/*<img className = 'profilePic' src='img\60058577.jpg' alt= 'selfPic'/>    */}

                </div> 

            </div>

            <div className = 'nine columns main-col'>
                <h2>About Me</h2>
            </div>

            <p>
                {
                    resumeData.aboutme
                }
            </p>

            <div className ='row'>
            
            <div className ='columns contact-details'>

                <h2>Contact Details</h2>
                
                <p className = 'address'>
                    <span>{resumeData.name}</span>

                    <br></br>

                    <span>{resumeData.website}</span>
                </p>

            </div>

            </div>

        </section>  
        
        ); 
    }
}