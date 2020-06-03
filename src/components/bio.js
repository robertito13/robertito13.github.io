import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import socialIconStyle from './bio.module.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      socialIcons: allFile(filter: {
        sourceInstanceName: {eq: "assets"},
        extension: {eq: "svg"}
        }) {
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
    <div className={socialIconStyle.container}>
      <p>
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer">
          <img
            src={socialIcons.twitter}
            alt={`Twitter`}
            className={socialIconStyle.icon} />
        </a>
        <a href={`https://github.com/${social.github}`} target="_blank" rel="noreferrer">
          <img
            src={socialIcons.github}
            alt={`GitHub`}
            className={socialIconStyle.icon} />
        </a>
        <a href={`https://stackoverflow.com/users/${social.stackoverflow}`} target="_blank" rel="noreferrer">
          <img
            src={socialIcons.stackoverflow}
            alt={`StackOverflow`}
            className={socialIconStyle.icon} />
        </a>
        <a href={`https://www.codingame.com/profile/${social.codingame}`} target="_blank" rel="noreferrer">
          <img
            src={socialIcons.codingame}
            alt={`CodinGame`}
            className={socialIconStyle.icon} />
        </a>
      </p>
    </div>
  );
};

export default Bio;
