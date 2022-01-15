import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div>
                <InstagramIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
                <p>&copy; 2022 Indianfood.com</p>
            </div>
        </div>
    )
}

export default Footer
