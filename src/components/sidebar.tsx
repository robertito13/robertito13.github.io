import React from 'react';

import styles from '../styles/sidebar.module.scss';

class Sidebar extends React.Component {
  render(): JSX.Element {
    return (
      <aside className={styles.sidebar}>
        <header>rvaccaro.com.ar</header>
        <section className={styles.social}>

        </section>
        <section className={styles.categories}>

        </section>
        <section className={styles.last}>

        </section>
      </aside>
    );
  }
}

export default Sidebar;
