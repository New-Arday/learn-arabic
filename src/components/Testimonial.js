import React from "react";
import "../components/testimonial.css";
import AdultLearning from "./img/adult-min.jpg";
import ParentAndChildLearning from "./img/parent-child-learning-min.jpg";
import ChildrenLearning from "./img/kids-using-laptop-min.jpg";
import { useState } from "react";
function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextTestimonialSlideHandler = () => {
    setIndex((index + 1) % 3);
  };
  const preTestimonialSlideHandler = () => {
    if (index === 0) {
      return index;
    }
    setIndex((index - 1) % 3);
  };
  return (
    <>
      <section className="testimonial-carousel grid ">
        {index === 0 && (
          <div className="per-user">
            <img src={ChildrenLearning} alt="" className="testimonial-image" />

            <blockquote className=" testimonial">
              <p className=" testimonial-text">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
                reiciendis iste, numquam possimus!"
              </p>
              <p className=" testimonial-author">Cooper Primary School</p>

              <p className=" testimonial-job-title">
                Head of Language Department
              </p>
            </blockquote>
          </div>
        )}

        <button
          className=" testimonial-btn btn-right"
          onClick={nextTestimonialSlideHandler}
        >
          NEXT
        </button>
        <button
          className=" testimonial-btn btn-left"
          onClick={preTestimonialSlideHandler}
        >
          PREV
        </button>

        {index === 1 && (
          <div className="per-user">
            <img src={AdultLearning} alt="" className="testimonial-image" />
            <blockquote className=" testimonial">
              <p className=" testimonial-text">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
                reiciendis iste, numquam possimus!"
              </p>
              <p className=" testimonial-author">Cooper Primary School</p>

              <p className=" testimonial-job-title">
                Head of Language Department
              </p>
            </blockquote>
          </div>
        )}

        {index === 2 && (
          <div className="per-user">
            <img
              src={ParentAndChildLearning}
              alt=""
              className="testimonial-image"
            />
            <blockquote className=" testimonial">
              <p className=" testimonial-text">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
                reiciendis iste, numquam possimus!"
              </p>
              <p className=" testimonial-author">Cooper Primary School</p>

              <p className=" testimonial-job-title">
                Head of Language Department
              </p>
            </blockquote>
          </div>
        )}
      </section>
    </>
  );
}

export default Testimonial;
