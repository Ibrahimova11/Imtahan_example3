import axios from "axios";
import React, { useEffect, useState } from "react";
import Example from "../../Components/carousel/Example";

import "./Home.css";
const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:8080/api/products")
        .then((res) => setCards(res.data));
    }, []);
    console.log(cards);
  return (
    <div>
      <Example />
      <div className="black__box">
        <div className="yellow__line"></div>
        <h2>Popular Courses</h2>
      </div>

      <div className="black__box__container">

      {cards.map((card) => {
        return (
            <div className="Cards">
            <div className="card">
          
              <div className="card_picture">
                <img
                  className="pic1"
                  src="https://preview.colorlib.com/theme/course/images/course_1.jpg"
                  alt="Norway"
                />
  
                <div className="card_name1">
                  <h3>{card._id}</h3>
                  <div className="card_name2">
                    <p>Adobe Guide, Layes, Smart Objects etc...</p>
                  </div>
  
                  <div className="card_price">
                    <div className="card_price_left">
                      <img
                        className="boy"
                        src="https://preview.colorlib.com/theme/course/images/author.jpg"
                      />
                    </div>
  
                    <div className="card_price_middle">
                      <h6>  {card.name}</h6>
                    </div>
  
                    <div className="card_price_right">
                      <h5>$29</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}





    
      </div>

      <div className="yellow_container">
        <div className="yellow_container_left">
          <h1>Register now and get a discount 50% discount until 1 January</h1>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
          <button>REGISTER NOW</button>
        </div>

        <div className="yellow_container_right">
          <img
            className="yellow_container_right_img"
            src="https://preview.colorlib.com/theme/course/images/search_background.jpg.webp"
          />
          <div className="yellow_container_right_form">
            <h1>Search for your course</h1>
            <div className="inputs">
              <input placeholder="Course Name"></input>
              <input placeholder="Category"></input>
              <input placeholder="Degree"></input>
              <button>SEARCH COURSE</button>
            </div>
          </div>
        </div>

        <div className="black__box">
          <div className="yellow__line"></div>
          <h2>Popular Courses</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
