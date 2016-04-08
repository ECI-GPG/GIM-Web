import React from 'react'
import CartSummary from './app-cartsummary';

export default () => {
  return (
    <div className="mui-appbar" style={{borderBottom: '1p solid #ccc'}}>
      <div><h1>SampleBook</h1><h4>Shipment</h4></div>
      <div>
        <CartSummary/>
      </div>
    </div>
  );
}
