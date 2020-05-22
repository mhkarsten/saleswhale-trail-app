import React from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = (props) => {

    return (
        <section className='footerBody'>
            <div className='linkSection docWidth'>
                <div className='SWLogoBox' style={{marginRight: 'auto'}}>
                    <div className='SWlogo footerLogo' />
                </div>
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
                    <p className='miniTitle' style={{marginTop: 0}}>Contact</p>
                    <a href='mailto:hello@saleswhale.com' className='miniDesc'>hello@saleswhale.com</a>
                    <p className='miniTitle'>US Office</p>
                    <p className='miniDesc'>1701 Rhode Island Ave NW Washington, DC 20036</p>
                    <p className='miniTitle'>Singapore Office</p>
                    <p className='miniDesc'>155B Telok Ayer Street Singapore, 068611</p>
                </div>
            </div>
            <div className='footerEnd docWidth'>
                <div className='privacyBox'>
                    <div className='termsBox'>
                        <a href='#'>Privacy</a>
                        <a href='#'>Terms</a>
                    </div>
                    <p>© 2020 Saleswhale, Inc. All rights reserved.</p>
                </div>
                <div className='socialBox'>
                    <a href='https://www.facebook.com/saleswhaleio/' className='facebookIcon socialIcon'> </a>
                    <a href='https://twitter.com/saleswhaleio' className='twitterIcon socialIcon'> </a>
                    <a href='https://www.linkedin.com/company/saleswhale/' className='linkedInIcon socialIcon'> </a>
                </div>
            </div>
        </section>
    )
}

export default Footer