import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events';

import ProductAPI from '../api/api-products';
import ShipmentAPI from '../api/api-shipment';
import PagesAPI from '../api/api-pages';

const CHANGE_EVENT = "change"

var _inbox = {
  tab : "opened"
}

const AppStore = Object.assign(EventEmitter.prototype, {

  emitChange(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener( CHANGE_EVENT, callback);
  },

  getShipments() {
    return ShipmentAPI.getAll();
  },

  getShipmentsByStatus(state) {
    return ShipmentAPI.getAllFilterByState(state);
  },

  getShipment() {
    return ShipmentAPI.getShipment();
  },

  getProducts() {
    return ProductAPI.getAll();
  },

  getInbox() {
    return PagesAPI.getInbox();
  },

   dispatcherIndex: register( function (action) {

     let actions = {
       [AppConstants.INBOX.GET_SHIPMENTS]: (action) => PagesAPI.setInboxTab(action.status)
     };

     const doAction = actions[action.actionType];
     if(typeof doAction === 'function') {
       doAction(action);
       AppStore.emitChange();
     }
   })
});

export default AppStore
