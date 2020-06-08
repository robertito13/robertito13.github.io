import React from 'react';

import styles from '../styles/header.module.css';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          rvaccaro.com.ar
        </div>
      </header>
    );
  }
}

export default Header;
