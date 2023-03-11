import React, { useState } from 'react'
import styles from '../css/Album.module.css'
import { Link } from 'react-router-dom'
import img from '../images/home.jpeg'


const Header = (props) => {
  return (
    <div className='mb-3 pt-2 container-fluid '>
      <div className='row'>
        <div className='col-md-9'>    
          <h3><span className='mr-2'><img width={30} src={img}></img></span><Link className='text-decoration-none text-warning' to={"/"}>My Albums</Link></h3>
        </div>
        <div className='col-md-3 cursor-pointer hidden-md'>
          <select className={`px-3 bg-warning ${styles.pointer}`} onChange={(e)=>props.changeOrder(e.target.value)}>
           <option value={true}>Sort By Title Asc</option>
           <option value={false}>Sort By Title Desc</option>
          </select>
        </div>  
      </div>
    </div>
  )
}

export default Header