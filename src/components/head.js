import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './head.module.scss';

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      socialIcons: allFile(filter: {sourceInstanceName: {eq: "assets"}, extension: {eq: "svg"}}) {
        edges {
          node {
            base
            publicURL
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            stackoverflow
            codingame
          }
        }
      }
    }
  `);

  const socialIcons = {};
  data.socialIcons.edges.forEach((edge) => {
    let name = edge.node.base;
    name = name.substring(0, name.lastIndexOf('-'));

    socialIcons[name] = edge.node.publicURL;
  });

  const social = data.site.siteMetadata.social;


  return (
    <section className={`hero ${styles.head}`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title">Roberto Vaccaro</h1>
              <h2 className="subtitle">Fullstack Developer</h2>
            </div>
            <div className="column is-narrow">
              <ul className="is-size-7">
                <li>
                  <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer">
                    twitter
                  </a>
                </li>
                <li>
                  <a href={`https://github.com/${social.github}`} target="_blank" rel="noreferrer">
                    github
                  </a>
                </li>
                <li>
                  <a href={`https://stackoverflow.com/users/${social.stackoverflow}`} target="_blank" rel="noreferrer">
                    stackoverflow
                  </a>
                </li>
                <li>
                  <a href={`https://codingame.com/profile/${social.codingame}`} target="_blank" rel="noreferrer">
                    codingame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
