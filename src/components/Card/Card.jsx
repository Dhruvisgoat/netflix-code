import React from 'react'
import './Card.scss'

export default function Card(props) {
    return (
        <div>
            <div className='Card'>
                <img src={props.img} />
                <div className='opacity'>
                    <h3>{props.title}</h3>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
