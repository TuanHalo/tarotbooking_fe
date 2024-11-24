import { ConsultantCard, IConsultantCardProps } from "@/components";
import "./index.scss";

export interface IGetstartedProps {
  title: string;
  desc: string;
  consultantList: IConsultantCardProps[];
}

export const Getstarted = ({
  title,
  desc,
  consultantList = [],
}: IGetstartedProps) => {
  return (
    <section className="p-home_getstarted">
      <div className="container">
        <h2 className="p-home_getstarted--title">{title}</h2>
        <p className="p-home_getstarted--desc">{desc}</p>
        <ul className="p-home_getstarted--list">
          {consultantList.map((consultant) => (
            <li key={consultant.id}>
              <ConsultantCard {...consultant} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
