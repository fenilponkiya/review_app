import React from "react";
import { useState } from "react";
import people from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    console.log({ numbers: number });
    console.log(people.length - 1);
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const changeValue = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };
  const changeValues = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  const randomNumber = () => {
    let random = Math.floor(Math.random() * people.length);
    if(random === index){
      random = index+1
    }
    console.log(random);
  setIndex (checkNumber(random));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />

        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={() => changeValue()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => changeValues()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomNumber()}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
