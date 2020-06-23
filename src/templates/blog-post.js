import React from 'react';
import { graphql } from 'gatsby';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;

  return (
    <article>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
