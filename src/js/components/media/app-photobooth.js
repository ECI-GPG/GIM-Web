import React from 'react';
import {Page} from '../layout/page';
import BrowserDetection from 'react-browser-detection';
import PhotoBooth from './photobooth';

const BrowserHandler = {
  default : (browser) => <PhotoBooth/>,
  safari : () => <input type="file" accept="image/*;capture=camera" />
};

const PhotoBoothPage = (props) => {
  return (
    <Page title="Camera" to="/inbox">
      <BrowserDetection>
        {BrowserHandler}
      </BrowserDetection>
    </Page>
  );
}

export default PhotoBoothPage;
