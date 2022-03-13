import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [val, setval] = useState({
        username: "",
        password: ''
    })
    const [sty, setsty] = useState({})
    const navigate = useNavigate();
    function chk(e) {


        e.target.value != 'Admin'
            ? setsty({
                [e.target.name]: {
                    border: '4px solid red'
                }
            }) : setsty({
                [e.target.name]: {
                    border: '4px solid green'
                }
            })


        setval(p => {
            return (
                {
                    ...p,
                    [e.target.name]: e.target.value
                }
            )
        })


    }
    function login() {
        if (val.username === 'Admin' && val.password === 'Admin') {
            navigate('/search');
        }

    }
 


    return (
        <>
            <div className='form'>
                <label htmlFor='username' value={val.username}>Username</label><br />
                <input id='username' onChange={chk} style={sty.username} name='username' type='text' /><br />
                <label htmlFor='password'>Password</label><br />
                <input id='password' onChange={chk} style={sty.password} name='password' type='text' value={val.password} /><br />
                <button onClick={login}>Submit</button>
            </div>
        </>
    )
}
