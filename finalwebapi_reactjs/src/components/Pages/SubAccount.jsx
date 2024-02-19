import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";

export default function SubAccount() {
    const[txtuser,setUser]=useState([]);
    
    const[txtname,setName]=useState("");
    const[txtpass,setPass]=useState("");
    const[txtemail,setEmail]=useState("");

    function addUser(){
      let name1 = txtname;
      let password1 = txtpass;
      let email1 = txtemail;
       
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then( res=> {
        axios.post('http://127.0.0.1:8000/api/register',{
        name: name1,
        password: password1,
        email: email1})
        .then(function (response) {
            if(response.data.status="200"){
              
              localStorage.setItem('auth_token',response.data.token)
              localStorage.setItem('auth_name',response.data.username)

              alert("Record has been added.");
             }
        })
        .catch(function (error) {
          console.log(error);
        })
        });
  
    }
  return (
    <>
     <div className="modal modal-lg fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row d-flex justify-content-center align-items-center h-10">
                          <div className="col col-xl-10">
                            <div className="" style={{borderRadius: "1rem"}}>
                              <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                  alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}/>
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                  <div className="card-body p-4 p-lg-5 text-black">
                                    <form>
                                      <div className="d-flex align-items-center mb-3 pb-1">
                                        <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}}></i>
                                        <span className="h1 fw-bold mb-0">Logo</span>
                                      </div>
                                      <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                                      <div className="form-outline mb-4">
                                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                        <label className="form-label" for="form2Example17">Email address</label>
                                      </div>

                                      <div className="form-outline mb-4">
                                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                        <label className="form-label" for="form2Example27">Password</label>
                                      </div>

                                      <div className="pt-1 mb-4">
                                        <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                      </div>

                                      <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                                      style={{color: "#393f81"}}  data-bs-target="#registerModal" data-bs-toggle="modal">Register here</a></p>
                                      </form>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>                 
                </div>
            </div>
        </div>


  <div class="modal fade" id="registerModal" aria-hidden="true" aria-labelledby="registerModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Register </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="">
                Name: <input type="text" className="form-control" value={txtname} onChange={(e)=>setName(e.target.value)}></input>
                Email: <input type="text" className="form-control" value={txtemail} onChange={(e)=>setEmail(e.target.value)}></input>
                Password: <input type="password" className="form-control" value={txtpass} onChange={(e)=>setPass(e.target.value)}></input>

      </form> 
      </div>
      <div class="modal-footer">
      <button class="btn btn-primary"  onClick={addUser}>regester</button>

        <button class="btn btn-primary" data-bs-target="#loginModal" data-bs-toggle="modal" onClick={addUser}>Back to first</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
