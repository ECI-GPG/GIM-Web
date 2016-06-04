import products from '../api/products-api';

const productStore = {
  products: products.getAll(),
};

export default productStore;
