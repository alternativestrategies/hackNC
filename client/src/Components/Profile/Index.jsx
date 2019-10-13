import React from 'react';

const Profile = (state) => {
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)


    return (
        <div>
            <h2>Username:</h2>
            <h2>Full Name:</h2>
            <h2>Email:</h2>
            <div>
                <h3>Bid history</h3>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Product</td>
                                            <td>Bid Amount</td>
                                            <td>Bid Status</td>
                                        </tr>
                                        <tr>
                                            <td>Product #1</td>
                                            <td>Bid Amount #1</td>
                                            <td>Bid Status #1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile;