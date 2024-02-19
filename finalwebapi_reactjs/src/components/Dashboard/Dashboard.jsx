import React from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import SubDashboard from './SubDashboard';
import './styles.css'

function Dashboard() {
  return (
    <div>
      <div class="d-flex" id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Navigation/>
                <SubDashboard/>
            </div>
       </div>

    </div>
  )
}
export default Dashboard;