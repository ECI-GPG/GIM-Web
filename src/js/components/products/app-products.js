import Page from '../layout/app-page';
import React from 'react';
import Styles from './app-products.css';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

const products = (props) => {
  var items = AppStore.getProducts();
  return { items: items}
}

const Product = (props) => {
    return  <div className="box mui-panel">
              <h3>{props.item.id} - {props.item.name}</h3>
              <div className="mui-divider"/>
              <div className="horizontal mui--text-dark-secondary">
                <img src="xxx" alt="product image" width="100"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ...</p>
              </div>
            </div>
}

const ProductList = (props) => {

  let products = props.items.map( item => {
    return <Product item={item}/>
  });

  return (
    <Page title="Products" icon="local_offer">
      <div className="boxer">{products}</div>
    </Page>
  );
}

export default StoreWatchMixin(ProductList, products);
