import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import CardLessons from "./CardLessons";
import Testimonial from "./Testimonial";

function Home({ setLessons, lessons }) {
  return (
    <>
      <div className="home-container ">
        <Hero />
        <HowItWorks />
        <CardLessons lessons={lessons} setLessons={setLessons} />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default Home;
