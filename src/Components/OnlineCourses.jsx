import React from "react";
import { Link } from "react-router-dom";
import "./OnlineCourses.css";
import data from "../data.json";
import OnlineOfferrings from "./common/OnlineOfferrings";
import OnlineCourseCard from "./common/OnlineCourseCard";

class OnlineCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeFrom: 5,
      courseType: "All",
      courses: [],
    };
  }

  componentDidMount() {
    let courses = data.onlineCourses.filter(
      (e) => e.courseGradeFrom === this.state.gradeFrom
    );
    this.setState({ courses: courses });
  }

  categoryFilter = (event) => {
    let category = event.target.value;
    console.log(category);

    let courses = [];

    if (category === "All") {
      courses = data.onlineCourses.filter(
        (e) => e.courseGradeFrom === this.state.gradeFrom
      );
    } else {
      courses = data.onlineCourses.filter(
        (e) =>
          e.courseGradeFrom === this.state.gradeFrom &&
          e.courseType === category
      );
    }

    this.setState({
      courses: courses,
      courseType: category,
    });
  };

  gradeFilter = (event) => {
    let grade = Number(event.target.dataset.grade);

    let courses = [];

    if (this.state.courseType === "All") {
      courses = data.onlineCourses.filter((e) => e.courseGradeFrom === grade);
    } else {
      courses = data.onlineCourses.filter(
        (e) =>
          e.courseGradeFrom === grade && e.courseType === this.state.courseType
      );
    }

    console.log(courses);

    this.setState({
      courses: courses,
      gradeFrom: grade,
    });
  };

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
                <li className="nav-item mr-3">ONLINE COURSES</li>
                <li className="nav-item mr-3">OFFLINE CAMPS</li>
                <li className="nav-item">REFER & EARN</li>
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
                  <button className="btn btn-sm mr-3 text-light small btn-background px-3">
                    FREE TRIAL
                  </button>
                  <button className="btn btn-sm text-light small btn-background px-4">
                    LOG IN
                  </button>
                </div>
              </div>
            </nav>
            <div className="pt-5 text-light">
              <h2 className="font-weight-bold">ONLINE COURSES</h2>
              <div className="row px-3">
                <OnlineOfferrings />
              </div>
              <button className="btn text-light book-btn rounded px-4 mb-5">
                BOOK A FREE TRIAL
              </button>
            </div>
            <div className="p-5"></div>
          </div>
        </div>
        <div>
          <div className="course-container shadow">
            <div className="d-flex justify-content-center grade-container">
              <button
                className={
                  this.state.gradeFrom === 1
                    ? "btn btn-primary rounded-0 px-4 py-2 shadow"
                    : "btn btn-light rounded-0 px-4 py-2 shadow"
                }
                data-grade={1}
                onClick={this.gradeFilter}
              >
                <span className="small" data-grade={1}>
                  Grades 1-4
                </span>
              </button>
              <button
                className={
                  this.state.gradeFrom === 5
                    ? "btn btn-primary rounded-0 px-4 py-2 shadow"
                    : "btn btn-light rounded-0 px-4 py-2 shadow"
                }
                data-grade={5}
                onClick={this.gradeFilter}
              >
                <span className="small" data-grade={5}>
                  Grades 5-8
                </span>
              </button>
              <button
                className={
                  this.state.gradeFrom === 9
                    ? "btn btn-primary rounded-0 px-4 py-2 shadow"
                    : "btn btn-light rounded-0 px-4 py-2 shadow"
                }
                data-grade={9}
                onClick={this.gradeFilter}
              >
                <span className="small" data-grade={9}>
                  Grades 9 - 12
                </span>
              </button>
            </div>
            <div>
              <div className="d-flex justify-content-between px-5 mt-3">
                <div className="ml-5 px-5">
                  Showing{" "}
                  <span className="font-weight-bold">
                    {this.state.courseType}
                  </span>{" "}
                  courses for{" "}
                  <strong>
                    Grades {this.state.gradeFrom}-{this.state.gradeFrom + 3}
                  </strong>
                </div>
                <div className="mr-5">
                  <select
                    className="form-control"
                    onChange={this.categoryFilter}
                  >
                    <option value="All">All Courses</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="AI/VR">AI/VR</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Python">Python</option>
                  </select>
                </div>
              </div>
              {this.state.courses.length > 0 ? (
                <OnlineCourseCard courses={this.state.courses} />
              ) : (
                <div className="text-center mt-5 display-3 text-danger mb-5 p-5">
                  No courses available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineCourses;
