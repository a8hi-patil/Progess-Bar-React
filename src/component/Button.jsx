import React from 'react'

const Button = ({ value, bgColor }) => {
    if (bgColor == 'white') {
        return (
            <button style={{ backgroundColor: bgColor, color: 'black' }} >{value}</button>
        )
    } else if (bgColor === 'black') {
        return (
            <button style={{ backgroundColor: bgColor, color: 'white' }} >{value}</button>
        )
    }
    else {
        return (
            <button style={{ backgroundColor: bgColor }} >{value}</button>
        )
    }

}

export default Button