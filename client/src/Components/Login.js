import React from 'react';
import useForm from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (state, e) => {
        alert("Logged in")
        e.target.reset()
    }
    console.log(errors);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
    }

    return (
        <div className="contact-wrapper">
            <h1>Login</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form name="contact-me" onSubmit={handleSubmit(onSubmit)} method="POST">

                        <label htmlFor="mail">Email Address</label>
                        <input type="text" placeholder="Email address" onChange={handleChange} name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="msg">Password</label>
                        <textarea name="message" placeholder="Write your message in here!" id="msg" onChange={handleChange} ref={register({ required: true, min: 2, max: 1000, maxLength: 200 })}></textarea>
                        <p className="error-msg">{errors.message && 'Please enter in a message!'}</p>

                        <button type="submit" value="Submit" name="submit" id="sub">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div >


    )

}

export default Login;