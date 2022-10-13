import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const Employee2 = () => {
    let location = useLocation();
    let navigate = useNavigate();
    console.log(location)
    console.log('hello11')
    console.log('hello12')
    console.log('hello13')
    return (
        <>
            <KeyboardBackspaceIcon onClick={() => navigate('/search')} />
            <h3>{location.state.name1} Profile</h3>
            <div className='form'>

        
            <h2>Name: {location.state.name1}</h2>
            <h2>Profession:{location.state.professsio1}</h2>
            <h2>joined:{location.state.joinedOn1}</h2>
            </div>
        </>

    )
}
