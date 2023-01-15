import React, { useRef } from "react";
import Slider from "react-slick";
import "./myCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechLogo from "./TechLogo";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import data from "../data";
import { Link } from "react-router-dom";

export default function MyCarousel() {
  const settings = {
    dots: false,
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "innerDiv",
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },]
  };

  const sliderRef = useRef();

  function gotoNext() {
    sliderRef.current.slickNext();
  }

  function gotoPrev() {
    sliderRef.current.slickPrev();
  }

  // const portfolio = [
  //   {
  //     titre: "Entraide Solidaire",
  //     image: "entraide.jpg",
  //     tech: ["WordPress", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 1,
  //   },
  //   {
  //     titre: "Timuntu Travel",
  //     image: "timuntu.jpg",
  //     tech: ["WordPress", "CSS", "JavaScript", "PHP"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 2,
  //   },
  //   {
  //     titre: "Les mots persos",
  //     image: "lesmots.jpg",
  //     tech: ["WordPress", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 3,
  //   },
  //   {
  //     titre: "My radio App",
  //     image: "radioApp.jpg",
  //     tech: ["Java", "Swift", "Firebase"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 4,
  //   },
  //   {
  //     titre: "Go 4 Lunch",
  //     image: "go4lunch.jpg",
  //     tech: ["Java", "Firebase", "API Rest"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 5,
  //   },
  //   {
  //     titre: "Clean Up",
  //     image: "cleanUp.jpg",
  //     tech: ["Java", "SQlite"],
  //     descr:
  //       "Application permettant de lister des tâches, créer et supprimer des tâches et de les filtrer par date ou nom de projet. Des tests ont été effectués avec JUNIT et ESPRESSO.",
  //     id: 6,
  //   },
  //   {
  //     titre: "Entre voisins",
  //     image: "entreVoisins.jpg",
  //     tech: ["Java", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 7,
  //   },
  //   {
  //     titre: "Réunion",
  //     image: "reunion.jpg",
  //     tech: ["Java", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 8,
  //   },
  //   {
  //     titre: "Kasa",
  //     image: "kasa.jpg",
  //     tech: ["React JS", "SASS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 9,
  //   },
  //   {
  //     titre: "Kanap",
  //     image: "kanap.jpg",
  //     tech: ["JavaScript", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 10,
  //   },
  //   {
  //     titre: "Hot Takes",
  //     image: "piiquante.jpg",
  //     tech: ["Node JS", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 11,
  //   },
  //   {
  //     titre: "Entraide Solidaire APP",
  //     image: "entraideNative.jpg",
  //     tech: ["React Native", "CSS", "JavaScript"],
  //     descr:
  //       "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  //     id: 11,
  //   },
  // ];

  // console.table(portfolio);

  const descrDiv = document.getElementById("carousel__descr");

  function showDescr() {
    descrDiv.style.visibility = "visible";
  }

  function hideDescr() {
    descrDiv.style.visibility = "hidden";
  }

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {data.projects.map((elt, index) => (
          <div
            key={index}
            className="carousel"
            id="carousel"
            onMouseOver={showDescr}
            onMouseOut={hideDescr}
          >
            <img
              src={elt.image}
              className="carousel__image"
              id="carousel__image"
            />
            <div className="carousel__logo">
              {elt.tech.map(
                (techName, y) =>
                  console.table(elt.tech) || (
                    <TechLogo techName={techName} key={y} />
                  )
              )}
            </div>
            <div className="carousel__descr">
               <div>{elt.descr}</div> 
                <div className="carousel__descr__icon">
                  <a href={elt.url} rel="noopener" target="_blank"><VisibilityIcon /></a>
                </div>
            </div>
            <h3>{elt.titre}</h3>
          </div>
        ))}
      </Slider>
      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={gotoPrev}>
          <SkipPreviousIcon />
        </button>
        <button className="button" onClick={gotoNext}>
          <SkipNextIcon />
        </button>
      </div> */}
    </div>
  );
}
