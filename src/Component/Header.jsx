import React from 'react'

const Header = (props) => {
    return <div>
        <header>
            <h1>{props.title}</h1>
            <img src={props.img} alt="" srcset="" />
            <p>{props.message}</p>
        </header>
    </div>
    
}

export default Header