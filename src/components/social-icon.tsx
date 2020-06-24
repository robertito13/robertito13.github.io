import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faGoodreads,
  faLastfm,
  faLinkedin,
  faStackOverflow,
  faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/social.module.scss';

enum SocialNetwork {
  CodePen,
  FreeCodeCamp,
  GitHub,
  Goodreads,
  LastFM,
  LinkedIn,
  StackOverflow,
  Twitter
}

type SocialNetworkStrings = keyof typeof SocialNetwork;

interface OwnProps {
  type: SocialNetworkStrings,
  id: string;
}

class SocialIcon extends React.Component<OwnProps> {
  render(): JSX.Element {
    let icon = faExclamationCircle;
    let url = `#`;
    let title = `Unknown`;

    switch (this.props.type) {
      case `CodePen`:
        icon = faCodepen;
        url = `http://codepen.io/${this.props.id}/`;
        title = `CodePen`;
        break;
      case `FreeCodeCamp`:
        icon = faFreeCodeCamp;
        url = `https://www.freecodecamp.org/${this.props.id}`;
        title = `FreeCodeCamp`;
        break;
      case `GitHub`:
        icon = faGithub;
        url = `https://github.com/${this.props.id}`;
        title = `GitHub`;
        break;
      case `Goodreads`:
        icon = faGoodreads;
        url = `https://www.goodreads.com/user/show/${this.props.id}`;
        title = `Goodreads`;
        break;
      case `LastFM`:
        icon = faLastfm;
        url = `https://www.last.fm/user/${this.props.id}`;
        title = `Last.fm`;
        break;
      case `LinkedIn`:
        icon = faLinkedin;
        url = `https://www.linkedin.com/in/${this.props.id}/`;
        title = `LinkedIn`;
        break;
      case `StackOverflow`:
        icon = faStackOverflow;
        url = `https://stackoverflow.com/users/${this.props.id}/`;
        title = `Stack Overflow`;
        break;
      case `Twitter`:
        icon = faTwitter;
        url = `https://twitter.com/${this.props.id}`;
        title = `Twitter`;
        break;
    }

    return (
      <div className={styles.socialIcon}>
        <a href={url} title={title}><FontAwesomeIcon icon={icon} /></a>
      </div>
    );
  }
}

export default SocialIcon;
