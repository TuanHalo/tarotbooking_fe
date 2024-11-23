import { Link } from "react-router-dom";
import { TFooterIconLink, TFooterLinkList, TFooterTextLink } from "./dto";
import "./index.scss";

type FooterProps = {};

const SOCIALS: TFooterLinkList<TFooterIconLink> = {
  title: "Follow Us",
  list: [
    {
      icon: "images/facebook.svg",
      href: "/",
    },
    {
      icon: "images/youtube.svg",
      href: "/",
    },
    {
      icon: "images/instagram.svg",
      href: "/",
    },
  ],
};

const LISTS: TFooterLinkList<TFooterTextLink>[] = [
  {
    title: "Explore",
    list: [
      {
        name: "About Us",
        href: "/",
      },
      {
        name: "Articles",
        href: "/",
      },
    ],
  },
  {
    title: "Discover Consultant",
    list: [
      {
        name: "Alicia Keys",
        href: "/",
      },
      {
        name: "Alicia Keys",
        href: "/",
      },
    ],
  },
  {
    title: "User Support",
    list: [
      {
        name: "Help",
        href: "/",
      },
      {
        name: "Customer Support",
        href: "/",
      },
      {
        name: "Give Advice",
        href: "/",
      },
      {
        name: "Sitemap",
        href: "/",
      },
    ],
  },
  {
    title: "Community Insights",
    list: [
      {
        name: "User Agreement",
        href: "/",
      },
      {
        name: "Privacy",
        href: "/",
      },
      {
        name: "Trademark",
        href: "/",
      },
    ],
  },
];

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="o-footer">
      <div className="container">
        <div className="o-footer_socials">
          <p className="o-footer_socials--title">{SOCIALS.title}</p>
          <ul className="o-footer_socials--list">
            {SOCIALS.list.map((social, index) => (
              <li key={index}>
                <Link to={social.href}>
                  <img src={social.icon} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="o-footer_list">
          {LISTS.map((list, id) => (
            <li key={id}>
              <p className="o-footer_list--title">{list.title}</p>
              <ul className="o-footer_list--detail">
                {list.list.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="o-footer_copyright">
          2024 Ingenio, LLC. All rights reserved. Keen is for entertainment
          purposes only. Must be 18 years or older.
        </p>
      </div>
    </footer>
  );
};
