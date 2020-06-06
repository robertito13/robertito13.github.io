import React from 'react';

import SEO from '../components/seo';
import Head from '../components/head';
import Articles from '../components/articles';

import '../styles/site.scss';

const BlogIndex = () => {
  return (
    <React.Fragment>
      <SEO />
      <Head />
      <Articles />
    </React.Fragment>
  );
};

export default BlogIndex;
