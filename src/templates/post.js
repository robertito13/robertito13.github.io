import React from 'react';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';

import Sidebar from '../components/sidebar-stripped';
import SEO from '../components/seo';

import styles from '../styles/content.module.scss';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const meta = data.site.siteMetadata;

  const disqusConfig = {
    url: `${meta.url}${location.pathname}`,
    identifier: post.id,
    title: post.frontmatter.title,
  };

  return (
    <div className="container">
      <SEO title={post.frontmatter.title} />
      <Sidebar />
      <article className={styles.content}>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <Disqus config={disqusConfig} />
      </article>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
