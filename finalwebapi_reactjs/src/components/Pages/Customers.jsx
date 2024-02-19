import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Navigation from '../Dashboard/Navigation'
import SubDashboard from '../Dashboard/SubDashboard'
import SubUsers from './SubCusomters'

export default function Cusomters() {
  return (
  <>
    <div class="d-flex" id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Navigation/>
                <SubUsers/>

                
            </div>
       </div>
  </>
  )
}
