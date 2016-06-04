import React from 'react';
import { browserHistory, Link } from 'react-router';

import store from '../../../stores/shipments-store';

import Filter from '../../chips/fields/filter';
import { FAB } from '../../chips/buttons/buttons';
import { Page } from '../../layout/page/page';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { List, ListItem } from '../../layout/list/list';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';

class ShipmentListItem extends React.Component {

  handleSelected = () => {
    this.props.onSelected(this.props.shipment.id);
    browserHistory.push('/shipments/'+this.props.shipment.id);
  }

  render() {
    const shipment = this.props.shipment;

    const color = store.departments[shipment.origin.department].color;
    const initial = store.departments[shipment.origin.department].initial;
    const title = '' + shipment.origin.office;
    const selected = (this.props.selected === shipment.id)? "selected" : "unselected";

    return (
      <ListItem id={shipment.id} title={title} selected={selected} onSelected={this.handleSelected} avatar={{ 'color': color, 'initial': initial }}>
        <Link to={`inbox/shipments/${shipment.id}`}>
          <div className="line-info flex centred secondary-text-color">
            <span className="flex centred expand">
              <i className="material-icons small" style={{fontSize:'1.8rem', marginBottom:'2px'}}>location_city</i>
              <span style={{minWidth:'8rem',alignSelf:'flex-end', marginRight:'1rem'}}>{shipment.origin.city}</span>
              <i className="material-icons small" style={{fontSize:'1.8rem', marginBottom:'2px'}}>person</i>
              <span style={{minWidth:'8rem',alignSelf:'flex-end'}}>{shipment.origin.contact}</span>
            </span>
            <span>{shipment.dateCreated.toLocaleDateString()}</span>
          </div>
        </Link>
      </ListItem>
    );
  }
}

class Shipments extends React.Component {

  defaultProps = {
    tab: store.filter.tab,
    filter: store.filter,
    shipments: store.shipments,
  }

  state = {
    tab: this.defaultProps.tab,
    filter: this.defaultProps.filter,
    shipments: this.defaultProps.shipments,
    shipment: null,
  }

  handleTabChanged = (nextTab) => {
    store.selectTab(nextTab, (model) => {
      this.setState({ tab: nextTab, shipments: model.shipments });
    });
  }

  handleFilterChanged = (nextFilter) => {
    store.changeFilter(nextFilter, (model) => {
      this.setState({ filter: model.filter, shipments: model.shipments });
    });
  }

  shipmentSelected(id) {
    alert(id);
  }

  renderShipment = (shipment) =>
    <ShipmentListItem shipment={shipment} onSelected={this.shipmentSelected} />

  render() {

    const listitems = this.state.shipments ?
      this.state.shipments.map(this.renderShipment) : '';

    const viewer = this.state.shipment ?
      (<ShipmentCheckinForm shipment={this.state.shipment} onSave={this.unselect}/>) : '';

    return (
      <Page title="SampleBook" icon="content_copy" toggleDrawer={this.props.toggleDrawer} search="/search">
        <Inbox>
          <InboxList>
            <Tabs onChanged={this.handleTabChanged} className="shadow-bottom">
              <Tab id="ALL" label="All" active={this.state.tab === "ALL"} />
              <Tab id="OPENED" label="In Progress" active={this.state.tab === "OPENED"} />
              <Tab id="CLOSED" label="Done" active={this.state.tab === "CLOSED"} />
            </Tabs>
            <Filter filter={this.state.filter} options={store.selector} onChange={this.handleFilterChanged}/>
            <List> {listitems} </List>
            <FAB icon="add" to="/shipments/new"/>
          </InboxList>
          <InboxViewer> {viewer} </InboxViewer>
        </Inbox>
      </Page>
    );
  }
}

export default Shipments;
