import React from 'react';
import { Link } from 'gatsby';

import SocialIcon from './social-icon';

import styles from '../styles/sidebar.module.scss';

class Sidebar extends React.Component {
  render(): JSX.Element {
    return (
      <aside className={styles.sidebar}>
        <header><Link to='/'>rvaccaro.com.ar</Link></header>
        <section className={styles.social}>
          <SocialIcon type="CodePen" id="rvaccaro" />
          <SocialIcon type="FreeCodeCamp" id="robertito13" />
          <SocialIcon type="GitHub" id="robertito13" />
          <SocialIcon type="Goodreads" id="112815172" />
          <SocialIcon type="LastFM" id="rvaccaro" />
          <SocialIcon type="LinkedIn" id="rvaccaro85" />
          <SocialIcon type="StackOverflow" id="4467281" />
          <SocialIcon type="Twitter" id="robertitov13" />
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
