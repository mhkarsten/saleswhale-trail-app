import React from 'react'

import CultureItem from './fragments/cultureItem'

const Culture = (props) => {


    return (
        <section>
            <div>
                <h1>Our Culture</h1>
                <p>At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process. </p>
            </div>
            <div>
                <CultureItem itemTitle='Building for the future'
                             itemBody='We always challenge the status quo and work hard innovating on a product that not only works, 
                                       but changes the game for our users.'/>
                <CultureItem itemTitle='Propmoting trust & transparency'
                             itemBody='We remain completely open, honest and transparent with everyone. This has allowed us to build 
                                       strong relationships with each other.'/>
                <CultureItem itemTitle='Achieving our best'
                             itemBody='We believe the success of the company lies within our employees and we constantly challenge 
                                       each other to learn and level up.'/>
            </div>
            <div>
                <p>If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
                <button>Join the team</button>
            </div>
        </section>
    )
}

export default Culture