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

  actions: {
     [AppConstants.ADD_ITEM]: (action) => ShipmentAPI.add(action.item),
     [AppConstants.REMOVE_ITEM]: (action) => ShipmentAPI.remove(action.item),
     [AppConstants.INCREASE_ITEM]: (action) => ShipmentAPI.increaseItem(action.item),
     [AppConstants.DECREASE_ITEM]: (action) => ShipmentAPI.decreaseItem(action.item)
   },

   dispatcherIndex: register( function (action) {
     const doAction = this.actions[action.actionType]
     if(typeof doAction === 'function') {
       doAction();
       AppStore.emitChange();
     }
   })
});

export default AppStore
