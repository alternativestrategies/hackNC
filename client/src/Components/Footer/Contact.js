import React from 'react';

const Contact = () => {
    return (
        <form name="contact" method="POST" className="contact-form column-right">
            <label className="form-label" htmlFor="user_name">NAME</label>
            <input className="form-control" name="name" id="user_name" placeholder="Name" required></input>

            <label className="form-label mt-3" htmlFor="user_email">EMAIL</label>
            <input className="form-control" name="email" id="user_email" type="email" placeholder="E-mail" required></input>

            <label className="form-label mt-3" htmlFor="user_message">MESSAGE</label>
            <textarea className="form-control" name="message" id="user_message" type="text" placeholder="Message" required></textarea>

            <input type="hidden" name="form-name" value="contact" />

            <button className="btn btn-light mt-2" type="submit" value="submit">SEND</button>
        </form>
    )
}

export default Contact;