import React from 'react'

const InfoItem = (props) => {

    const investorFill = () => {
        return (
            <div>
                <div className={props.investorName}/>
            </div>
        )
    }

    const officeFill = () => {
        return (
            <div>
                <div className='officeIcon'/>
                <h2>{props.location}</h2>
                <p>{props.address}</p>
            </div>
        )
    }

    return (
        <div>
            {
                props.type === 'investor' ?
                investorFill() :
                officeFill()
            }
        </div>
    )
}

export default InfoItem