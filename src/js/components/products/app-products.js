import {Page} from '../layout/page';
import Card from '../layout/app-card';
import React from 'react';
import Styles from './app-products.css';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

const products = (props) => {
  var items = AppStore.getProducts();
  return { items: items}
}

const Product = (props) => {

    return (
      <Card icon="tags" title={props.item.name} subtitle={props.item.id}>
        ...
      </Card>
    )
}

const ProductList = (props) => {

  let products = props.items.map( item => {
    return <Product item={item}/>
  });

  return (
    <Page title="Products" icon="local_offer" toggleDrawer={props.toggleDrawer}>
      <div className="boxer">{products}</div>
    </Page>
  );
}

export default StoreWatchMixin(ProductList, products);
