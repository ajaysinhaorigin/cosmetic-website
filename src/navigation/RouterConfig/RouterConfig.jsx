import React from 'react'
import './RouterConfig.css';
import pages from '../../pages';
import { Routes,Route } from "react-router-dom";
import {categories} from '../../components/Categories.jsx'

 function RouterConfig() {
  return (
    <>
    <Routes>
        {/* <Route path="/" element={<pages.Main />}></Route> */}
        {/* <Route path='category/2' element={<pages.ShopBy/>} />
        <Route path='category/1'  element={<pagesCategory/>} />
        <Route path='category/3' element={<pages.Category/>} />
        <Route path='category/4' element={<pages.Category/>} />
        <Route path='category/5' element={< pages.Category/>} />
        <Route path='category/6' element={<pages.Category/>} />
        <Route path='category/7' element={<pages.Category/>} />
        <Route path='category/8' element={<pages.Category/>} />
        <Route path='category/9' element={<pages.Category/>} />
        <Route path='category/10' element={<pagesCategory/>} /> */}
        {
        categories.map((category)=>{
          return (
             <React.Fragment key={category.id}>
                 <Route path="category/:categoryId" element={<pages.Category/>} />
             </React.Fragment>
          )
         })
      }
      </Routes>   
    </>
  )
}
export default RouterConfig