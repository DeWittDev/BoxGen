import React, { useState } from 'react';

const Forms = (props) => {

const [color, setColor] = useState("");
const [size, setSize] = useState(0+"px");
const {boxes, setBoxes} = props;

const submitting = (e) => {
    e.preventDefault()
    console.log(boxes)
    setBoxes([...boxes, {
        color: color,
        width: size
        }
    ])
}



    return(
        <div>
            <form onSubmit = {submitting}>
                <label>Color:</label>
                <input onChange={ (e) => setColor(e.target.value)} type="text" />

                <label>Size:</label>
                <input onChange={ (e) => setSize(e.target.value + 'px')} type="number" />

                <button>Submit</button>
            </form>
        </div>
    )

}

export default Forms;