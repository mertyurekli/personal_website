import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I am Mert from Antalya</p>
            <a href="" className="btn">Donwload CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">C++</h3>
                <span className="skills_number C++">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percantage"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"></h3>
                <span className="skills_number"></span>
              </div>

              <div className="skills_bar">
                <span className="skills_percantage"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"></h3>
                <span className="skills_number"></span>
              </div>

              <div className="skills_bar">
                <span className="skills_percantage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About