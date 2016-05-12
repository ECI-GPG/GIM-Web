import AppConstants from '../constants/app-constants';
import StoreFactory from '../mixin/storeFactory';
import Shipments from '../api/api-shipment';

const model = {
  tab : 'OPENED',
  shipments : Shipments.getAllFilterByState('OPENED')
};

var handlers = (model) => {
  return {
    [AppConstants.INBOX.SELECT_TAB]: (action) => {
      const shipments = Shipments.getAllFilterByState(action.payload);
      Object.assign(model,{tab:action.payload, shipments: shipments});
    }
  }
};

const InboxStore = StoreFactory(model, handlers);
export default InboxStore;
