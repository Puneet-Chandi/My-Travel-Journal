import React from 'react'
import globe from '../images/globe.png'

export default function Navbar(){
    return(
            <nav className='container-nav'>
                <img src={globe}/>
                <span>my travel journal.</span>
            </nav>
    )
}