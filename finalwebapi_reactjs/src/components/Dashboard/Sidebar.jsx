import React from 'react'
import './styles.css';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
       
        
  return (
    <div>
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>Coffee</div>
            <div className="list-group list-group-flush my-3">
                <NavLink to="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                <NavLink to="/customers" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-project-diagram me-2"></i>Customers</NavLink>
                <NavLink to="/products" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-chart-line me-2"></i>Products</NavLink>
                <NavLink to="/categories" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-shopping-cart me-2"></i>Category</NavLink>
                
                
                {/* <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-gift me-2"></i>Products</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-comment-dots me-2"></i>Chat</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-map-marker-alt me-2"></i>Outlet</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        className="fas fa-power-off me-2"></i>Logout</a> */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar;