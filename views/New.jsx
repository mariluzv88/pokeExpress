import React from 'react'

function New() {
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
        <a style={nav}href='/'>Home</a><br/><br/>
      <a style={nav}href='/pokemon'>Back</a><br/>
        <h1>Create a New Pokemon</h1><br/><hr/>
        <form action='/pokemon' method='POST'>
         Name : <input type='text' name='name'/>
         Image: <input type='text' name="img"/><br/><br/>
         <input  style={nav}type="submit" name="" value="Create Pokemon"/>
        </form>
    </div>
  )
}

export default New