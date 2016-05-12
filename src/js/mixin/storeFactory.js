import {EventEmitter } from 'events';
import {dispatch, register} from '../dispatchers/app-dispatcher';

const CHANGE_EVENT = "change";

const state = (model) => {
  return {
    getState() {
      return Object.assign({}, model);
    }
  }
}

const storeFactory = (model, handlers) => {

  let store = Object.assign(EventEmitter.prototype, {

    emitChange(){
      this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      this.removeListener( CHANGE_EVENT, callback);
    },

    dispatcherIndex: register( function (action) {
      const doAction = handlers(model)[action.actionType];
      if(typeof doAction === 'function') {
        doAction(action);
        store.emitChange();
      }
    })
  }, state(model));

  return store;
}

export default storeFactory;
