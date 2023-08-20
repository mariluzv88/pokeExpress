import React from 'react'
// import pokemon from '../models/pokemon'
function Show(props) {
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
  return (
    <div style={myStyle}>
        <nav>
        <a style={nav} href='/'>Home</a><br/><br/>
      <a style={nav}href='/pokemon'>Back</a><br/>
        
       <h1>!! {pokemon.name.toUpperCase()} !!</h1><hr/><br/>
        </nav>
         <div>
       
     
       <img src={pokemon.img + '.jpg'} /><br/>
       <a style={nav}href={`/pokemon/${pokemon._id}/edit`}>Edit</a>
       <form action={`/pokemon/${pokemon._id}?_method=DELETE`}method='POST'>
        <input style={nav} type='submit' value='DELETE'/><br/>
       </form>
         </div>
       
    </div>
  )
}

 

export default Show