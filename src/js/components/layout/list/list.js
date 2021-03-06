import React from 'react';
import { Icon, Button } from '../../chips/buttons/buttons';
import './list.css';

const Avatar = ({color, initial}) => (
  <div className="flex center centred" style={{color: '#000', backgroundColor: color, borderRadius: '10rem', width: '3.6rem', height: '3.6rem'}}>
    {initial}
  </div>
);

const ListItemLine = ({text, info}) => {
  return (
    <div className="subtitle">
      <span className="flex expand">{text}</span>
      <span>{info}</span>
    </div>
  );
};

const ListItem = ({ id, title, subtitle, info, icon, avatar, children, selected, onSelected }) => {

  const handleSelected = () => {
    onSelected(id);
  };

  const renderAvatar = () => <Avatar color={avatar.color} initial={avatar.initial}/>;
  const renderIcon = () => <Icon icon={icon} />;
  const renderDecorator = avatar ? renderAvatar() : icon ? renderIcon(): '';

  return (
    <li className={`listitem ${selected}`} onClick={handleSelected} >
      <div className="avatar ">
        {renderDecorator}
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">
          <span className="flex expand">{subtitle}</span>
          <span>{info}</span>
        </div>
        <div className="content">{children}</div>
      </div>
    </li>
  );
};


const List = (props) => {
  return (
    <div className="list">
      <ul>{props.children}</ul>
    </div>
  );
};

export { List, ListItem, ListItemLine };
