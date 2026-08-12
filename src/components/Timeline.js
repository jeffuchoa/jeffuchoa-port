import React from "react";

const Timeline = () => {
  return (
    <div className="jeff_tm_section" id="timeline">
      <div className="jeff_tm_timeline">
        <div className="container">
          <div className="jeff_tm_main_title">
            <span>Timeline</span>
            <h3>Jornada Profissional</h3>
          </div>
          <div className="timeline_list">
            <ul>
              <li className="wow fadeInUp" data-wow-duration=".7s">
                <div className="list_inner">
                  <span>Setembro, 2024 - Hoje</span>
                </div>
                <div className="list_inner">
                  <span>Líder UI/UX Design &amp; Developer</span>
                </div>
                <div className="list_inner">
                  <span>JIT Technology</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>Convocado Duas vezes (2022 & 2023)</span>
                </div>
                <div className="list_inner">
                  <span>Educador Tech</span>
                </div>
                <div className="list_inner">
                  <span>Democrito Rocha (O POVO)</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner">
                  <span>Maio, 2022 - Hoje</span>
                </div>
                <div className="list_inner">
                  <span>UI/UX Designer &amp; Developer </span>
                </div>
                <div className="list_inner">
                  <span>Freelancer</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
