import React from 'react';
import store from '../../../stores/products-store';
import { Page } from '../../layout/page/page';
import { Grid, GridItem } from '../../layout/grid/grid';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';
import { CheckButton } from '../../chips/buttons/buttons';
import { FieldGroup, Fiels } from '../../chips/fields/fields';


import './products.css';

const ProductGridItem = (props) => {
  const product = props.product;
  const title = product.title;
  return (
    <GridItem id={product.id} title={title} subtitle={product.description} image={product.image}>

    </GridItem>
  );
}

class Products extends React.Component {

  static propTypes = {
    products: React.PropTypes.array,
    toggleDrawer: React.PropTypes.func,
  }

  defaultProps = {
    products: store.products,
  }

  state = {
    products: this.defaultProps.products,
  }

  renderProduct = (product) => (
    <ProductGridItem product={product} />
  );

  render() {
    return (
      <Page title="Productos" icon="local_offer" toggleDrawer={this.props.toggleDrawer}>
        
        <Grid> {this.state.products.map(this.renderProduct)} </Grid>
           

      </Page>
    );
  }
}

export default Products;
