import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Navigation from '../Dashboard/Navigation'
import SubDashboard from '../Dashboard/SubDashboard'
import SubProduct from './SubProduct'

export default function Products() {
  return (
  <>
    <div class="d-flex" id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Navigation/>
                <SubProduct/>           
            </div>
    </div>
     
  </>
  )
}
