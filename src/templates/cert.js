import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../components/sidebar-stripped';
import SEO from '../components/seo';

import styles from '../styles/content.module.scss';
import certStyles from '../styles/cert.module.scss';

const BlogCertTemplate = ({ data, pageContext, location }) => {
  const cert = data.markdownRemark;

  return (
    <div className="container">
      <SEO title={cert.frontmatter.title} />
      <Sidebar />
      <article className={styles.content}>
        <header>
          <h1>{cert.frontmatter.title}</h1>
          <p>
            {cert.frontmatter.date}&nbsp;
            -&nbsp;
            <a href={cert.frontmatter.issuer_url} alt="Sitio del Emisor">{cert.frontmatter.issuer}</a>&nbsp;
            <a href={cert.frontmatter.cert_url} alt="Validación Online del Certificado">
              <FontAwesomeIcon icon={faClipboardCheck} /></a>
          </p>
          <embed
            type="application/pdf"
            src={cert.frontmatter.cert.publicURL}
            className={certStyles.main}></embed>
        </header>
      </article>
    </div>
  );
};

export default BlogCertTemplate;

export const pageQuery = graphql`
  query BlogCertBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        issuer
        issuer_url
        cert {
            publicURL
        }
        cert_url
      }
    }
  }
`;
