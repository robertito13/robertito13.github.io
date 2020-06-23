import React from 'react';

import styles from '../styles/content.module.scss';

class Content extends React.Component {
  render(): JSX.Element {
    return (
      <div className={styles.content}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
        sunt debitis labore iusto provident inventore quisquam, totam, ipsa
        veniam omnis perferendis obcaecati illo dolores vero modi tempora
        dicta repellendus corporis.
      </div>
    );
  }
}

export default Content;
