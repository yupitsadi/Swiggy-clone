import React from 'react';

const Profile = (props) =>{
    return (
        <>
        <div>
            <h1>Profile component</h1>
            <h2>NAME : {props.name}</h2>
        </div>
        </>
    );
};

export default Profile;