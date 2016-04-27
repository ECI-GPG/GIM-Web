import AppConstants from '../constants/app-constants';

const ProductsAPI = {

  products: [],

  init() {
    console.log('loading products');
    for (let i = 1; i < 30; i++) {
      this.products.push({
        'id': 'P' + i,
        'name' : 'Product '+i
      });
    }
  },

  getAll() {
    return this.products.map(item => {
      return Object.assign({}, item);
    });
  }
}

ProductsAPI.init();
export default ProductsAPI;
