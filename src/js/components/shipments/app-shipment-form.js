import React from 'react';
import Header from '../layout/app-header';
import {Link} from 'react-router';

class ImportForm extends React.Component {

  constructor() {
    super();
    this.state = {
      'id':'',
      'state':'',
      'dateCreated':''
    }
  }


  render() {
    return (
      <div className="page">
        <Header title="New Shipment" to="/outbox"/>
        <main>
            <div>
              <h2>New Shipment</h2>
            </div>
            <form>
              <div className="input-textfield">
                <input type="text" placeholder="id"></input>
              </div>
              <div className="input-textfield">
                <input type="text" placeholder="state"></input>
              </div>
              <div className="input-textfield">
                <input type="text" placeholder="Date Created"></input>
              </div>
              <div className="input-textfield">
                <input type="text" placeholder="Date Closed"></input>
              </div>
              <div className="input-textfield">
                <input type="text" placeholder="Date Sent"></input>
              </div>
              <div className="input-textfield">
                <input type="text" placeholder="Estimated Reception Date"></input>
              </div>
              <div className="input-textfield">
                <input type="text" placeholder="Date Received"></input>
              </div>
              <Link to="/outbox"><button className="mui-btn">CANCEL</button></Link>
              <button className="mui-btn">OK</button>
            </form>
        </main>
      </div>
    );
  }
}

ImportForm.propTypes = {

}

ImportForm.defaultProps = {

}

export default ImportForm;
