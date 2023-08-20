import React from 'react'

function Edit(props) {
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
        <a style={nav} href='/'>Home</a><br/><br/>
      <a style={nav}href='/pokemon'>Back</a><br/>
        <h1>Edit {pokemon.name}</h1><br/><hr/>
        <form action={`/pokemon/${pokemon._id}?method=PUT`} method='POST'>
         Name : <input type='text' name='name' defaultValue={pokemon.name}/>
         Image: <input type='text' name="img" defaultValue={pokemon.img}/><br/><br/>
         <input  style={nav}type="submit" name="" value="Update Pokemon"/>
        </form>
    </div>
  )
}

export default Edit