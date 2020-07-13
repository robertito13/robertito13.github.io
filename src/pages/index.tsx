import React, { useState } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Edge } from '../types/edge';

import Sidebar from '../components/sidebar';
import Content from '../components/content';
import SEO from '../components/seo';

import '../styles/main.scss';

declare interface State {
  filteredPosts: Edge[];
  query: string;
}

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
              issuer
              issuer_url
              cert {
                  publicURL
              }
              cert_url
            }
            id
          }
        }
      }
    }
  `);

  const allPosts = data.allMarkdownRemark.edges || [];

  const emptyQuery = ``;

  const [state, setState] = useState({
    filteredPosts: [],
    query: emptyQuery,
  });

  const filterPosts = (query: string) => {
    const parsedQuery = query.split(`=`);

    const filteredPosts = allPosts.filter((post: Edge) => {
      if (parsedQuery[0] === `type` && post.node.fields.source === parsedQuery[1]) {
        return true;
      }

      return false;
    });

    setState({
      filteredPosts,
      query,
    });
  };

  const { filteredPosts, query } = state;
  const hasSearchResults = filteredPosts && query !== emptyQuery;
  const posts = hasSearchResults ? filteredPosts : allPosts;

  return (
    <div className="container">
      <SEO title='Inicio' />
      <Sidebar filterFn={filterPosts} />
      <Content posts={posts} />
    </div>
  );
};

export default Index;
