import React from 'react';
import { Link } from 'gatsby';

import { Edge } from '../types/edge';

import ExternalLink from './external-link';
import Certificate from './certificate';

import styles from '../styles/content.module.scss';

declare interface OwnProps {
  posts: Edge[];
}

const Content = ({ posts }: OwnProps) : JSX.Element => {
  return (
    <div className={styles.content}>
      {posts.map(({ node }) => {
        const tags = (node.frontmatter.tags || []).map((tag) => (
          <div className={styles.tag} key={tag}>{tag}</div>
        ));

        let link = null;
        switch (node.fields.source) {
          case `links`:
            link = <ExternalLink to={node.frontmatter.link}>{node.frontmatter.title}</ExternalLink>;
            break;
          case `certificates`:
            link = <Certificate to={node.fields.slug}>{node.frontmatter.title}</Certificate>;
            break;
          default:
            link = <Link to={node.fields.slug}>{node.frontmatter.title}</Link>;
        }

        return (
          <article key={node.id} className={styles.article}>
            <div className={styles.date}>
              [ <time dateTime={node.frontmatter.rawDate}>{node.frontmatter.date}</time> ]
            </div>
            { link }
            { tags ? tags : `` }
          </article>
        );
      })}
    </div>
  );
};

export default Content;
