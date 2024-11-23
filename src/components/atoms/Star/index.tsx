import { IStarProps } from "./dto";
import "./index.scss";

export const Star = ({ star }: IStarProps) => {
  return (
    <div className="a-star">
      <img
        src={`images/star-${
          star * 2 > 0 ? (star === 1 ? "half" : "full") : "none"
        }.svg`}
        alt=""
      />
      <img
        src={`images/star-${
          star * 2 > 2 ? (star === 3 ? "half" : "full") : "none"
        }.svg`}
        alt=""
      />
      <img
        src={`images/star-${
          star * 2 > 4 ? (star === 5 ? "half" : "full") : "none"
        }.svg`}
        alt=""
      />
      <img
        src={`images/star-${
          star * 2 > 6 ? (star === 7 ? "half" : "full") : "none"
        }.svg`}
        alt=""
      />
      <img
        src={`images/star-${
          star * 2 > 9 ? (star === 9 ? "half" : "full") : "none"
        }.svg`}
        alt=""
      />
    </div>
  );
};
