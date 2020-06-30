import React from 'react';
import { Link } from 'gatsby';

import { Edge } from '../types/edge';

import ExternalLink from './external-link';

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

        return (
          <article key={node.id} className={styles.article}>
            <div className={styles.date}>
              [ <time dateTime={node.frontmatter.rawDate}>{node.frontmatter.date}</time> ]
            </div>
            {
            node.fields.source === `links` ?
              <ExternalLink to={node.frontmatter.link}>{node.frontmatter.title}</ExternalLink>:
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            }
            { tags ? tags : `` }
          </article>
        );
      })}
    </div>
  );
};

export default Content;
