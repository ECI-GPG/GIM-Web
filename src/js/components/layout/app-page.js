import React from 'react';
import Header from './app-header';

const Page = (props) => {
  return (
    <div className="page">
      <Header title={props.title} icon={props.icon} to={props.to} toggleDrawer={props.toggleDrawer}/>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Page;
