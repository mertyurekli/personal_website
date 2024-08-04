import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Mert Yürekli</h1>
        <span className="home_education">I'm a crayz engineer</span>
      </div>
    </section>
  )
}

export default Home