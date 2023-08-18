import React from 'react'

function New() {
  return (
    <div>
        <form action='/pokemon' method='POST'>
         Name : <input type='text' name='name'/>
         Image: <input type='text' name="img"/>
         <input type="submit" name="" value="Create Pokemon"/>
        </form>
    </div>
  )
}

export default New