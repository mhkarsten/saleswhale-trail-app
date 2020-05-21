import React from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = (props) => {

    return (
        <section className='footerBody'>
            <div className='linkSection'>
                <div className='linkBox'>
                    <p>Why Saleswhale</p>
                    <a href='#'>Collaborative Intelligence</a>
                    <a href='#'>AI Assistant Capabilities</a>
                    <a href='#'>Customer Stories</a>
                    <a href='#'>Use Case-Technology</a>
                    <a href='#'>Use Case-Education</a>
                    <a href='#'>Use Case-Events</a>
                </div>
                <div className='linkBox'>
                    <p>Product</p>
                    <a href='#'>AI Conversations</a>
                    <a href='#'>Lead Enrichment</a>
                    <a href='#'>Deal Intelligence</a>
                    <a href='#'>Workflow Integration</a>
                </div>
                <div className='linkBox'>
                    <p>Company</p>
                    <a href='#'>About US</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Resources</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Help Centre</a>
                </div>
                <div className='contactBox'>
                    <p>Contact</p>
                    <a href='#'>hello@saleswhale.com</a>
                    <p>US Office</p>
                    <p>1701 Rhode Island Ave NWWashington, DC 20036</p>
                    <p>Singapore Office</p>
                    <p>155B Telok Ayer Street Singapore, 068611</p>
                </div>
            </div>
            <div className='footerEnd'>
                <div>
                    <a>Privacy</a>
                    <a>Terms</a>
                </div>
                <div>
                    <a className='facebookIcon'> </a>
                    <a className='twitterIcon'> </a>
                    <a className='linkedInIcon'> </a>
                </div>
            </div>
        </section>
    )
}

export default Footer