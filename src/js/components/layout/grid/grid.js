import React from 'react';
import { Icon, Button } from '../../chips/buttons/buttons';
import './grid.css';

const Avatar = ({color, initial}) => (
  <div className="flex center centred" style={{color: '#000', backgroundColor: color, borderRadius: '10rem', width: '3.6rem', height: '3.6rem'}}>
    {initial}
  </div>
);

const GridItem = ({ id, title, subtitle, info, icon, image, children, selected, onSelected }) => {

  const handleSelected = () => {
    onSelected(id);
  };

  const renderImage = () => <img src={image} width="100%"/>;
  const renderIcon = () => <Icon icon={icon} />;
  const renderDecorator = image ? renderImage() : icon ? renderIcon(): '';

  return (
    <li className={`griditem animated-fast ${selected}`} onClick={handleSelected} >
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

const Grid = (props) => {
  return (
    <div className="grid">
      <div className="body">{props.children}</div>
    </div>
  );
};

export { Grid, GridItem };
