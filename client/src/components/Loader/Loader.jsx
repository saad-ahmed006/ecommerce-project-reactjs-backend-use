 import React from 'react'
 import loading from '../../assets/833.gif'
 import './Loader.scss'
 export default function Loader() {
   return (
     <div className='Loader'>
      <img src={loading} alt="loading" />
     </div>
   )
 }
 