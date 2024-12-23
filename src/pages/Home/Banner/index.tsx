import { Link } from "react-router-dom";
import "./index.scss";

export interface IBanner {
  title: string;
  desc: string;
  actionName: string;
  actionLink: string;
}

export interface IBannerProps extends IBanner {}

export const Banner = ({
  title,
  desc,
  actionName,
  actionLink,
}: IBannerProps) => {
  return (
    <section className="p-home_banner">
      <div className="container">
        <div className="p-home_banner--wrap">
          <h2>{title}</h2>
          <p>{desc}</p>
          <Link to={actionLink}>{actionName}</Link>
        </div>
      </div>
    </section>
  );
};
