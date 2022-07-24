import React from 'react'

export default function Prognosis(props) {
    return (
        <div className="weather-data">
            <p className='date'>{props.date}</p>
            <p>{props.avgtemp_c} °C </p>
            <p>{props.text}</p>
            <img src={props.icon} />
        </div>
    )
}