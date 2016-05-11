import React from 'react';
import AppActions from '../../actions/app-actions';
import SearchBox from '../search/app-search';
import {Link} from 'react-router';
import {Icon, Button} from './button';
import {browserHistory} from 'react-router';

const Header = (props) => {

    let toggleDrawer = () => {
      props.toggleDrawer();
    }

    let goBack = () => {
      console.log(props.to)
      browserHistory.push(props.to);
    }

    let goSearch= () => {
      browserHistory.push("search");
    }

    let searchButton = (<Button id="search-button" icon="search" onClick={goSearch}/>);
    let icon         = props.to ? "" : (<Icon id="header-icon" icon={props.icon}/>);
    let drawerButton = props.to ? "" : (<Button id="drawer-button" icon="menu" onClick={toggleDrawer}/>);
    let backButton   = props.to ? (<Button id="back-button" icon="arrow_back" onClick={goBack}/>) : "";

    return (
      <header>{drawerButton} {backButton} {icon} <span className="title">{props.title}</span> {searchButton}</header>
    );

}

export default Header;
