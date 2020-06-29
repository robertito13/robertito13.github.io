import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styles from '../styles/content.module.scss';

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            excerpt
            frontmatter {
              date(formatString: "DD-MM-YYYY")
              rawDate: date(formatString: "YYYY-MM-DD")
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
        const tags = (node.frontmatter.tags || []).map((tag) => (
          <div className={styles.tag} key={tag}>{tag}</div>
        ));

        return (
          <article key={node.id} className={styles.article}>
            <div className={styles.date}>
              [ <time dateTime={node.frontmatter.rawDate}>{node.frontmatter.date}</time> ]
            </div>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            { tags ? tags : `` }
          </article>
        );
      })}
    </div>
  );
};

export default Content;
