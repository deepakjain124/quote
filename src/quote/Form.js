import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Form.css'
const Form = () => {
    let history = useHistory()
    console.log(history)
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
    })
    let name, value
    const getdata = (event) => {
        name = event.target.name
        value = event.target.value
        setuser({...user, [name]: value })
    }
    const Postdata = async(e) => {
        e.preventDefault()
        const { name, email, password } = user
        if (name && email && password) {
            const responce = await fetch(
                'https://quote-app-c0b54-default-rtdb.firebaseio.com/quote-app.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                },
            )
            if (responce) {
                setuser({
                    name: '',
                    email: '',
                    password: '',
                })
                alert('data stored successfully')
                history.push('./Quptepage.js')
            }
        } else {
            alert('please fill the required data')
        }
    }
    return ( <
        >
        <
        div class = "login-box" >
        <
        h2 > Login < /h2>{' '} <
        form >
        <
        div class = "user-box" >
        <
        input type = "text"
        name = "name"
        onChange = { getdata }
        value = { user.name }
        required /
        >
        <
        label > Username < /label>{' '} <
        /div>{' '} <
        div class = "user-box" >
        <
        input type = "email"
        name = "email"
        onChange = { getdata }
        value = { user.email }
        required /
        >
        <
        label > email < /label>{' '} <
        /div>{' '} <
        div class = "user-box" >
        <
        input type = "password"
        name = "password"
        onChange = { getdata }
        value = { user.password }
        required /
        >
        <
        label > Password < /label>{' '} <
        /div>{' '} <
        a href = "#"
        onClick = { Postdata } >
        <
        span > < /span> <span> </span > < span > < /span> <span> </span >
        Submit { ' ' } <
        /a>{' '} <
        /form>{' '} <
        /div>{' '} <
        />
    )
}
export default Form