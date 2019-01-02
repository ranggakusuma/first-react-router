import React, {Fragment} from 'react'

export default ({id, name, born, deceased, description, image}) => 
  <Fragment>
    <img src={image} alt={id} style={{maxWidth: 300}}/>

    <h1>{name}</h1>

    <h3>{born} &mdash; {deceased}</h3>

    <p>{description}</p>
  </Fragment>