import React, { useContext } from 'react';
import "./../scss/components/_profile.scss";

function Profile(props) {

    console.log(props);

    return (
        <div className='profile-content flex row space-between'>
            <div className='avatar'>
                <img className='profile-content__avatar' src='./../images/default-avatar.png'></img>
            </div>
            <div className='information'>
                <div className='profile-content__information'>
                    <h2>Status {props.data}</h2>
                    <h1>Name Surname FatherName</h1>
                    <p>E-Mail</p>
                    <p>Telephone</p>
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