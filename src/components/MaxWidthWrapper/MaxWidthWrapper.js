import React from 'react';

import styles from './MaxWidthWrapper.module.css';

const MaxWidthWrapper = ({ children, className = '', ...delegated }) => {
 return (
  <div className={`${styles['container']} ${className}`} {...delegated}>
   {children}
  </div>
 );
};

export default MaxWidthWrapper;
