import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Sidebar from '../components/sidebar';
import Content from '../components/content';
import SEO from '../components/seo';

import '../styles/main.scss';

const Index = () : JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
              source
            }
            excerpt
            frontmatter {
              date(formatString: "DD-MM-YYYY")
              rawDate: date(formatString: "YYYY-MM-DD")
              title
              link
              tags
            }
            id
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <SEO title='Inicio' />
      <Sidebar />
      <Content posts={posts} />
    </div>
  );
};

export default Index;
