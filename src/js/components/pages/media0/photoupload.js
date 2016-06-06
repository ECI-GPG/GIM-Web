import React from 'react';
import { Page } from '../../layout/page/page';
import { FAB,  } from '../../chips/buttons/buttons';

class PhotoUpload extends React.Component {

  readImage = (file, callback) => {
    var FR= new FileReader();
    FR.onload = callback;
    FR.readAsDataURL(file);
  };

  snapshot = (event) => {

    const file = event.target.files[0];
    const ctx = this.canvas.getContext('2d');

    this.readImage(file, (event) => {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img,0,0, 800, 450);
      };
      img.src = event.target.result;
    })

    this.setState({
      shooting : false,
      photo : this.canvas.toDataURL('image/webp')
    });
  };

  render() {
    return (
      <Page title="Load Images" to="/1">
        <div className="flex expand vertical dossier justified" >
          <header className="flex expand center centred" style={{maxHeight:'8rem'}}>
            <input type="file" name="file" id="file" accept="image/*;capture=camera" onChange={this.snapshot} className="inputfile"/>
            <label for="file">
            <input type="file" name="file" id="file" accept="image/*;capture=camera" onChange={this.snapshot} className="inputfile"/>
            Choose a file...
            </label>
          </header>
          <div className="flex expand vertical center centred" style={{maxHeight:'600px'}}>
            <canvas id="canvas" width="800" height="450" ref={(ref) => this.canvas = ref} />
          </div>
          <div className="flex vertical center centred" >

            <textarea className="mui-textfield" placeholder="Observaciones..." style={{ minWidth: '30rem', minHeight:'12rem', width:'60rem'}}></textarea>
          </div>
          <header className="flex expand center centred" style={{maxHeight:'8rem'}}>

          </header>
          <FAB icon="done" to="/1" />
        </div>
      </Page>
    );
  }
}

export default PhotoUpload;
