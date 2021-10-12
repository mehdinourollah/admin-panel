import React,{useState} from 'react'

export default function Input({ value,onChange, id, label, type, placeholder }) {

    const classes = {
        inputContainer: "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={(event)=>onChange(event.target.value)}
                type={type}
                className={classes.inputContainer}
                id={id}
                placeholder={placeholder}
            />
        </div>
    )
}
