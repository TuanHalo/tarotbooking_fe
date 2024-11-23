import { Star } from "@/components";
import { IConsultantCardProps } from "./dto";
import "./index.scss";
import { generatePath, Link } from "react-router-dom";

export const ConsultantCard = ({
  id,
  avatar,
  name,
  topics,
  desc,
  review,
  sold,
}: IConsultantCardProps) => {
  const consultantLink = generatePath("/consultant/:id", { id });

  return (
    <Link to={consultantLink} className="m-consultantCard">
      <img src={avatar} alt="" className="m-consultantCard_avatar" />
      <h4 className="m-consultantCard_name">{name}</h4>
      <ul className="m-consultantCard_topics">
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <p className="m-consultantCard_desc">{desc}</p>
      <div className="m-consultantCard_brief">
        <Star star={review} />
        <span className="m-consultantCard_brief--sold">Sold {sold}</span>
      </div>
    </Link>
  );
};
