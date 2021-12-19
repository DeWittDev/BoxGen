import React from 'react';

const Display = (props) => {
    const {boxes} = props
    return(
        <div>
            {
                boxes.map((b, index) => (

                    <p style={{
                        margin: '10px',
                        width: b.width,
                        height: b.width,
                        display: 'inline-block',
                        backgroundColor: b.color
                    }}>
                    </p>

                ))
            }
        </div>
    )
}
export default Display;