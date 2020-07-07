import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';

import SocialIcon from './social-icon';

import styles from '../styles/sidebar.module.scss';

interface OwnProps {
  filterFn: (query: string) => void,
}

interface OwnState {
  filterSelected: string;
}

class Sidebar extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      filterSelected: `none`,
    };
  }

  render(): JSX.Element {
    const filterLinks = () => {
      this.props.filterFn(`type=links`);
      this.setState({ filterSelected: `links` });
    };

    const filterPosts = () => {
      this.props.filterFn(`type=posts`);
      this.setState({ filterSelected: `posts` });
    };

    const filterCerts = () => {
      this.props.filterFn(`type=certificates`);
      this.setState({ filterSelected: `certificates` });
    };

    const filterClear = () => {
      this.props.filterFn(``);
      this.setState({ filterSelected: `none` });
    };

    const cx = classNames.bind(styles);

    return (
      <aside className={styles.sidebar}>
        <header><Link to='/'>rvaccaro</Link></header>
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
          <button className={cx({
            filterButton: true,
            active: this.state.filterSelected === `none`,
          })} onClick={filterClear}>Todos</button>
          <button className={cx({
            filterButton: true,
            active: this.state.filterSelected === `links`,
          })} onClick={filterLinks}>Enlaces</button>
          <button className={cx({
            filterButton: true,
            active: this.state.filterSelected === `posts`,
          })} onClick={filterPosts}>Posts</button>
          <button className={cx({
            filterButton: true,
            active: this.state.filterSelected === `certificates`,
          })} onClick={filterCerts}>Certificados</button>
        </section>
        <section className={styles.last}>

        </section>
      </aside>
    );
  }
}

export default Sidebar;
