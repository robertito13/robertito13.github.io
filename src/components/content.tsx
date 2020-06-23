import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from '../styles/content.module.scss';

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "DD-MM-YYYY")
              title
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
    <div className={styles.content}>
      {posts.map(({ node }) => {
        const tags = (node.frontmatter.tags || []).join(`, `);

        return (
          <article key={node.id}>
            [ {node.frontmatter.date} ] <strong>{node.frontmatter.title}</strong>
            { tags ? ` (${tags})` : `` }
          </article>
        );
      })}
    </div>
  );
};

export default Content;
