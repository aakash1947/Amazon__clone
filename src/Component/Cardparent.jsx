import React from 'react'
import Cardbox from './Cardbox'


const Cardparent = () => {
    return (
        <div >
            <div className='main' style={{

                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: '10px',



            }}>
                <Cardbox />
                <Cardbox />
                <Cardbox />
                <Cardbox />

                <Cardbox />
                <Cardbox />
                <Cardbox />
                <Cardbox />


            </div>

        </div>
    )
}

export default Cardparent
