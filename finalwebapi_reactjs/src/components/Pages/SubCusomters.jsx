import { useEffect, useState } from "react";
import axios from "axios";

export default function SubCusomters() {
    const[customerlist,setCustomer]=useState([]);
    
    const[txtfname,setFname]=useState("");
    const[txtlname,setLname]=useState("");
    const[txtemail,setEmail]=useState("");
    const[txtphone,setPhone]=useState("");
    const[txtid,setId]=useState("");

    function addCustomer(){
        const formData = new FormData();
        formData.append('txtfname', txtfname);
        formData.append('txtlname', txtlname);
        formData.append('txtemail', txtemail);
        formData.append('txtphone', txtphone);

        
        axios.post('http://127.0.0.1:8000/api/addCustomer',formData)
        .then(function (response) {
            if(response.data=="1"){
                alert("Record has been added.");
                window.location.href="/customers";         
            }   
           
        })
        .catch(function (error) {
            if (error.response.status === 401) {
                alert("You do not have permission to do this.");
               }else{
            console.log(error);}
          });
  
    }
  
    useEffect(
          ()=>{
             axios.get('http://127.0.0.1:8000/api/viewCustomer')
             .then(function (response) {
               setCustomer(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
  
          },[]
    );
 

    function updateCustomer(){
        const formData = new FormData();
        formData.append('txtid', txtid);
        formData.append('txtfname', txtfname);
        formData.append('txtlname', txtlname);
        formData.append('txtemail', txtemail);
        formData.append('txtphone', txtphone);
   
        axios.post('http://127.0.0.1:8000/api/updateCustomer', formData)
        .then(function (response) {
            if(response.data=="1"){
               alert("Record has been updated.");
               window.location.href="/customers";            
            }
        })
        .catch(function (error) {
            if (error.response.status === 401) {
                alert("You do not have permission to do this.");
               }else{
            console.log(error);}
          });
         
   
   
     }
     function selectCustomerUpdate(e, customers) {
       setId(customers.id);
       setFname(customers.firstname);    
       setLname(customers.lastname);
       setEmail(customers.email);
       setPhone(customers.phonenumber);

   
    }

    function deleteCustomer(e, customers) {
      
        let id = customers.id;
        var con = window.confirm("Are you sure you want to delete this cusomter?");

            if(con == true){
  
              axios.post('http://127.0.0.1:8000/api/deleteCustomer', {
                txtid:id,
              })
              .then(function (response) {
                if(response.data == 1){
                  alert("Record has been deleted");
                  window.location.href="/customers";
                }
                
              })
              .catch(function (error) {
                if (error.response.status === 401) {
                    alert("You do not have permission to do this.");
                   }else{
                console.log(error);}
              });
  
        }
      
    }
   

    return (
        <>
        <div className="modal fade" id="addcusomterModal" tabindex="-1" aria-labelledby="addcusomterModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addcusomterModalLabel">Add Cusomter</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            First Name: <input type="text" className="form-control" value={txtfname} onChange={(e)=>setFname(e.target.value)}required></input>
                            Last Name: <input type="text" className="form-control" value={txtlname} onChange={(e)=>setLname(e.target.value)} required></input>
                            Email: <input type="email" className="form-control" value={txtemail} onChange={(e)=>setEmail(e.target.value)} ></input>
                            Phone Number: <input type="text"  placeHolder="0XX XXX XXX(X)" maxLength={10} minLength={9} className="form-control" value={txtphone} onChange={(e)=>setPhone(e.target.value)} required></input>
                            
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={addCustomer}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    


    <div className="modal fade" id="updatecusomterModal" tabindex="-1" aria-labelledby="updatecusomterModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="updatecusomterModalLabel">Update Cusomter</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <input type="hidden"  value={txtid} onChange={(e)=>setId(e.target.value)}/>
                            First Name: <input type="text" className="form-control" value={txtfname} onChange={(e)=>setFname(e.target.value)} required></input>
                            Last Name: <input type="text" className="form-control" value={txtlname} onChange={(e)=>setLname(e.target.value)} required></input>
                            Email: <input type="email" className="form-control" value={txtemail} onChange={(e)=>setEmail(e.target.value)} ></input>
                            Phone Number: <input type="text" placeHolder="0xxxxxxxxx" maxLength={10} minLength={9} className="form-control" value={txtphone}  onChange={(e)=>setPhone(e.target.value)} required></input>
                            
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={updateCustomer}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <br />

            <div className="container-fluid px-4">
                <div className="container-fluid row">
            <h3 className="fs-2 col-3">Cusomters</h3>
            <button type="button" className="btn primary-btn   col-2 offset-7 " data-bs-toggle="modal" data-bs-target="#addcusomterModal">
                Add customer
            </button>
        </div>
        <br />
        <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                <thead className="table-light">
                <tr >
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Created Date</th>
                  <th>Updated Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  

                </tr>
                </thead>
                <tbody>
                {customerlist.map((customers) => 
                      <tr>
                          <td>{customers.id}</td>
                          <td>{customers.firstname}</td>
                          <td>{customers.lastname}</td>
                          <td>{customers.email}</td>
                          <td>{customers.phonenumber}</td>
                          <td>{customers.created_at}</td>
                          <td>{customers.updated_at}</td>
                          <td>
                          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#updatecusomterModal"
                           onClick={(e) => selectCustomerUpdate(e, customers)}>
                            Edit
                          </button>  
                          </td>
                          <td>
                              <button type="button" className="btn btn-danger" onClick={(e) => deleteCustomer(e, customers)} >Delete</button>
                          </td>
                      </tr>
                )}
                </tbody>
                </table>
                    </div>
        </div>
        
        </>);
}