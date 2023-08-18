import React from 'react'
// import pokemon from '../models/pokemon'
function Index(props) {
    const pokemon = props.pokemon
   
    // id = pokemon
  return (
    <div>
        <h1>See all of the Pokemon</h1>
        {pokemon.map((mon,i)=>{
           
            return(
                <div key={i}>
                 
                <a href={`/pokemon/${mon._id}`}>
                        
                       
                        {/* <h1>{i}</h1> */}
                        <h3>{mon.name.toUpperCase()}</h3>
                        <img src={mon.img + '.jpg'} />
                    
                </a>
                </div>
            )
        })}
         
       
    </div>
  )
}

export default Index