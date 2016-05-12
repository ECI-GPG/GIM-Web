import {EventEmitter } from 'events';

const CHANGE_EVENT = "change";

const eventBus = function (handlers) {
  return {

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
      const doAction = handlers[action.actionType];
      if(typeof doAction === 'function') {
        doAction(action);
        bus.emitChange();
      }
    })

  };
})

const state = (model) => {
  getState() { return Object.assign({}, model);
}

const storeFactory = function( model, handlers ) {
  return Object.assign( EventEmitter.prototype, bus(handlers(model)), state(model));
}

export default storeFactory();
