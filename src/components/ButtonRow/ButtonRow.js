import React from 'react';

import styles from './ButtonRow.module.scss';

const ButtonRow = ({ children }) => {
 return <div className={styles['button-row']}>{children}</div>;
};

export default ButtonRow;
