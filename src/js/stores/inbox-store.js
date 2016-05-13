import AppConstants from '../constants/app-constants';
import StoreFactory from '../mixin/storeFactory';
import Shipments from '../api/api-shipment';

const model = {
  tab : 'OPENED',
  filter : { criteria : 'STATE', value : ''},
  shipments : Shipments.getAllFilterByState('OPENED')
};

var handlers = (model) => {
  return {

    [AppConstants.INBOX.SELECT_TAB]: (action) => {
      Object.assign( model, { tab: action.payload});
      const shipments = Shipments.getAllFilterByState(model.tab);
      Object.assign( model, { shipments: shipments});
    },

    [AppConstants.INBOX.FILTER_SHIPMENTS]: (action) => {
      Object.assign(model.filter, action.payload);
      const shipments =
        model.filter.value === "" ?
          Shipments.getAllFilterByState(model.tab) :
            Shipments.filter(model.filter.criteria, model.filter.value);
      Object.assign(model, { shipments: shipments});
    }

  }
};

const InboxStore = StoreFactory(model, handlers);
export default InboxStore;
