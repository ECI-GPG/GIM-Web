import React from 'react';
import CartButton from '../cart/app-cart-button';
import AppActions from '../../actions/app-actions';

export default (props) => {
  return (
    <tr>
      <td><CartButton txt="x" /></td>
      <td>{props.item.id}</td>
      <td>{props.item.state}</td>
    </tr>
  )
}
