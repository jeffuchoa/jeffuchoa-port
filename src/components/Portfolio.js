import React, { Fragment, useState } from "react";
import LightBox from "react-awesome-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";

const IMAGES = [
  {
    src: "/img/portfolio/1.webp",
    link: "https://jeffuchoa.github.io/donas-de-tudo/",
    thumbnail: "/img/portfolio/1.jpg",
    title: "Donas D' Tudo",
    sub: "Landing Page"
  },
  {
    src: "/img/portfolio/2.webp",
    link: "https://jeffuchoa.github.io/RF-TEAM/",
    thumbnail: "/img/portfolio/2.webp",
    title: "RF Team",
    sub: "Landing Page"
  },

  {
    src: "/img/portfolio/3.webp",
    link: "https://www.figma.com/proto/BY0uQ3QhCX0umqH36Hffz6/Clinica-Jana%C3%ADna-Queiroz?node-id=756-312&t=uMcCBmYT7SDkLkQY-1&scaling=min-zoom&content-scaling=fixed&page-id=204%3A204&starting-point-node-id=756%3A312&show-proto-sidebar=1",
    thumbnail: "/img/portfolio/3.webp",
    title: "Janaina Queiroz",
    sub: "UI/UX"
  },
];

const Portfolio = () => {
  const [showLight, setShowLight] = useState(null);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };
  return (
    <Fragment>
      <div className="jeff_tm_section" id="portfolio">
        <div className="jeff_tm_portfolio">
          <div className="container">
            <div className="jeff_tm_main_title">
              <span>Portfolio</span>
              <h3>Trabalhos Selecionados</h3>
            </div>
            <div
              className="portfolio_list gallery_zoom wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper {...portfolioSlider}>
                    {IMAGES.map((image, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="list_inner">
                          <div className="image">
                            <img src="/img/portfolio/410-460.jpg" alt="" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(" + image.src + ")",
                              }}
                            ></div>
                            <div className="overlay"></div>
                            <img
                              className="svg"
                              src="/img/svg/right-arrow.svg"
                              alt=""
                            />
                            <div className="details">
                              <h3>{image.title}</h3>
                              <span>{image.sub}</span>
                            </div>
                          </div>
                          <a href={image.link} target="_blank"
                            className="jeff_tm_full_link popup-vimeo"
                          ></a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="jeff_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLight ? (
        <LightBox
          images={IMAGES.map((img) => ({
            url: img.src,
            title: img.caption,
          }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      ) : null}
    </Fragment>
  );
};

export default Portfolio;
