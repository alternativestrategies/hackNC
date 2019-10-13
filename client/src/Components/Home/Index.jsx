import React from 'react';
import Slider from './Slider'

const Home = (state) => {
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)
    // if (!state.state.state.user || state.state.state.user !== "") {

    // }
    return (
        <div>
            <p>Home page</p>
            {<Slider />}
        </div>
    )
}

export default Home;