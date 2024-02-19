import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function SubProduct() {
    const[productlist,setProcuct]=useState([]);
    const[categorylist,setCategory]=useState([]);
    
    const[txtname,setName]=useState("");
    const[txtprice,setPrice]=useState("");
    const[txtcateid,setCateID]=useState("");
    const[txtproid,setProID]=useState("");
    const[txtimg,setImg]=useState([0]);


    function addProduct(){
        const formData = new FormData();
        formData.append('txtname', txtname);
        formData.append('txtcatid', txtcateid);
        formData.append('txtimg', txtimg);
        formData.append('txtprice', txtprice);

        
        axios.post('http://127.0.0.1:8000/api/addProduct',formData)
        .then(function (response) {
            if(response.data=="1"){
                alert("Record has been added.");
                window.location.href="/products";            
             }
        })
        .catch(function (error) {
          console.log(error);
        });
  
    }
    useEffect(
        ()=>{
           axios.get('http://127.0.0.1:8000/api/viewCategory')
           .then(function (response) {
             setCategory(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

        },[]
  );
  
    useEffect(
          ()=>{
             axios.get('http://127.0.0.1:8000/api/viewProduct')
             .then(function (response) {
               setProcuct(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
  
          },[]
    );

    
 

    function updateProduct(){
        const formData = new FormData();
        formData.append('txtname', txtname);
        formData.append('txtcatid', txtcateid);
        formData.append('txtimg', txtimg);
        formData.append('txtprice', txtprice);
        formData.append('txtid', txtproid);
   
        axios.post('http://127.0.0.1:8000/api/updateProduct', formData)
        .then(function (response) {
            if(response.data=="1"){
               alert("Record has been updated.");
               window.location.href="/products";            
            }
        })
         .catch(function (error) {
           console.log(error);
       });
         
   
   
     }
     function selectProductUpdate(e, products) {
       setProID(products.id);
       setName(products.product_name); 
       setCateID(products.category_id);
       setImg(products.image);
       setPrice(products.price);
   
    }

    function deleteProduct(e, products) {
      
        let id = products.id;
        var con = window.confirm("Are you sure you want to delete this product?");

            if(con==true){
  
              axios.post('http://127.0.0.1:8000/api/deleteProduct', {
                txtid:id,
              })
              .then(function (response) {
                if(response.data==1){
                  alert("Record has been deleted");
                  window.location.href="/products";
                }
              })
              .catch(function (error) {
                console.log(error);
              });
  
        }
      
    }
   

    return (
        <>
        <div className="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="addproductModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addproductModalLabel">Add product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            Product Name: <input type="text" className="form-control" value={txtname} onChange={(e)=>setName(e.target.value)}></input>
                            Select Category:
                                <select className='form-control' value={txtcateid} onChange={(e)=>setCateID(e.target.value)}>
                                    <option>Select Category</option>
                                    {categorylist.map((categories)=>{
                                        return(
                                            <option value={categories.id} key={categories.id}>{categories.category_name}</option>)
                                    }
                                    )}
                                </select>
                            Price: <input type="text" className="form-control" value={txtprice} onChange={(e)=>setPrice(e.target.value)}></input>
                            Image: <input type="file" className="form-control" vaule={txtimg} onChange={(e) =>setImg( e.target.files[0])} />
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={addProduct}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>


    <div className="modal fade" id="updateproductModal" tabindex="-1" aria-labelledby="updateproductModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="updateproductModalLabel">Update product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <input type="hidden"  value={txtproid} onChange={(e)=>setProID(e.target.value)}/>
                            Product Name: <input type="text" className="form-control" value={txtname} onChange={(e)=>setName(e.target.value)}></input>
                            Select Category:
                                <select className='form-control' value={txtcateid} onChange={(e)=>setCateID(e.target.value)}>
                                    <option>Select Category</option>
                                    {categorylist.map((categories)=>{
                                        return(
                                            <option value={categories.id} key={categories.id}>{categories.category_name}</option>)
                                    }
                                    )}
                                </select>
                            Price: <input type="text" className="form-control" value={txtprice} onChange={(e)=>setPrice(e.target.value)}></input>
                            Image: <input type="file" className="form-control" vaule={txtimg} onChange={(e) =>setImg( e.target.files[0])} />
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={updateProduct}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
<br/>
        <div className="container-fluid px-4">
                <div className="container-fluid row">
            <h3 className="fs-2 col-3">Products</h3>
            <button type="button" className="btn btn-primary  float-end offset-8 col-1" data-bs-toggle="modal" data-bs-target="#addproductModal">
                Add product
            </button>
        </div>
        <br />
        <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                <thead className="table-light">
                <tr >
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Category ID</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Created Date</th>
                  <th>Updated Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  

                </tr>
                </thead>
                <tbody>
                {productlist.map((products) => 
                      <tr>
                          <td>{products.id}</td>
                          <td>{products.product_name}</td>
                          <td>{products.category_id}</td>
                          <td>{products.price}</td>
                          <td><img src={'http://127.0.0.1:8000/'+products.image} height={'50'} width={50}></img></td>
                          <td>{products.created_at}</td>
                          <td>{products.updated_at}</td>
                          <td>
                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateproductModal"
                           onClick={(e) => selectProductUpdate(e, products)}>
                            Edit
                          </button>  
                          </td>
                          <td>
                              <button type="button" className="btn btn-danger" onClick={(e) => deleteProduct(e, products)} >Delete</button>
                          </td>
                      </tr>
                )}
                </tbody>
                </table>
                    </div>
        </div>
        
        </>);
}
