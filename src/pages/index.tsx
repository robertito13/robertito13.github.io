import React from 'react';

import Sidebar from '../components/sidebar';
import Content from '../components/content';
import SEO from '../components/seo';

import '../styles/main.scss';

class Index extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container">
        <SEO title='Inicio' />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Index;
