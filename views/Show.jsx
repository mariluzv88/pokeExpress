import React from 'react'
// import pokemon from '../models/pokemon'
function Show(props) {
    const pokemon = props.pokemon
  return (
    <div>
        <nav>
            <a href='/pokemon'>Back</a>
        </nav>
         <div>
        <h1>See all of the Pokemon</h1>
       <h1>GOTTA CATCH THEM ALL</h1>
     
       <h2>{pokemon.name.toUpperCase()}</h2>
       <img src={pokemon.img +'.jpg'}/>
         </div>
       
    </div>
  )
}

 

export default Show