import React from 'react';

class ImportForm extends React.Component {

  render() {
    return (

      <form>
        <div className="input-textfield">
          <input type="text"></input>
        </div>
      </form>

    );
  }
}

ImportForm.propTypes = {
  'id': React.propType.string,
  'state': React.propType.string,
  'dateCreated': React.propType.string,
  'dateClosed': React.propType.string,
  'dateSent': React.propType.string,
  'dateEstimatedReception': React.propType.string,
  'dateReceived': React.propType.string
}

ImportForm.defaultProps = {

}

export default ImportForm;
