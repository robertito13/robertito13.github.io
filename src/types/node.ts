import { Fields } from './fields';
import { Frontmatter } from './frontmatter';

export interface Node {
  id: any;
  frontmatter: Frontmatter;
  excerpt(format: string, pruneLength: number, truncate: boolean): string;
  rawMarkdownBody: string;
  fileAbsolutePath: string;
  fields: Fields;
  html: string;
  htmlAst: string;
  excerptAst(pruneLength: number, truncate: boolean): string;
  headings(depth: any): any;
  timeToRead: number;
  tableOfContents(absolute: boolean, heading: string, maxDepth: number, pathToSlugField: string): string;
  wordCount: any;
  parent: Node;
  children: Node[];
  internal: any;
}
