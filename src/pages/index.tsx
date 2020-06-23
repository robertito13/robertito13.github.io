import React from 'react';

import Sidebar from '../components/sidebar';
import Content from '../components/content';

import '../styles/main.scss';

class Index extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Index;
