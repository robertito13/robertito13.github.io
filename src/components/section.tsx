import React from 'react';

import styles from '../styles/section.module.css';

interface SectionProps {
  title: string;
  content: string;
}

class Section extends React.Component<SectionProps> {
  render(): JSX.Element {
    return (
      <section className={styles.section}>
        <header>{this.props.title}</header>
        <article>{this.props.content}</article>
      </section>
    );
  }
}

export default Section;
