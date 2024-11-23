export type TFooterTextLink = {
  name: string;
  href: string;
};

export type TFooterIconLink = {
  icon: string;
  href: string;
};

export type TFooterLinkList<Link> = {
  title: string;
  list: Link[];
};
