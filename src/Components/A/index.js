import React, { PropTypes } from 'react';
import './styles.css';

function A(props) {
  return (
    <a className='link' { ...props }>
      { props.children }
    </a>
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default A;
