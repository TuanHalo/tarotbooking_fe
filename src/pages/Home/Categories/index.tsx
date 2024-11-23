import { Link } from "react-router-dom";
import "./index.scss";
import { ICategoriesProps } from "./dto";

export const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <section className="p-home_categories">
      <div className="container">
        <div className="p-home_categories--title">
          <h2>Top Categories</h2>
          <Link to="/">View All</Link>
        </div>
        <ul className="p-home_categories--list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.href}>
                <img src={category.icon} alt="" />
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
