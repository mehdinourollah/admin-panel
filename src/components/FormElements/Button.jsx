import React from 'react'

const PrimaryButton = ({type, text}) => {
    const classes = {
        btnPrimary: 'bg-green py-2 px-6 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'
    }
    return (
        <button 
            type={type}
            className={classes.btnPrimary}
        >
            {text}
        </button>
    )
}

export {
    PrimaryButton
} 