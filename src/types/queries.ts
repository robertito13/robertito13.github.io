import { Node } from './node';
import { Metadata } from './site';

export interface CertQuery {
  markdownRemark: Node;
}

export interface PostQuery {
  site: {
    siteMetadata: Metadata;
  }
  markdownRemark: Node;
}
