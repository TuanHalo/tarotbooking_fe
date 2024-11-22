import { Link } from "react-router-dom";
import { TFooterLinkList } from "./dto";

type FooterProps = {};

const SOCIALS: TFooterLinkList = {
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

const LISTS: TFooterLinkList[] = [
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
    <footer className="bg-black py-[80px]">
      <div className="container">
        <div className="mb-[40px]">
          <p className="text-white text-[24px] md:text-[28px] lg:text-center font-bold mb-[16px] lg:mb-[24px]">
            {SOCIALS.title}
          </p>
          <ul className="flex lg:justify-center items-center gap-[24px] lg:gap-[40px] ">
            {SOCIALS.list.map(
              (social, index) =>
                "icon" in social && (
                  <li key={index}>
                    <Link to={social.href}>
                      <img
                        src={social.icon}
                        alt=""
                        className="h-[48px] lg:h-[64px]"
                      />
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <ul className="text-white flex flex-col lg:flex-row lg:justify-between gap-[40px] lg:gap-[16px]">
          {LISTS.map((list, id) => (
            <li key={id}>
              <p className="text-[24px] md:text-[28px] font-bold mb-[16px] ">
                {list.title}
              </p>
              <ul className="flex lg:flex-col items-center lg:items-start gap-[24px] lg:gap-[16px]">
                {list.list.map(
                  (link, index) =>
                    "name" in link && (
                      <li key={index}>
                        <Link
                          to={link.href}
                          className="text-[12px] md:text-[14px] lg:text-[16px] border-b-[1.5px]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </li>
          ))}
        </ul>
        <p className="text-white text-[10px] md:text-[12px] lg:text-[14px] font-normal mt-[80px]">
          2024 Ingenio, LLC. All rights reserved. Keen is for entertainment
          purposes only. Must be 18 years or older.
        </p>
      </div>
    </footer>
  );
};
