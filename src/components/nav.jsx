import React from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Nav = () => {
    return (
        <div className='nav'>
            <div className='SWlogo'/>
            <div className='navLinkBox'>
                <a href='#'>Why Saleswhale?</a>
                <a href='#'>Product</a>
                <a href='#'>Company</a>
            </div>
            <div className='loginButtonBox'>
                <button className='buttonOutline'>Log in</button>
                <button className='buttonBlue'>Get a Demo</button>
            </div>
        </div>
    )
}

export default Nav