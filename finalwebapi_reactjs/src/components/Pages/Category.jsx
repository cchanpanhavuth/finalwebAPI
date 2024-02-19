import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Navigation from '../Dashboard/Navigation'
import SubCategory from './SubCategory'

export default function Category() {
  return (
  <>
    <div class="d-flex" id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Navigation/>
                <SubCategory/>           
            </div>
    </div>
     
  </>
  )
}