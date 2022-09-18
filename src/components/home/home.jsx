import React, { useEffect } from "react";
import "./homeStyle.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home" id="home">
      <section>
        <h1>Welcome to my website</h1>
        <section className="secl">
          <p className='linep'>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("My name is Higor")
                  .pause(5000)
                  .start();
              }}
            />
          </p>
        </section>
      </section>
    </div>
  );
};

export default Home;
