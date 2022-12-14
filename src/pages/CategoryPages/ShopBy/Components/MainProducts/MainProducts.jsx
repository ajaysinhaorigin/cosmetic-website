import React from 'react'
import "./MainProducts.css";
import { Exfoliate } from './Products/Exfoliate';
import { BeautyConsultation } from './Products/BeautyConsultation';

export const MainProducts = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
          <div className='col-6 sm-col-12'>
              <Exfoliate/>
          </div>
          <div className='col-6 sm-col-12' >
              <BeautyConsultation/>
          </div>
      </div>
    </div>
    </>
  )
}