import AppConstants from '../constants/app-constants';
import storeFactory from '../mixin/storeFactory';
import Shipments from '../api/api-shipment';

const model = {
  tab: 'ALL',
  filter: { criteria: '', value: '' },
  list: { selected: null },
  shipments: Shipments.getAllFilterByState('ALL'),
  shipment: null,
};

const handlers = (model) => {
  return {

    [AppConstants.INBOX.SELECT_TAB]: (action) => {
      Object.assign(model, { tab: action.payload });
      let newShipments = [];
      if (model.tab === 'ALL') {
        newShipments = Shipments.getAll();
      } else {
        newShipments = Shipments.getAllFilterByState(model.tab, model.filter.criteria, model.filter.value);
      }
      Object.assign(model, { shipments: newShipments });
    },

    [AppConstants.INBOX.FILTER_SHIPMENTS]: (action) => {
      Object.assign(model.filter, action.payload);
      const shipments = Shipments.getAllFilterByState(model.tab, model.filter.criteria, model.filter.value);
      Object.assign(model, { shipments: shipments});
    },

    [AppConstants.INBOX.SELECT_SHIPMENT]: (action) => {
      Object.assign(model.list, {selected: action.payload});
      const shipment = Shipments.getById(action.payload);
      const nextShipment = shipment === -1 ? null : shipment;
      model.shipment = nextShipment;
    },

    [AppConstants.INBOX.NEW_CHECKIN]: () => {
      const newShipment = Shipments.create();
      Object.assign(model, { shipment: newShipment });
    },
  };
};

const InboxStore = storeFactory(model, handlers);
export default InboxStore;
