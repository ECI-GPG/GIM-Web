import AppConstants from '../constants/app-constants';

const ProductsAPI = {

  products: [],

  init() {
    for (let i = 1; i < 30; i++) {
      this.products.push({
        'id': 'P' + i,
        'title' : 'EASY WEAR',
        'description' : 'Camiseta de mujer Easy Wear con encaje y canesu',
        'image' : '/img/products/producto'+ ((i % 4)+1) +'.jpg',
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
