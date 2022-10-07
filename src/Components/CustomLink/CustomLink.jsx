import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CustomLink = ({value, onItemClick, itemActive}) => {
  const {to, label} = value;
  let clazz = "";
  if(itemActive === label){
    clazz += 'nav_link_first'
  }
 
  return (
    <ul>
    <li className={clazz}>
      <Link to={`/${to}`} onClick={() => onItemClick(label)}>{label}</Link>
    </li>
    </ul>
);
}
CustomLink.propTypes = {
  children: PropTypes.any,
  value: PropTypes.object,
  onItemClick: PropTypes.func,
  itemActive: PropTypes.string
};

export default CustomLink;