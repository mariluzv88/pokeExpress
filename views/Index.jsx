import React from 'react'
// import pokemon from '../models/pokemon'
function Index(props) {
    const pokemon = props.pokemon
    const myStyle = {
      color: "red",
      backgroundColor:"black",
      fontSize:'25px',
      fontFamily:"Verdana",
      textAlign:"center",
}
    const nav = {
      color: "yellow",
      backgroundColor:"black",
      fontSize:'20px',
      fontFamily:"Verdana",
      textAlign:"center",
      textDecoration:"none",
      
}
    // id = pokemon
  return (
    <div style={myStyle} >
      <a style={nav}href='/'>Home</a><br/><br/>
      <a  style={nav}href='/pokemon/new'>Create a Pokemon</a><br/>
        <h1>See all of the Pokemon</h1><br/><hr/>
        {pokemon.map((mon,i)=>{
           
            return(
                <div key={i}>
                 
                <a style={nav} href={`/pokemon/${mon._id}`}>
                        
                       
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