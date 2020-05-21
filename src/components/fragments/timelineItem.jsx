import React from 'react'

const TimeLineItem = (props) => {

    return (
        <div className='timeLineItem'>
            <p className='itemYear'>{props.year}</p>
            <div className='timeLineImg'/>
            <p className='itemDesc'>{props.description}</p>
        </div>
    )
}

export default TimeLineItem