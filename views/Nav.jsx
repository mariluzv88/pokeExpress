import React from 'react'

function Nav() {
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
        <h1>Welcome to PokeExpress</h1><hr/>
        <a style={nav}href='/pokemon'>Pokemon </a>
    </div>
  )
}

export default Nav