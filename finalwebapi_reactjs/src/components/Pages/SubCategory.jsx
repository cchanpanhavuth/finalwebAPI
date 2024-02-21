import { useEffect, useState } from "react";
import axios from "axios";

export default function SubCategory() {
    const[categorylist,setCategory]=useState([]);
    
    const[txtname,setName]=useState("");
    const[txtdesc,setDesc]=useState("");
    const[txtcateid,setCateID]=useState("");

    function addCategory(){
        const formData = new FormData();
        formData.append('txtname', txtname);
        formData.append('txtdesc', txtdesc);
        
        axios.post('http://127.0.0.1:8000/api/addCategory',formData)
        .then(function (response) {
            if(response.data=="1"){
                alert("Record has been added.");
                window.location.href="/categories";         
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
             axios.get('http://127.0.0.1:8000/api/viewCategory')
             .then(function (response) {
               setCategory(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
  
          },[]
    );
 

    function updateCategory(){
        const formData = new FormData();
        formData.append('txtid', txtcateid);
        formData.append('txtname', txtname);
        formData.append('txtdesc', txtdesc);
   
        axios.post('http://127.0.0.1:8000/api/updateCategory', formData)
        .then(function (response) {
            if(response.data=="1"){
               alert("Record has been updated.");
               window.location.href="/categories";            
            }
        })
        .catch(function (error) {
            if (error.response.status === 401) {
                alert("You do not have permission to do this.");
               }else{
            console.log(error);}
          });
         
   
   
     }
     function selectCategoryUpdate(e, categories) {
       setCateID(categories.id);
       setName(categories.category_name);    
       setDesc(categories.description);
   
    }

    function deleteCategory(e, categories) {
      
        let id = categories.id;
        var con = window.confirm("Are you sure you want to delete this category?");

            if(con == true){
  
              axios.post('http://127.0.0.1:8000/api/deleteCategory', {
                txtid:id,
              })
              .then(function (response) {
                if(response.data == 1){
                  alert("Record has been deleted");
                  window.location.href="/categories";
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
        <div className="modal fade" id="addcategoryModal" tabindex="-1" aria-labelledby="addcategoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addcategoryModalLabel">Add Category</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            Category Name: <input required type="text" className="form-control" value={txtname} onChange={(e)=>setName(e.target.value)}></input>
                            Description: <input required type="text" className="form-control" value={txtdesc} onChange={(e)=>setDesc(e.target.value)}></input>
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={addCategory}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    


    <div className="modal fade" id="updatecategoryModal" tabindex="-1" aria-labelledby="updatecategoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="updatecategoryModalLabel">Update Category</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <input type="hidden"  value={txtcateid} onChange={(e)=>setCateID(e.target.value)}/>
                            Category Name: <input required type="text" className="form-control" value={txtname} onChange={(e)=>setName(e.target.value)}></input>
                            Description: <input required type="text" className="form-control" value={txtdesc} onChange={(e)=>setDesc(e.target.value)}></input>
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={updateCategory}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <br />

            <div className="container-fluid px-4">
                <div className="container-fluid row">
            <h3 className="fs-2 col-3">Categories</h3>
            <button type="button" className="btn btn-primary col-2 offset-7 " data-bs-toggle="modal" data-bs-target="#addcategoryModal">
                Add category
            </button>
        </div>
        <br />
        <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                <thead className="table-light">
                <tr >
                  <th>ID</th>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>Created Date</th>
                  <th>Updated Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  

                </tr>
                </thead>
                <tbody>
                {categorylist.map((categories) => 
                      <tr>
                          <td>{categories.id}</td>
                          <td>{categories.category_name}</td>
                          <td>{categories.description}</td>
                          <td>{categories.created_at}</td>
                          <td>{categories.updated_at}</td>
                          <td>
                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updatecategoryModal"
                           onClick={(e) => selectCategoryUpdate(e, categories)}>
                            Edit
                          </button>  
                          </td>
                          <td>
                              <button type="button" className="btn btn-danger" onClick={(e) => deleteCategory(e, categories)} >Delete</button>
                          </td>
                      </tr>
                )}
                </tbody>
                </table>
                    </div>
        </div>
        
        </>);
}