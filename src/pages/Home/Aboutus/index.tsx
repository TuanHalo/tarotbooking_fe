import { IAboutusProps } from "./dto";
import "./index.scss";

export const Aboutus = ({ title, desc }: IAboutusProps) => {
  return (
    <section className="p-home_aboutus">
      <div className="container">
        <div className="p-home_aboutus--wrap">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
};
