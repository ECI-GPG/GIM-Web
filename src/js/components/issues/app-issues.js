import React from 'react';
import Page from '../layout/app-page';

const Issues = (props) => {
  return(
    <Page title="Issues" icon="warning" toggleDrawer={props.toggleDrawer}>
      <p>issues</p>
    </Page>
  )
}

export default Issues;
