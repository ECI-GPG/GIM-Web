import React from 'react';
import Page from '../layout/app-page';
import PhotoBooth from './photobooth';

const PhotoBoothPage = (props) => {

  return (
    <Page title="Camera" to="/inbox/reception">
      <PhotoBooth />
    </Page>
  )

}

export default PhotoBoothPage;
