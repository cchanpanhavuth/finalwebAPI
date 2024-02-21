import axios from 'axios';
import { useEffect, useState } from "react";


function SubOrder() {
    const[orderlist,setOrder]=useState([]);
    const[orderitemslist,setOrderItem]=useState([]);
    const[productlist,setProduct]=useState([]);
    const[customerlist,setCustomer]=useState([]);

    const[txtcus,setCus]=useState("");
    const[txtpro,setPro]=useState("");

    const[txtqty,setQty]=useState("");
    const txtuid = localStorage.getItem('auth_id');


  useEffect(
    ()=>{
       axios.get('http://127.0.0.1:8000/api/viewOrderItems')
       .then(function (response) {
         setOrderItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    },[]
);

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

useEffect(
    ()=>{
       axios.get('http://127.0.0.1:8000/api/viewProduct')
       .then(function (response) {
         setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    },[]
);

function deleteOrder(e, orders) {
      
    let id = orders.id;
    var con = window.confirm("Are you sure you want to delete this order?");

        if(con == true){

          axios.post('http://127.0.0.1:8000/api/deleteOrder', {
            txtid:id,
          })
          .then(function (response) {
            if(response.data == 1){
              alert("Record has been deleted");
              window.location.href="/";
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

  function addOrder(){
      const formData = new FormData();
      formData.append('txtproduct', txtpro);
      formData.append('txtqty', txtqty);
      formData.append('txtcustomer', txtcus);
      formData.append('txtuser', txtuid);

      
      axios.post('http://127.0.0.1:8000/api/addOrder',formData)
      .then(function (response) {
          if(response.data=="1"){
              alert("Record has been added.");
              window.location.href="/";            
           }
      })
      .catch(function (error) {
          if (error.response.status === 401) {
              alert("You do not have permission to do this.");
             }else{
          console.log(error);}
        });

  }
  



  return (
    <>
    <div className="modal fade" id="addOrderModal" tabindex="-1" aria-labelledby="addOrderModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addOrderModalLabel">Add Order</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                        <input type="hidden"  value={txtuid}/>
                            Select Product:
                                <select required className='form-control' value={txtpro} onChange={(e)=>setPro(e.target.value)}>
                                    <option>Select Product</option>
                                    {productlist.map((products)=>{
                                        return(
                                            <option value={products.id} key={products.id}>{products.product_name}</option>)
                                    }
                                    )}
                                </select>
                              Quantity: <input required type="number" className="form-control" value={txtqty} onChange={(e)=>setQty(e.target.value)}></input>

                              Select Customer:
                                <select required className='form-control' value={txtcus} onChange={(e)=>setCus(e.target.value)}>
                                    <option>Select Customer</option>
                                    {customerlist.map((customers)=>{
                                        return(
                                            <option value={customers.id} key={customers.id}>{customers.id}</option>)
                                    }
                                    )}
                                </select>
                      </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary "onClick={addOrder}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    
    <div>
      <br />
                <div className="container">
                  <div className='row container-fluid'>
                    <h3 className="fs-3 col-3">Recent Orders</h3>
                    
        <button type="button" className="btn primary-btn offset-7 col-2" data-bs-toggle="modal" data-bs-target="#addOrderModal"> Add Order</button>
        </div>
                <br /> 
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Order Date</th>    
                                    <th scope="col">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                            {orderitemslist.map((orderItems) => 
                            <tr>
                          <td>{orderItems.order_id}</td>
                          <td>{orderItems.product_id}</td>
                          <td>{orderItems.quantity}</td>
                          <td>{orderItems.price}</td>
                          <td>{orderItems.total}</td>
                          <td>{orderItems.created_at}</td>

                          
                          <td>
                              <button type="button" className="btn btn-danger" onClick={(e) => deleteOrder(e, orderItems)} >Delete</button>
                          </td>
                      </tr>
                )}
                            </tbody>
                        </table>
                    </div>
                </div>


    </div>
    </>
  );
}
export default SubOrder;