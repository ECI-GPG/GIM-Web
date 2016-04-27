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

    let date = new Date().toLocaleDateString();
    return (
      <div className="page">
        <Header title="Shipment Form" to="/outbox"/>
        <main>

          <br/>

          <h4 className="mui--text-dark-secondary">Form</h4>
            <div className="mui-panel">
              <form>
                <br/>
                <div className="formField">
                  <div className="icon"><i className="material-icons">fingerprint</i></div>
                  <div className="input-textfield mui-textfield mui-textfield--float-label">
                    <input type="text" value="12345678" readOnly></input>
                    <label>ID</label>
                  </div>
                  &nbsp;
                  <div className="input-textfield mui-textfield mui-textfield--float-label">
                    <input type="text" value={date} readOnly></input>
                    <label>Creation Date</label>
                  </div>
                </div>

                <div className="formField">
                  <div className="icon"><i className="material-icons">person</i></div>
                  <div className="input-textfield mui-textfield mui-textfield--float-label">
                    <input type="text" value="John Smith"></input>
                    <label>Creator</label>
                  </div>
                </div>

                <div className="formField">
                  <div className="icon"><i className="material-icons">edit</i></div>
                  <div className="input-textfield mui-textfield mui-textfield--float-label">
                    <textarea></textarea>
                    <label>Description</label>
                  </div>
                </div>

                <Link to="/outbox"><button className="mui-btn">CANCEL</button></Link>
                &nbsp;
                <button className="mui-btn">OK</button>
              </form>
            </div>
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
