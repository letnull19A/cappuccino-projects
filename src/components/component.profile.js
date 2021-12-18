import React, { useContext } from 'react';
import "./../scss/components/_profile.scss";

function Profile(props) {

    const currentData = props.data;

    console.log(currentData);

    return (
        <div className='profile-content flex row space-between'>
            <div className='avatar'>
                <img className='profile-content__avatar' src='./../images/default-avatar.png'></img>
            </div>
            <div className='information'>
                <div className='profile-content__information'>
                    <h2>Status</h2>
                    <h1>{currentData.user_surname} {currentData.user_name} {currentData.user_fatherName}</h1>
                    <p>E-Mail: {currentData.user_contact.email}</p>
                    <p>Телефон: {currentData.user_contact.contact_phone}</p>
                </div>
            </div>
            <div className='study-information'>
                <div className='profile-content__study-information'>

                </div>
            </div>
        </div>
    );
}

export default Profile;