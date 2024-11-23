export interface IFooterTextLink {
  name: string;
  href: string;
};

export interface IFooterIconLink {
  icon: string;
  href: string;
};

export interface IFooterLinkList<Link> {
  title: string;
  list: Link[];
};

export type TFooterProps = {};
