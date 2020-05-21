import React from 'react'

import TimeLineItem from './fragments/timelineItem'

const Progress = (props) => {

    return (
        <section>
            <h1>Our Progress</h1>
            <div>
                <div className='timeLineLine'/>
                <div>
                    <TimeLineItem year='2015' description='Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong'/>
                    <TimeLineItem year='2016' description='Accepted into Y Combinator (S16) and moved to San Francisco'/>
                    <TimeLineItem year='2017' description='Raised US$1.2M in seed funding and hired core engineers'/>
                    <TimeLineItem year='2019' description='Raised US$5.3M in Series A and expanded team size'/>
                    <TimeLineItem year='2020' description='Opened US office in Washington, DC and hired US sales team'/>
                </div>
            </div>
        </section>
    )
}

export default Progress