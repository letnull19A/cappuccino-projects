import React, { useContext } from 'react';
import "./../scss/components/_profile.scss";

function Profile(props) {

    const currentData = props.data;

    return (
        <div className='profile-content flex row space-between'>
            <div className='avatar'>
                <img className='profile-content__avatar' src='./../images/default-avatar.png'></img>
            </div>
            <div className='information'>
                <div className='profile-content__information'>
                    <h2>{currentData.userRole.role_title}</h2>
                    <h1>{currentData.user.user_surname} {currentData.user.user_name} {currentData.user.user_fatherName}</h1>
                    <p>E-Mail: {currentData.userContact.contact_email}</p>
                    <p>Телефон: </p>
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