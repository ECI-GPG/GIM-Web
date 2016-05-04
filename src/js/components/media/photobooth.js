import React from 'react';
import styles from './photobooth.css';

class PhotoBoot extends React.Component {

  constructor() {
    super();
    this.state = {
      shooting : true,
      photo : null
    };
    this.attachMediaSrc = this.attachMediaSrc.bind(this);
    this.snapshot = this.snapshot.bind(this);
    this.print = this.print.bind(this);
  }

  componentDidMount() {
    navigator.getMedia = (navigator.getUserMedia
      || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia
      || navigator.msGetUserMedia);
    navigator.getMedia( {video:true, audio:false}, this.attachMediaSrc, console.log);

  }

  attachMediaSrc(localMediaStream) {
    this.setState({ src : window.URL.createObjectURL(localMediaStream)});
  }

  snapshot() {
    // DOM
    this.ctx = this.canvas.getContext('2d');
    this.ctx.drawImage(this.video,0,0, 640, 480);
    this.setState({
      shooting : false,
      photo : this.canvas.toDataURL('image/webp')
    });
  }

  print() {
    alert(this.state.photo)
    if (this.state.photo && typeof this.props.print === 'function' )
      this.props.print(this.state.photo);
    this.setState({ shooting: true });
  }

  render() {

    let videoClass   = this.state.shooting ? '' : 'hidden';
    let canvasClass  = this.state.shooting ? '' : 'active';
    let buttonIcon   = this.state.shooting ? 'photo_camera' : 'done';
    let buttonAction = this.state.shooting ? this.snapshot : this.print;

    return (
      <div>
        <video autoPlay className={videoClass} src={this.state.src} ref={(ref) => this.video = ref}/>

        <canvas className={canvasClass} width="640" height="480" ref={(ref) => this.canvas = ref}/>

        <button className="mui-btn mui-btn--accent mui-btn--fab" onClick={buttonAction}>
          <i className="material-icons">{buttonIcon}</i>
        </button>

      </div>
    )
  }
}

export default PhotoBoot;
