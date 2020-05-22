import React from 'react'

const InfoItem = (props) => {

    const investorFill = () => {
        return (
            <div className='logo'>
                <div className={props.investorName}/>
            </div>
        )
    }

    const officeFill = () => {
        return (
            <div className='office'>
                <div className='officeIcon'/>
                <h2>{props.location}</h2>
                <p className='textNormal'>{props.address}</p>
            </div>
        )
    }

    return (
        <div className='infoBody'>
            {
                props.type === 'investor' ?
                investorFill() :
                officeFill()
            }
        </div>
    )
}

export default InfoItem