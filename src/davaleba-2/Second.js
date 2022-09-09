import React, { useState } from 'react'
import ChildUser from './ChildUser.js'



const Second = () => {
    const [users, SetUsers] = useState([])
   let age =Math.floor(Math.random() * 50) + 10;

   let id = Math.floor(Math.random() * 50) + 10;


    const handleAdd = ()=>{
        SetUsers(prev=>[...prev,
            {
            name:'user',
            age: age,
            id: id
        }])
        
    }
    console.log(users)


  return (
    <div>
        

      
   <ChildUser users={users} SetUsers={SetUsers} ager={age}/>
    <button className='add'   onClick={()=>handleAdd()}>add</button>
        </div>
  )
}

export default Second
