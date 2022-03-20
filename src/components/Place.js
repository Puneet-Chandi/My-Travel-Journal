import React from 'react'
import point from '../images/location-point.png'

export default function Place(props){
    console.log(props.placeInfo.imageUrl);
    return(
        <div className='site-container'>
            <img src={props.placeInfo.imageUrl} />
            <div className='site-info'>
                <div className='site-loc'>
                    <img src={point}  /> 
                    <span>{props.placeInfo.location.toUpperCase()}</span>
                    <a href={props.placeInfo.googleMapsUrl} target='_blank'><u>View on Google Maps</u></a>
               </div>
                <h1>{props.placeInfo.title}</h1>
                <h3>{props.placeInfo.startDate}- {props.placeInfo.endDate}</h3>
                <p>{props.placeInfo.description}</p>
            </div>
            
            
         
            
        </div>
    )
}