import React from 'react'

const TimeLineItem = (props) => {

    return (
        <div>
            <p>{props.year}</p>
            <div className='timeLineImg'/>
            <p>{props.description}</p>
        </div>
    )
}

export default TimeLineItem