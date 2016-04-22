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

              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>ID</label>
              </div>

              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>State</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Creation Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Close Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Send Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Estimated Reception Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Reception Date</label>
              </div>
              <Link to="/outbox"><button className="mui-btn">CANCEL</button></Link>
              &nbsp;
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
