import React from 'react'


const Card = (props) => {
	return(
		<div className="card" onClick={props.onClickCard}>
           <img src={props.src} alt="cover" />
           <div className="cardText">
           <h3>{props.title}</h3>
           <p>{props.artist}</p>
           </div>
         </div>
	)
}

export default Card