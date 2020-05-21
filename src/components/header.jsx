import React from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = (props) => {


    return (
        <section>
            <div>
                <div className='headerLogo'/>
                <div>
                    <a href='#'>Why Saleswhale?</a>
                    <a href='#'>Product</a>
                    <a href='#'>Company</a>
                </div>
                <div>
                    <button>Log in</button>
                    <button>Get a Demo</button>
                </div>
            </div>
            <div className='headerImage'/>
            <div>
                <h1>
                    A future where AI and humans work hand in hand
                </h1>
                <p>
                At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help 
                humans fulfil their highest potential by automating drudgery and producing for more effective results.
                AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work 
                that creates value and inspires. The result? Happier and more productive teams doing meaningful work.
                Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off 
                strong addressing this need in marketing and sales teams all across the world.
                The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.
                </p>
            </div>
        </section>
    )
}

export default Header