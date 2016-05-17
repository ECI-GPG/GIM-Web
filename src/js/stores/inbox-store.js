import AppConstants from '../constants/app-constants';
import StoreFactory from '../mixin/storeFactory';
import Shipments from '../api/api-shipment';

const model = {
  tab : 'OPENED',
  filter : { criteria : '', value : ''},
  list : {
    selected : null
  },
  shipments : Shipments.getAllFilterByState('OPENED'),
  shipment: null
};

var handlers = (model) => {
  return {

    [AppConstants.INBOX.SELECT_TAB]: (action) => {
      Object.assign( model, { tab: action.payload});
      const shipments = Shipments.getAllFilterByState(model.tab, model.filter.criteria, model.filter.value);
      Object.assign( model, { shipments: shipments});
    },

    [AppConstants.INBOX.FILTER_SHIPMENTS]: (action) => {
      Object.assign(model.filter, action.payload);
      const shipments =
        model.filter.value === "" || model.filter.criteria === "" ?
          Shipments.getAllFilterByState(model.tab) :
            Shipments.getAllFilterByState(model.tab, model.filter.criteria, model.filter.value);
      Object.assign(model, { shipments: shipments});
    },

    [AppConstants.INBOX.SELECT_SHIPMENT]: (action) => {
      Object.assign(model.list, {selected: action.payload});
      const shipment = Shipments.getById(action.payload);
      const nextShipment = shipment === -1 ? null : shipment;
      model.shipment = nextShipment;
    },

    [AppConstants.INBOX.NEW_CHECKIN]: (action) => {
      const shipment = Shipments.create();
      Object.assign(model, {shipment: shipment});
    }

  }
};

const InboxStore = StoreFactory(model, handlers);
export default InboxStore;
