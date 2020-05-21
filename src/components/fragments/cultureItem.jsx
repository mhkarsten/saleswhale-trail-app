import React from 'react'

const CultureItem = (props) => {

    return (
        <div>
            <div className='cultureIcon'/>
            <div>
                <h3>{props.itemTitle}</h3>
                <p>
                    {props.itemBody}
                </p>
            </div>
        </div>
    )
}

export default CultureItem