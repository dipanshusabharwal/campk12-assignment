import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Carousel from "./common/Carousel";
import CourseCards from "./common/CourseCard";
import data from "../data.json";
import uuid from "uuid-random";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="background-img">
          <div className="container-custom">
            <nav className="navbar navbar-expand-lg navbar-light mt-3 px-0">
              <Link to="/" className="navbar-brand">
                <img src="/resources/logo/logo.svg" alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="nav text-light small font-weight-bold">
                <Link to="/online-courses">
                  <li className="nav-item mr-3 text-light">ONLINE COURSES</li>
                </Link>
              </ul>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <div className="ml-auto d-flex">
                  <img
                    src="/resources/navbar/trophy.svg"
                    className="mr-2"
                    alt="Trophy"
                  />
                  <img
                    src="/resources/navbar/notification.svg"
                    className="mr-2"
                    alt="Notification"
                  />
                  <div className="d-flex align-items-center mr-2 bg-primary pl-2 rounded">
                    <img
                      src="/resources/navbar/skill-badge.svg"
                      className="mr-2"
                      alt="Skill-Badge"
                    />
                    <div className="mr-2 text-light font-weight-bold">100</div>
                    <img
                      src="https://via.placeholder.com/40"
                      className="profile-img rounded-right"
                      alt="Profile"
                    />
                  </div>
                  <img
                    src="/resources/navbar/down-more.svg"
                    className="mr-2"
                    alt="More"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div className="d-flex pt-5 container-custom">
            <div className="d-flex flex-column">
              <div className="display-4 text-light py-3">
                Welcome to the
                <br /> school of the future.
              </div>
              <h4 className="text-light py-3">
                Cutting-edge technology courses for the Ages 8-18.
                <br />
                Unlock <span className="text-warning">21st century skills</span>
                , earn <img src="/resources/banner/coin.svg" alt="Coins" />, and
                build <br />a college-ready portfolio as you learn.
              </h4>
            </div>
            <div className="ml-auto">
              <img
                src="/resources/banner/header-photo.png"
                alt="banner"
                className="banner-img rounded"
              />
            </div>
          </div>
          <h3 className="text-light font-weight-bold text-center mt-5">
            What do you want to learn?
          </h3>
          <Carousel />
        </div>
        <h2 className="mt-5 text-center font-weight-bold">
          Upcoming online courses
          <span>
            <button className="live-button btn btn-lg font-weight-bold text-light ml-5">
              <span className="dot mr-2 mb-1"></span>
              Live
            </button>
          </span>
        </h2>
        <p className="text-center text-muted pt-3">
          Learn from live teachers, not pre-recorded videos, in our intelligent
          virtual classrooms. <br />{" "}
          <img
            src="resources/navbar/skill-badge.svg"
            alt="skill-badge"
            className="skill-img"
          />{" "}
          = 21st century skills you’ll unlock
          <img
            src="resources/banner/coin.svg"
            alt="coins"
            className="skill-img ml-4"
          />{" "}
          = coins you’ll earn for completion
        </p>
        <div className="row justify-content-center mt-5 m-0 mb-5">
          {data.courseCards.map((course) => (
            <CourseCards course={course} key={uuid()} />
          ))}
        </div>
        <footer className="text-center text-light bg-primary p-4">
          Questions? Contact us at{" "}
          <a
            href="mailto:info@campk12.com"
            target="__blank"
            className="font-weight-bolder text-light"
          >
            info@campk12.com
          </a>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
