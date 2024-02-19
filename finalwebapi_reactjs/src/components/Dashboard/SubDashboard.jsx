import React from 'react';
import './styles.css';
function SubDashboard() {
  return (
    <div>
        
        <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">720</h3>
                                <p className="fs-5">Products</p>
                            </div>
                            <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">4920</h3>
                                <p className="fs-5">Sales</p>
                            </div>
                            <i
                                claclassNamess="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">3899</h3>
                                <p className="fs-5">Delivery</p>
                            </div>
                            <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">%25</h3>
                                <p className="fs-5">Increase</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <h3 className="fs-4 mb-3">Recent Orders</h3>
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Ice Late</td>
                                    <td>Jonny</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Espresso</td>
                                    <td>Kenny</td>
                                    <td>$2.50</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Americano</td>
                                    <td>Jenny</td>
                                    <td>$2.15</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Cappuccino</td>
                                    <td>Killy</td>
                                    <td>$3.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Macchiato</td>
                                    <td>Filly</td>
                                    <td>$2.30</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Mocha</td>
                                    <td>Bumbo</td>
                                    <td>$2.20</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Affogato</td>
                                    <td>Bilbo</td>
                                    <td>$2.20</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Affogato</td>
                                    <td>Frodo</td>
                                    <td>$2.55</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Affogato</td>
                                    <td>Kimo</td>
                                    <td>$2.55</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Affogato</td>
                                    <td>Zico</td>
                                    <td>$2.55</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>Affogato</td>
                                    <td>Jeco</td>
                                    <td>$2.55</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Affogato</td>
                                    <td>Haso</td>
                                    <td>$2.55</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
    </div>
  );
}
export default SubDashboard;