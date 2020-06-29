import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/external-link.module.scss';

interface OwnProps {
  to: string;
}

class ExternalLink extends React.Component<OwnProps> {
  render(): JSX.Element {
    return (
      <div className={styles.externalLink}>
        <a href={this.props.to}>{this.props.children}</a>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </div>
    );
  }
}

export default ExternalLink;
