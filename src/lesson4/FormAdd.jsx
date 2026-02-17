import swal from 'sweetalert'
import { useState } from 'react'

export const FormAdd = ({ newUser }) => {

    const [user, setUser] = useState({})

    const send = () => {
        console.log('send');

        let flag = newUser(user)
        if (flag)
            swal(`Hello ${user.username}`, 'register successfully', 'success')
        else {
            swal(`Oopps!`, 'register failed. email has already exists', 'error')
        }
    }


    return <>
        <label htmlFor="UN">username:</label><br></br>
        <input id="UN" placeholder="input username" onBlur={(e) => setUser({ ...user, username: e.target.value })}></input><br></br><br></br>
        <label htmlFor="PW">email:</label><br></br>
        <input id="PW" placeholder="input email" type='email' onBlur={(e) => setUser({ ...user, email: e.target.value })}></input><br></br><br></br>
        <label htmlFor="CW">password:</label><br></br>
        <input id="CW" placeholder="input password" type='password' onBlur={(e) => setUser({ ...user, password: e.target.value })}></input><br></br><br></br>
        <button onClick={send}>send</button>

    </>
}

