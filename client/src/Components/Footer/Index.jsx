import React from 'react';
import Contact from './Contact';

const Footer = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
            <h2 className="page-header">CONTACT US</h2>
            <div className="contact-content">
            <div className="name-address">
                <span className="contact-name">Stars INC.</span>
                <address>1224 Milky Way, Rd, Charlotte, North Carolina</address>
                <p className="contact-p">Have any questions? Want to work together? Let's talk!</p>
                <a href="https://twitter.com" target="_blank"><img className="icon facebook" src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/facebook-512.png" alt="Facebook icon"></img></a>
                <a href="https://www.facebook.com" target="_blank"><img className="icon twitter" src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/4-512.png" alt="Twitter icon"></img></a>
                <a href="https://www.instagram.com/?hl=en" target="_blank"><img className="icon insta" src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-512.png" alt="Instagram icon"></img></a>
            </div>
            {<Contact />}
            </div>
            </div>
            <div>
                <span>Copyright 2019</span>
                <span>Last Updated October 2019</span>
            </div>
            </div>
    )
}

export default Footer;