import "./index.scss";

export interface IReview {
  avatar: string;
  desc: string;
  name: string;
}

export interface IReviewProps {
  reviews: IReview[];
}

export const Review = ({ reviews = [] }: IReviewProps) => {
  return (
    <section className="p-home_review">
      <div className="container">
        <h2 className="p-home_review--title">Review</h2>
        <ul className="p-home_review--reviewList">
          {reviews.map((review, index) => (
            <li key={index} className="reviewList_item">
              <img src={review.avatar} className="reviewList_item--img" />
              <p className="reviewList_item--desc">{review.desc}</p>
              <p className="reviewList_item--name">{review.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
