import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Contact() {
    return (
        <div className="container">
            <h2 className="text-center pt-5 pb-5 border">I look forward to hearing from you!</h2>
            <div>
                <a href="tel:+3364037330"> <i className="fas fa-mobile-alt fa-5x"></i> (336)403-7330</a>
            </div>
            <div>
                <a href="mailto:sr70079@gmail.com"> <i className="fas fa-envelope fa-5x"></i> Send me an email!</a>
            </div>
            <div>
                <a href="https://github.com/sr70079"> <i className="fab fa-github fa-5x"></i> Check out my GitHub here!</a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/sarah-marshall-47773978/"> <i className="fab fa-linkedin-in fa-5x"></i> Check out my LinkedIn here!</a>
            </div>      
        </div>  
 
  );
  }

  export default Contact;