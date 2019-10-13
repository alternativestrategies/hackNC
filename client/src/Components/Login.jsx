import React from 'react';
import useForm from 'react-hook-form';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';


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
                        <input type="text" name="message" placeholder="Password" id="msg" onChange={handleChange} ref={register({ required: true, pattern: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/ })}></input>
                        <p className="error-msg">{errors.message && 'Incorrect password'}</p>

                        <button type="submit" value="Submit" name="submit" id="sub">Login</button>
                    </form>
                </fieldset>
                <div>

                    <NavLink to="/signup">New? Sign up here!</NavLink>

                </div>
            </div>
        </div >
    )
}

export default Login;