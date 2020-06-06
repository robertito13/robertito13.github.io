import React from 'react';

import Header from '../components/header';
import Section from '../components/section';

import '../styles/main.css';

class Index extends React.Component {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Header />
        <Section title="Sección de prueba" content="Lorem ipsum sit dolor amer..." />
      </React.Fragment>
    );
  }
}

export default Index;
