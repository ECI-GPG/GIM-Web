import React from 'react';
import productStore from '../../../stores/products-store';
import { Page } from '../../layout/page/page';
import { List } from '../../layout/list/list';
import './products.css';

const ProductListItem = (props) => (
  <div className="product">
    product
  </div>
);

class Products extends React.Component {

  static propTypes = {
    products: React.PropTypes.array,
    toggleDrawer: React.PropTypes.func,
  }

  renderProduct = (product) => (
    <ProductListItem product={product} />
  );

  render() {
    return (
      <Page title="Products" icon="local_offer" toggleDrawer={this.props.toggleDrawer}>
        <List>{this.props.products.map(this.renderProduct)}</List>
      </Page>
    );
  }
}

export default Products;
