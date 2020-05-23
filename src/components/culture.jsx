import React from 'react'

import CultureItem from './fragments/cultureItem'

const Culture = () => {

    return (
        <section className='cultureBody docWidth'>
            <div className='cultureTitle'>
                <h1 className='textTitle'>Our Culture</h1>
                <p className='textSubTitle'>At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process. </p>
            </div>
            <div className='cultureItemBox'>
                <CultureItem itemTitle='Building for the future'
                             itemBody='We always challenge the status quo and work hard innovating on a product that not only works, 
                                       but changes the game for our users.'/>
                <CultureItem itemTitle='Propmoting trust & transparency'
                             itemBody='We remain completely open, honest and transparent with everyone. This has allowed us to build 
                                       strong relationships with each other.'/>
                <CultureItem itemTitle='Achieving our best'
                             itemBody='We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.'/>
            </div>
            <div className='cultureBottomDesc'>
                <p className='textSubTitle'>If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
                <button className='buttonBlue'>Join the team</button>
            </div>
        </section>
    )
}

export default Culture