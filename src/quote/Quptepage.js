import React, { useState } from 'react'
import './quotepage.css'
import Submitted from './submittedquotes'

import Scrollbars from 'react-custom-scrollbars-2'

const Quotes = () => {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState()
    const [other, setother] = useState(false)
    const [userquote, setuserquote] = useState({ quote: '' })

    const getdata = () => {
        fetch(`https://api.adviceslip.com/advice/search/${search}`)
            .then((apiData) => {
                return apiData.json()
            })
            .then((actualData) => {
                console.log(actualData.slips)
                setdata(actualData.slips)
                console.log(search)
            })
    }
    const find = (e) => {
        setsearch(e.target.value)
    }
    const getUSerData = () => {
        getdata()
    }
    let name, value
    const senduserquote = (event) => {
        name = event.target.name
        value = event.target.value
        setuserquote({...userquote, [name]: value })
    }
    const transfer = (e) => {
        e.preventDefault()
        setother(true)
    }
    const transferagain = (e) => {
        e.preventDefault()
        setother(false)
    }
    const sendquote = async(e) => {
        e.preventDefault()
        const { quote } = userquote
        if (quote) {
            const responce = await fetch(
                'https://quote-app-c0b54-default-rtdb.firebaseio.com/quote-app.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        quote,
                    }),
                },
            )
            if (responce) {
                setuserquote({
                    quote: '',
                })
                alert(
                    'your quote is stored in our database we will varify your quote 🤗🤗  ',
                )
            }
        } else {
            alert('please Write a quote')
        }
    }
    return ( <
        > { ' ' } {
            !other ? ( <
                >
                <
                div className = "navbar" >
                <
                h1 className = "heading" > Quote App < /h1>{' '} <
                div className = "logos" >
                <
                i class = "fas fa-user user" > < /i>{' '} <
                i class = "fas fa-plus add"
                onClick = { transfer } > { ' ' } <
                /i>{' '} <
                /div>{' '} <
                /div>{' '} <
                section className = "search-box" >
                <
                div className = "search-bar" >
                <
                input type = "text"
                onChange = { find }
                />{' '} <
                button className = "search"
                onClick = { getUSerData } >
                <
                i class = "fas fa-search" > < /i>{' '} <
                /button>{' '} <
                /div>{' '} <
                /section>{' '} <
                div className = "box" >
                <
                div className = "item" >
                <
                Scrollbars > { ' ' } {
                    !data ? ( <
                        p > No data found < /p>
                    ) : (
                        data.map((curelem) => {
                            return ( <
                                >
                                <
                                p > { curelem.advice } < /p>{' '} <
                                />
                            )
                        })
                    )
                } { ' ' } <
                /Scrollbars>{' '} <
                /div>{' '} <
                /div>{' '} <
                div className = "submitted" >
                <
                Submitted / >
                <
                /div>{' '} <
                />
            ) : ( <
                >
                <
                div className = "navbar" >
                <
                h1 className = "heading" > Submit a Quote < /h1>{' '} <
                div className = "logos" > { ' ' } {
                    other ? ( <
                        i class = "fas fa-times"
                        onClick = { transferagain } > { ' ' } <
                        /i>
                    ) : ( <
                        i class = "fas fa-plus add"
                        onClick = { transferagain } > { ' ' } <
                        /i>
                    )
                } { ' ' } <
                /div>{' '} <
                /div>{' '} <
                form method = "POST" >
                <
                input type = "text"
                name = "quote"
                placeholder = "Write your Quote......"
                className = "message"
                value = { userquote.quote }
                onChange = { senduserquote }
                />{' '} <
                /form>{' '} <
                button className = "submit"
                onClick = { sendquote } > { ' ' }
                submit { ' ' } <
                /button>{' '} <
                />
            )
        } { ' ' } <
        />
    )
}
export default Quotes