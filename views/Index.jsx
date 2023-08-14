import React from 'react'

function Index(props) {
    const pokemon = props.pokemon
  return (
    <div>
        <h1>See all of the Pokemon</h1>
        {pokemon.map((mon,i)=>{
           
            return(
                <div key={i}>
                    <ul>
                        
                        <li>
                        {mon.id}
                        <h3>{mon.name}</h3>
                    </li>
                </ul>
                </div>
            )
        })}
         
       
    </div>
  )
}

export default Index