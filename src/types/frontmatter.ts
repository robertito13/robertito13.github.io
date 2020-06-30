export interface Frontmatter {
  title: string;
  date(difference: string, formatString: string, fromNow: boolean, locale: string);
  rawDate: string;
  tags: string[];
  link: string;
}
