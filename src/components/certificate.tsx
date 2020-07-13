import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

import { fontAwesomeInlineStyles } from '../utils';
import styles from '../styles/link.module.scss';

interface OwnProps {
  to: string;
}

class Certificate extends React.Component<OwnProps> {
  render(): JSX.Element {
    return (
      <div className={styles.link}>
        <Link to={this.props.to}>{this.props.children}</Link>
        <FontAwesomeIcon icon={faCertificate} style={fontAwesomeInlineStyles} />
      </div>
    );
  }
}

export default Certificate;
