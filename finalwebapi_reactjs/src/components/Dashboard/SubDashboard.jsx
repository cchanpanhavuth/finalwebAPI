import React from 'react';
import './styles.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import SubOrder from '../Pages/SubOrders';


function SubDashboard() {
    const[customerlist,setCustomer]=useState([]);
    const[productlist,setProcuct]=useState([]);
    const[orderlist,setOrders]=useState([]);

    useEffect(
        ()=>{
           axios.get('http://127.0.0.1:8000/api/viewOrder')
           .then(function (response) {
             setOrders(response.data);
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
         setProcuct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    },[]
);


  return (
    <div>
        
        <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-4">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">{productlist.length}</h3>
                                <p className="fs-5">Products</p>
                            </div>
                            <i className="primary-text border rounded-full secondary-bg p-3"> <img src="/cup-hot-fill.svg"></img></i>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">{orderlist.length}</h3>
                                <p className="fs-5">Orders</p>
                            </div>
                            
                            <i className="primary-text border rounded-full secondary-bg p-3"> <img src="/clipboard-data-fill.svg"></img></i>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">{customerlist.length}</h3>
                                <p className="fs-5">Cusomters</p>
                            </div>
                            <i className="primary-text border rounded-full secondary-bg p-3"> <img src="/file-person-fill.svg"></img></i>

                           
                        </div>
                    </div>

                </div>

                <SubOrder></SubOrder>

            </div>
    </div>
  );
}
export default SubDashboard;