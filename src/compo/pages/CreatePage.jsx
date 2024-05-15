import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/users", formData)
      .then((response) => {
        // Assuming response is successful
 
        toast.success("Added Successfully");
        
      })
      .catch((error) => {
        
        toast.error("Failed to add user");

      });
  }

  return (
    <div>
      <h1 className='text-center text-3xl'>CRUD OPERATION</h1>

      <form className='container mt-5' onSubmit={handleSubmit}>
        <Link className="btn btn-secondary mb-4" to={"/Table"}>Back</Link>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="number" className="form-control" id='phone' onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePage;
