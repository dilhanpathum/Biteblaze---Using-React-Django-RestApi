import React from 'react'
import "../../styles/Admin.css"
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import AuthforAdmin from '../../components/Layouts/AuthforAdmin'
import {useEffect, useState } from "react";
import axios from 'axios';

export const Admin = () => {
    const [response, setResponse] = useState([]);
  
    useEffect(() => {
      Load();
    }, []);
  
    async function Load() {
      try {
        const result = await axios.get("http://127.0.0.1:8000/api/users");
        setResponse(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }
  
    async function DeleteUser(id) {
      await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
      alert("User deleted Successfully");
      Load();
    }

  return (
    <>
    <AuthforAdmin/>
    <Header/>
    <div id="wrapper" className='adminTable'>
        <div className="d-flex flex-column" id="content-wrapper" style={{background: '#2d2f3e'}}>
            <div id="content" style={{color: '#2D2F3E'}}>
                <div className="container-fluid" style={{ marginBottom: '50px'}}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 justify-content-end d-flex">
                            <h3 className="text-white mb-4 justify-content-center">Admin Dashboard</h3>
                        </div>
                        <div className="col-12 col-sm-2 col-md-2 text-end" style={{marginBottom: '30px'}}><a
                                className="btn text-white" style={{backgroundColor:'#f77a27'}} role="button" href='/signup'><i class="fa fa-plus"></i>ADD USER</a></div>
                                <div className="col-12 col-sm-2 col-md-2 text-center" style={{marginBottom: '30px'}}><a
                                className="btn text-white" style={{backgroundColor:'#f77a27'}} role="button" href='/adminsignup'><i class="fa fa-plus"></i>ADD ADMIN USER</a></div>
                                <div className="col-12 col-sm-2 col-md-2 " style={{marginBottom: '30px'}}><a
                                className="btn text-white" style={{backgroundColor:'#f77a27'}} role="button" href='/addfood'><i class="fa fa-plus"></i>ADD FOOD</a></div>
                    </div>
                    <div className="card" id="TableSorterCard" style={{borderStyle: 'none',borderRadius: '6.5px'}}>
                        <div className="card-header py-3" style={{borderWidth: '0px',background: 'rgb(23,25,33)'}}>
                            <div className="row table-topper align-items-center">
                                <div className="col-12 col-sm-5 col-md-6 text-start" style={{margin: '0px',padding: '5px 15px'}}>
                                    <p className="m-0 fw-bold" style={{color: 'rgb(255,255,255)'}}></p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="" style={{borderTopStyle: 'none',background: '#171921',marginTop:'-120px'}}>
                                    <table className="table table-striped table tablesorter" id="ipi-table">
                                        <thead className="thead-dark"
                                            style={{background: 'rgb(33,37,48)',borderWidth: '0px',borderColor: 'rgb(0,0,0)',borderBottomColor: '#21252F'}}>
                                            <tr
                                                style={{borderStyle: 'none', borderColor : 'rgba(255,255,255,0)' , background: '#21252f'}}>
                                                <th className="text-center">ID</th>
                                                <th className="text-center">Full Name</th>
                                                <th className="text-center">Username</th>
                                                <th className="text-center">Email</th>

                                                <th className="text-center filter-false sorter-false">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center" style={{ borderTopWidth: '0px' }}>
          {response.map((user) => (
            <tr key={user.id} style={{ background: '#262a38' }}>
              <td className='text-center' style={{ color: 'rgb(0,0,0)' }}>{user.id}</td>
              <td className='text-center' style={{ color: 'rgb(0,0,0)' }}>{user.email}</td>
              <td className='text-center' style={{ color: 'rgb(0,0,0)' }}>{user.fullname}</td>
              <td className='text-center' style={{ color: 'rgb(0,0,0)' }}>{user.username}</td>
              <td className="text-center align-middle" style={{ maxHeight: '60px', height: '60px' }}>
                <a className="btn btnMaterial btn-flat success semicircle" role="button" href="#" style={{ color: 'rgb(0,197,179)' }}>
                  <i className="bi bi-eye-fill text-primary"></i>
                </a>
                <a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style={{ marginLeft: '5px' }} data-bs-toggle="modal" data-bs-target="#delete-modal" href="#">
                  <i className="bi bi-trash3-fill text-danger" onClick={() => DeleteUser(user.id)}></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div> 
    
    <Footer/>
    </>
  )
}

export default Admin
