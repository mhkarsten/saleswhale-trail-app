import React from 'react'

const Header = () => {

    return (
        <section className='headerBody docWidth'>
            <div className='headerImage'/>
            <div className='headerTextBox'>
                <h1 className='headerTitle textTitle'>
                    A future where AI and humans work hand in hand
                </h1>
                <div className='introText'>
                    <p style={{marginTop: 0}} className=' textNormal'> 
                        At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help 
                        humans fulfil their highest potential by automating drudgery and producing for more effective results.
                    </p>
                    <p className=' textNormal'>
                        AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work 
                        that creates value and inspires. The result? Happier and more productive teams doing meaningful work.
                    </p>
                    <p className=' textNormal'> 
                        Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off 
                        strong addressing this need in marketing and sales teams all across the world.
                    </p>
                    <p style={{marginBottom: 0}} className=' textNormal'>
                        The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header