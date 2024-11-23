import "./index.scss";
import { THomeProps } from "./dto";
import { Banner } from "./Banner";
import { Aboutus } from "./Aboutus";
import { Categories } from "./Categories";
import { IAboutus } from "./Aboutus/dto";
import { ICategory } from "./Categories/dto";
import { IBanner } from "./Banner/dto";
import { Getstarted } from "./Getstarted";
import { IGetstartedProps } from "./Getstarted/dto";

const BANNER: IBanner = {
  title: "Welcome to Tarot Booking!",
  desc: "Are you seeking guidance, inspiration, or a new direction in life? Tarot Booking is the place where you can explore profound insights from tarot cards, uncover new opportunities, and find answers to important questions.",
  actionName: "Find a consultant",
  actionLink: "/consultant",
};

const ABOUTUS: IAboutus = {
  title: "About us",
  desc: "On Tarot Booking, we connect you with professional tarot readers who will help you gain deeper understanding of yourself and your future. With a simple and user-friendly interface, you can easily book sessions for online tarot readings or in-person consultations.",
};

const CATEGORIES: ICategory[] = [
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

const GETSTARTED: IGetstartedProps = {
  title: "Ready to Get Started?",
  desc: "Connect to one of these consultants.",
  consultantList: [
    {
      id: "1",
      avatar: "images/avatar.png",
      name: "Alicia Keys",
      topics: ["Relationship", "Family", "Love"],
      desc: "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
      review: 3.5,
      sold: 1000,
    },
    {
      id: "2",
      avatar: "images/avatar.png",
      name: "Alicia Keys",
      topics: ["Relationship", "Finance"],
      desc: "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
      review: 1.5,
      sold: 1450,
    },
    {
      id: "3",
      avatar: "images/avatar.png",
      name: "Alicia Keys",
      topics: ["Family", "Love"],
      desc: "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
      review: 2,
      sold: 100,
    },
    {
      id: "4",
      avatar: "images/avatar.png",
      name: "Alicia Keys",
      topics: ["Relationship", "Family", "Love", "Finance"],
      desc: "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
      review: 5,
      sold: 50,
    },
  ],
};

const Home = ({}: THomeProps) => {
  return (
    <div className="p-home">
      <Banner {...BANNER} />
      <Aboutus {...ABOUTUS} />
      <Getstarted {...GETSTARTED} />
      <Categories categories={CATEGORIES} />
      <section className="p-home_review">Review</section>
    </div>
  );
};

export default Home;
