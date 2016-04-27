import CartAPI from '../api/api-cart';
import ProductAPI from '../api/api-products';
import ShipmentAPI from '../api/api-shipment';
import AppConstants from '../constants/app-constants';
import {EventEmitter } from 'events';
import {dispatch, register} from '../dispatchers/app-dispatcher';

const CHANGE_EVENT = "change"

const AppStore = Object.assign(EventEmitter.prototype, {

  emitChange(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on( CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener( CHANGE_EVENT, callback);
  },

  getShipments() {
    return ShipmentAPI.getAll();
  },

  getShipment() {
    return ShipmentAPI.getShipment();
  },

  getCart() {
    return CartAPI.cartItems;
  },

  getCatalog() {
    return CartAPI.getCatalog();
  },

  getCartTotals() {
    return CartAPI.cartTotals();
  },

  getProducts() {
    return ProductAPI.getAll();
  },

  dispatcherIndex: register( function (action) {

    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        ShipmentAPI.add(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        ShipmentAPI.remove(action.item);
        break;
      case AppConstants.INCREASE_ITEM:
        CartAPI.increaseItem(action.item);
        break;
      case AppConstants.DECREASE_ITEM:
        CartAPI.decreaseItem(action.item);
        break;
    }

    AppStore.emitChange();
  })
});

export default AppStore
