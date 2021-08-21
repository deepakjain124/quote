import React, { useEffect, useState } from "react";
const UseEffectAPI = () => {

    const [user, setuser] = useState([]);
    const getUser = async() => {
        const responce = await fetch('https://api.github.com/users');
        setuser(await responce.json());

    }

    useEffect(() => {
        getUser();
    }, []);
    return ( <
        >
        <
        h2 className = "text-center mt-5" > list of github user < /h2> <
        div className = "container" >
        <
        div className = "row text-center" >

        {
            user.map((curElem) => {
                return ( <
                    div className = "col-10 col-md-4 mt-5" >
                    <
                    div className = "card p-2" >
                    <
                    div className = "d-flex align-item-center" >
                    <
                    div className = "image" >

                    <
                    img src = ""
                    className = "rounded"
                    alt = "loading"
                    width = "155" / >
                    <
                    /div> <
                    div className = "ml-3 w-100" >
                    <
                    h4 className = "mb-0 mt-0 textLeft" > { curElem.login } < /h4> <
                    span className = "textLeft" > web developer < /span> <
                    div className = "p-2 mt-2 bg-primary d-flex justify-content-between rounded text-black stats" >
                    <
                    div className = "d-flex flex-column" >

                    <
                    span className = "articles" > Article < /span> <
                    span className = "number1" > 38 < /span> < /
                    div > <
                    div className = "d-flex flex-column" >

                    <
                    span className = "followers" > followers < /span> <
                    span className = "number2" > 38 < /span> < /
                    div > <
                    div className = "d-flex flex-column" >

                    <
                    span className = "rating" > rating < /span> <
                    span className = "number3" > 38 < /span> < /
                    div > <
                    /div> < /
                    div > <
                    /div> < /
                    div > <
                    /div>
                )
            })
        } <
        /
        div > <
        /div> < / >
    );
};
export default UseEffectAPI;