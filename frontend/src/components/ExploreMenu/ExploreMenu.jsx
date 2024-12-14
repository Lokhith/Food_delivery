// by using setCategory in onlick we will make sure that whenever a food is selected it wills tore in usestate
// and active make sure that whenever each menu is selected that will become active

import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className = "explore-menu"  id = "explore-menu">
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose a diverse menu featuring a huge variety of dishes which is popular and most liked across various parts of the world </p>
      <div className = "explore-menu-list">
        {menu_list.map((item,index) => {
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key = {index} className = "explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src = {item.menu_image} alt = "" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}

      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu