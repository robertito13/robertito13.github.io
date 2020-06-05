import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

const Articles = () => {
  const data = useStaticQuery(
      graphql`
        query {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "DD/MM/YYYY")
                  title
                }
              }
            }
          }
        }
    `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <React.Fragment>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p>{node.excerpt}</p>
            </section>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default Articles;
