import AppConstants from '../constants/app-constants';

const ShipmentAPI = {

  shipments: [],

  init() {
    console.log('loading shipments');
    for (let i = 1; i < 30; i++) {
      this.shipments.push({
        'id': 'Shipment' + i,
        'state': AppConstants.SHIPMENT_STATE[Object.keys(AppConstants.SHIPMENT_STATE)[(i%4)]],
        'dateCreated': new Date(),
        'dateClosed': new Date(),
        'dateSent': new Date(),
        'dateEstimatedReception': new Date(),
        'dateReceived': new Date(),
        'samples': []
      });
    }
    console.table(this.shipments)
  },

  getAll() {
    return this.shipments.map(item => {
      return Object.assign({}, item);
    });
  },

  getAllFilterByState(state) {
    return this.shipments
      .filter(item => item.state === state)
        .map(item => Object.assign({}, item));
  },

  getShipment() {
    return {
      'id': '12345678',
      'bar-code': '',
      'timeline' : [
        { 'event': 'created', 'date': new Date(), 'author':'John Smith'},
        { 'event': 'closed', 'date': new Date(), 'author':'John Smith'},
        { 'event': 'send', 'date': new Date(), 'author':'Mary Higgins'}
      ]
    }
  },

  add(item) {
    this.shipments.push(Object.assign({dateCreated: new Date()},item));
  },

  remove(item) {
    this.shipments.splice( this.shipments.findIndex( i => i === item ), 1);
  }

}

ShipmentAPI.init();
export default ShipmentAPI;

/*  sample model
{
  'id': 'Shipment' + i,
  'providerId': '#provider_' + i,
  'orderId': '#order_'+i,
  'division': '#division_'+i,
  'uneco': '#uneco_'+i,
  'ref':'#ref_'+i,
  'brand':'#brand_'+i,
  'season':'#season_'+i,
  'qty':'#qty_'+i,
  'sampleType':'#sampleType_'+i,
  'description':'This is the shipment number '+i
}
*/
