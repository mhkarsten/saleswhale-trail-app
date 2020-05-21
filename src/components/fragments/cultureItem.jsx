import React from 'react'

const CultureItem = (props) => {

    return (
        <div className='cultureItemBody'>
            <div className='cultureIcon'/>
            <div className='CITextBody'>
                <h3>{props.itemTitle}</h3>
                <p className='textNormal'>
                    {props.itemBody}
                </p>
            </div>
        </div>
    )
}

export default CultureItem