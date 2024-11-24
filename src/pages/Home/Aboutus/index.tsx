import "./index.scss";

export interface IAboutus {
  title: string;
  desc: string;
}

export interface IAboutusProps extends IAboutus {}

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
