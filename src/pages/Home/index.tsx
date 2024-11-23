import { Link } from "react-router-dom";
import "./index.scss";
import { TCategory } from "./dto";

type HomeProps = {};

const CATEGORIES: TCategory[] = [
  {
    icon: "images/love.svg",
    name: "Love",
    href: "/",
  },
  {
    icon: "images/family.svg",
    name: "Family",
    href: "/",
  },
  {
    icon: "images/relationship.svg",
    name: "Relationship",
    href: "/",
  },
  {
    icon: "images/finance.svg",
    name: "Finance",
    href: "/",
  },
  {
    icon: "images/love.svg",
    name: "Love",
    href: "/",
  },
  {
    icon: "images/family.svg",
    name: "Family",
    href: "/",
  },
];

export const Home = ({}: HomeProps) => {
  return (
    <div className="p-home">
      <section className="p-home_banner">
        <div className="container">
          <div className="p-home_banner--wrap">
            <h2>Welcome to Tarot Booking!</h2>
            <p>
              Are you seeking guidance, inspiration, or a new direction in life?
              Tarot Booking is the place where you can explore profound insights
              from tarot cards, uncover new opportunities, and find answers to
              important questions.
            </p>
            <Link to="/consultant">Find a consultant</Link>
          </div>
        </div>
      </section>
      <section className="p-home_aboutus">
        <div className="container">
          <div className="p-home_aboutus--wrap">
            <h2>About us</h2>
            <p>
              On Tarot Booking, we connect you with professional tarot readers
              who will help you gain deeper understanding of yourself and your
              future. With a simple and user-friendly interface, you can easily
              book sessions for online tarot readings or in-person
              consultations.
            </p>
          </div>
        </div>
      </section>
      <section className="p-home_getstarted">Get Started</section>
      <section className="p-home_categories">
        <div className="container">
          <div className="p-home_categories--title">
            <h2>Top Categories</h2>
            <Link to="/">View All</Link>
          </div>
          <ul className="p-home_categories--list">
            {CATEGORIES.map((category, index) => (
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
      <section className="p-home_review">Review</section>
    </div>
  );
};
