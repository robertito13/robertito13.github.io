import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
  `)

  const socialIcons = {};
  data.socialIcons.edges.forEach(edge => {
    let name = edge.node.base;
    name = name.substring(0, name.lastIndexOf('-'));

    socialIcons[name] = edge.node.publicURL;
  });

  const social = data.site.siteMetadata.social
  const socialIconStyle = {
    marginRight: rhythm(1 / 2),
    marginBottom: 0,
    width: 48,
    borderRadius: `100%`,
  };

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        <a href={`https://twitter.com/${social.twitter}`} target="_blank">
          <img
            src={socialIcons.twitter}
            alt={`Twitter`}
            style={socialIconStyle}
            imgStyle={{
              borderRadius: `50%`,
            }} />
        </a>
        <a href={`https://github.com/${social.github}`} target="_blank">
          <img
            src={socialIcons.github}
            alt={`GitHub`}
            style={socialIconStyle}
            imgStyle={{
              borderRadius: `50%`,
            }} />
        </a>
        <a href={`https://stackoverflow.com/users/${social.stackoverflow}`} target="_blank">
          <img
            src={socialIcons.stackoverflow}
            alt={`StackOverflow`}
            style={socialIconStyle}
            imgStyle={{
              borderRadius: `50%`,
            }} />
        </a>
        <a href={`https://www.codingame.com/profile/${social.codingame}`} target="_blank">
          <img
            src={socialIcons.codingame}
            alt={`CodinGame`}
            style={socialIconStyle}
            imgStyle={{
              borderRadius: `50%`,
            }} />
        </a>
      </p>
    </div>
  )
}

export default Bio
