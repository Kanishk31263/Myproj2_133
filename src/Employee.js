import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Employee = ({ id, name, joinedOn, professsio }) => {
    const navigate = useNavigate();
    let obj = {
        id1: id,
        name1: name,
        joinedOn1: joinedOn,
        professsio1: professsio
    }

    return (
        <>
            {/* <h3 onClick={() => navigate('/idcard', { state: obj })}>{id} {name} {joinedOn} {professsio}</h3> */}
            <ul onClick={() => navigate('/idcard', { state: obj })}>
                <li>Idl:{id}</li>
                <li>Name:{name}</li>
                <li>Joined: {joinedOn}</li>
                <li>Profession:{professsio}</li>
            </ul>
            <br />
            <br />
        </>
    )
}
