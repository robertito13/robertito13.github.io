export interface Frontmatter {
  title: string;
  date(difference: string, formatString: string, fromNow: boolean, locale: string);
  rawDate: string;
  tags: string[];
  link: string;

  cert?: any;
  cert_url?: string;

  issuer?: string;
  issuer_url?: string;
}
