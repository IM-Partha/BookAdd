import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Table = () => {
  const [newArray,setnewArray]=useState([])
  const navi = useNavigate()
  const functionapi =  () =>{
    axios.get("http://localhost:3000/users").then((res)=>(
     setnewArray(res.data)
    ))
  }
  useEffect(()=>{
    functionapi()
  },[])


  function handelremove(id){
    axios.delete(`http://localhost:3000/users/${id}`)
    .then((res)=>(
      setnewArray(res.data),
      window.location.reload()
    ))
  }
  function handelUpdate(id){
    navi(`/Updatepage/${id}`)
  }
  return (
    <div className='my-5'>   
      <Link className="btn btn-primary ml-[100px] mt-" to={"/CreatePage"}>Add</Link>
     
      <table className="table container mt-7">

  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
 
      {
        newArray.map((data,index)=>(
          <tr key={index}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td><button className="btn btn-warning" onClick={() =>handelUpdate(data.id)}>Edit</button></td>
          <td><button className="btn btn-danger" onClick={()=>handelremove(data.id)}>Remove</button></td>
          </tr>

        ))
      }
    
  </tbody>
</table>

    </div>
  )
}

export default Table