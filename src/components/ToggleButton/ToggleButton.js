import React from 'react';

import styles from './ToggleButton.module.scss';

const ToggleButton = ({ label, color, children, isSelected, ...delegated }) => {
 return (
  <button
   {...delegated}
   aria-pressed={isSelected}
   className={styles['toggle-button']}
   style={{ backgroundColor: color }}
  >
   <span className="visually-hidden">{label}</span>
   {children}
  </button>
 );
};

export default ToggleButton;
