import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">33</h3>
                <span className="about_subtitle">Project completed</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-cup"></i>

            <div>
                <h3 className="about_title">1000</h3>
                <span className="about_subtitle">Cup of Coffee</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-people"></i>

            <div>
                <h3 className="about_title">89</h3>
                <span className="about_subtitle">Satisfied clients</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-badge"></i>

            <div>
                <h3 className="about_title">3</h3>
                <span className="about_subtitle">Winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox