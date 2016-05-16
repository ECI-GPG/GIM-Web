import AppConstants from '../constants/app-constants';
import _ from 'lodash';

const ShipmentAPI = {

  count : 30,

  shipments: [],

  _shipment(id) {
    return {
      'id': 'Shipment' + id,
      'courrier': null,
      'orderId' : null,
      'state': 'CLOSED',
      'dateCreated': null,
      'dateClosed': null,
      'dateSent': null,
      'dateEstimatedReception': null,
      'dateReceived': null,
      'origin': null,
      'samples': [],
      'observations':[],
      'agency': null,
      'issues':[],
      'origin':{
        'city':null,
        'contact':null
      }
    }
  },

  init() {

    let origins = [
      { initial:'NY', city : 'New York', contact : 'Joan Kim'},
      { initial:'P' , city : 'Paris', contact : 'Laurent Blanc'},
      { initial:'M' , city : 'Milan', contact : 'Giovanni Vitale'},
      { initial:'B' , city : 'Barcelona', contact : 'Xavier Tarradellas'},
      { initial:'L' , city : 'London', contact : 'Elizabeth Holmes'},
      { initial:'T' , city : 'Tokio', contact : 'Hatori Hanzo'}
    ]

    for (let i = 1; i < this.count; i++) {
      let shipment = this._shipment(i);
      Object.assign(shipment, {
        'state': AppConstants.SHIPMENT_STATE[Object.keys(AppConstants.SHIPMENT_STATE)[(i%5)]],
        'dateCreated': new Date(),
        'dateClosed': new Date(),
        'dateSent': new Date(),
        'dateEstimatedReception': new Date(),
        'dateReceived': new Date(),
        'origin': origins[i%6],
        'samples': []
      });
      this.shipments.push(shipment);
    }

    console.table(this.shipments)
  },

  create() {
    return this._shipment(this.count++);
  },

  getAll() {
    return this.shipments.map(item => {
      return Object.assign({}, item);
    });
  },

  getAllFilterByState(state, criteria, value) {
    const shipments = criteria ? this.filter(criteria, value) : this.shipments;
    return shipments
      .filter(item => item.state === state)
        .map(item => Object.assign({}, item));
  },

  filter(criteria, value) {
    return this.shipments
      .filter(item => {
        return _.get(item, criteria).toUpperCase().indexOf(value.toUpperCase())>-1});
  },

  getById(id) {
    return this.shipments.filter((item) => item.id === id)[0] || -1;
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
