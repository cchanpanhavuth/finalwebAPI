import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";

export default function SubAccount() {
    const[txtuser,setUser]=useState([]);
    const[errorList,setErrorList]=useState([]);
    
    const[txtname,setName]=useState("");
    const[txtpass,setPass]=useState("");
    const[txtemail,setEmail]=useState("");

    function addUser(){
      const Data = {
        name: txtname,
        password: txtpass,
        email: txtemail
      }
       
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then( res=> {
        axios.post('http://127.0.0.1:8000/api/register',Data)
        .then(function (response) {
            if(response.data.status == "200"){
              
              localStorage.setItem('auth_token',response.data.token)
              localStorage.setItem('auth_name',response.data.username)

              alert("Resigteration has been done. You have been sucessfully logged in!");
             }
             else{
              setErrorList(response.data.validation_errors);
             }
        })
        .catch(function (error) {
          console.log(error);
        })
        });
  
    }

    function loginSubmit() {
      const Data = {
        password: txtpass,
        email: txtemail
      }
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then( res=> {
      axios.post('http://127.0.0.1:8000/api/login',Data)
      .then(function (response) {
        if (response.data.status == 200) {
          localStorage.setItem('auth_token',response.data.token)
          localStorage.setItem('auth_name',response.data.username)
          alert("You have sucessfully logged in!");

        }else if(response.data.status == 401){
          alert("Invalid Credentials");
        }else{
          setErrorList(response.data.validation_errors);
        }
      })
    })
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
                                      <label className="form-label" for="form2Example17">Email address</label>

                                        <input type="email" id="form2Example17" className="form-control form-control-lg"  value={txtemail} onChange={(e)=>setEmail(e.target.value)}/>
                                        <span>{errorList.email}</span>
                                      </div>
                                      

                                      <div className="form-outline mb-4">
                                      <label className="form-label" for="form2Example27" >Password</label>
                                        <input type="password" id="form2Example27" className="form-control form-control-lg "value={txtpass} onChange={(e)=>setPass(e.target.value)} />
                                        <span>{errorList.password}</span>

                                      </div>

                                      <div className="pt-1 mb-4">
                                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginSubmit}>Login</button>
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
                <div>
                Name: <input type="text" className="form-control" value={txtname} onChange={(e)=>setName(e.target.value)}></input>
                <span>{errorList.name}</span>
                </div>
                <div>
                Email: <input type="text" className="form-control" value={txtemail} onChange={(e)=>setEmail(e.target.value)}></input>
                <span>{errorList.email}</span>
                </div>
                <div>
                Password: <input type="password" className="form-control" value={txtpass} onChange={(e)=>setPass(e.target.value)}></input>
                <span>{errorList.password}</span>
                </div>


      </form> 
      </div>
      <div class="modal-footer">
      <button class="btn btn-secondary" data-bs-target="#loginModal" data-bs-toggle="modal">Back to Log In Login</button>

        <button class="btn btn-primary" data-bs-target="#registerModal" data-bs-toggle="modal" onClick={addUser}>Register and Login</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
