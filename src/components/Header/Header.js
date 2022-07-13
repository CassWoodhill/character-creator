import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
 return (
  <header className={styles.header}>
   <h1 className={styles.title}>Create your Character</h1>
   <p className={styles.description}>
    Customize your character's look and style using the controls below. What
    sort of adventure will you embark on?{' '}
   </p>
  </header>
 );
};

export default Header;
