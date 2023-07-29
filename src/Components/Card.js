import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        
        <img className='card-img' alt='world' src={`../Images/${props.items.imageUrl}`}/>
            <div className='card-info'>
                <div className='card-header'>
                    <img alt='logo' className='location-logo' src='../Images/location.png'/>
                    <p className='card-location'>{props.items.location}</p>
                    <a className='card-map' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className='card-title'>{props.items.title}</h1>
                <p className='card-date'>{props.items.startDate} - {props.items.endDate}</p>
                <p className='card-text'>{props.items.description}</p>
           </div>  
    </div>
  )
}

export default Card