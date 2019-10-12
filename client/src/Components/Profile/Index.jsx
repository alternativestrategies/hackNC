import React from 'react';

const Profile = () => {
    return (
        <div>
            <h2>Username:</h2>
            <h2>Full Name:</h2>
            <h2>Email:</h2>
            <div>
                <h3>Bid history</h3>
                <table>
                    <th>Product Name</th>
                    <th>Bid Amount</th>
                    <th>Bid Status</th>
                    <tr>
                        <td>Name#1</td>
                        <td>$0.00</td>
                        <td>Sold</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Profile;