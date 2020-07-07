import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/link.module.scss';

interface OwnProps {
  to: string;
}

class ExternalLink extends React.Component<OwnProps> {
  render(): JSX.Element {
    return (
      <div className={styles.link}>
        <a href={this.props.to}>{this.props.children}</a>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </div>
    );
  }
}

export default ExternalLink;
