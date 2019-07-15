import React from 'react';
import Title from '../Title';
import PropTypes from 'prop-types';
import './index.scss';

function InfoContainer({ children, title, className }) {
  const classes = `InfoContainer ${className}`;

  return (
    <div className={classes}>
      {title && <Title level="4">{title}</Title>}
      {children}
    </div>
  );
}

InfoContainer.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default InfoContainer;
