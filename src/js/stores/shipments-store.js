import Shipments from '../api/api-shipment';

const ShipmentsStore = {

  departments : {
    Compras: { initial: 'Co', color: '#EAA' },
    Almacen: { initial: 'Al', color: '#AAE' },
    'Oficina Internacional': { initial:'OI', color:'#AEA' },
    Marketing: { initial: 'Ma', color: '#EEE' },
    Centros: { initial: 'Ce', color: '#EE0' },
  },

  selector : [
    { label: '...', value: '', disabled: true },
    { label: 'Department', value: 'origin.department' },
    { label: 'Contact', value: 'origin.contact' },
    { label: 'Origin', value: 'origin.city' },
    { label: 'Send Date', value: 'dateSent' },
  ],

  shipments: [],
  shipment: null,
  filter: {
    tab: 'ALL',
    criteria: '',
    value: '',
  },

  selectTab(tab, cb) {
    this.filter.tab = tab;
    this.reloadShipments(cb);
  },

  changeFilter(newFilter, cb) {
    Object.assign(this.filter, newFilter);console.log(this.filter)
    this.reloadShipments(cb);
  },

  reloadShipments(cb) {
    this.shipments = Shipments.getAllFilterByState(this.filter);
    if (cb)
      cb(this);
  },
};

ShipmentsStore.reloadShipments();
export default ShipmentsStore;

/*
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
      Object.assign(model, { shipments: shipments });
    },

    [AppConstants.INBOX.SELECT_SHIPMENT]: (action) => {
      Object.assign(model.list, {selected: action.payload});
      const shipment = Shipments.getById(action.payload);
      const nextShipment = shipment === -1 ? null : shipment;
      if (nextShipment) {
        Object.assign(model, { shipment: nextShipment });
      }
    },

    [AppConstants.INBOX.NEW_CHECKIN]: () => {
      const newShipment = Shipments.create();
      Object.assign(model, { shipment: newShipment });
    },
  };
};

const InboxStore = storeFactory(model, handlers);
export default InboxStore;
*/
