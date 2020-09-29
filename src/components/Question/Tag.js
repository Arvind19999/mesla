import React from 'react'
import '../../assets/styles/tags.css'

export default function Tag({btnType}) {
    return (
    <button className={`btn ${btnType} ml-1`}>{btnType}</button>
    )
}
