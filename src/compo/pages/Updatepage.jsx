import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Updatepage = () => {
  const { id } = useParams();
  const navigate= useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, formData)
      .then((res) => {
       
        toast.info("Updated successfully");

      })
      .catch((error) => {
        console.error('Error updating user:', error);
        toast.error("Failed to update");
      });
  };
  
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handelnack(){
    navigate("/Table")

  }

  return (
    <div>
      <div>
        <h1 className='text-center text-3xl'>Edit Table</h1>
        
        <form className='container mt-5' onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" value={formData.name} onChange={handleChange} className="form-control" name="name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" value={formData.email} onChange={handleChange} className="form-control" name="email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" value={formData.phone} onChange={handleChange} className="form-control" name='phone' />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
          <button onClick={handelnack} className="btn btn-secondary m-3">Go Back</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
    
  );
};

export default Updatepage;
