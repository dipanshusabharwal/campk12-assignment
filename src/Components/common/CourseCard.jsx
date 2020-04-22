import React from "react";
import uuid from "uuid-random";
import "./CourseCard.css";

const CourseCard = (props) => {
  return (
    <div className="card col-3 bg-light ml-5 rounded p-0">
      <img src={props.course.imgUrl} className="card-img-top" alt="Card" />
      <div className="card-img-overlay img-overlay rounded text-light">
        {props.course.category}
      </div>
      <div className="card-body">
        <h6 className="card-title">{props.course.courseName}</h6>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <img src="/resources/course-cards/grades.svg" alt="Grades" />{" "}
            <span className="text-muted small">GRADES</span>
          </div>
          <div>
            <img src="/resources/course-cards/pre-req.svg" alt="PRE-REQ" />{" "}
            <span className="text-muted small">PRE-REQ</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="ml-3 font-weight-bold small">
            {props.course.courseGradeFrom} - {props.course.courseGradeTo}
          </div>
          <div className="mr-3 font-weight-bold small">
            {props.course.coursePreRequisites}
          </div>
        </div>
        <hr />
        <div className="d-flex small">
          <img
            src="resources/navbar/skill-badge.svg"
            alt="Skills Req"
            className="mr-3 course-card-img"
          />
          {props.course.skillsRequired.map((skill, i) => {
            return i < 3 ? (
              <div className="mr-2 skills rounded p-1 px-2" key={uuid()}>
                {skill}
              </div>
            ) : null;
          })}
          {props.course.skillsRequired.length - 2 ? (
            <div className="skills rounded p-1 px-2" key={uuid()}>
              +{props.course.skillsRequired.length - 2}
            </div>
          ) : null}
        </div>
        <div className="d-flex small mt-2 align-items-center">
          <img
            src="resources/banner/coin.svg"
            alt="Coins earned"
            className="mr-3 course-card-img"
          />
          {props.course.coinsEarned}
        </div>
        <hr />
        <div className="d-flex flex-column small">
          <div className="mb-3">
            <img
              src="resources/course-cards/calendar.svg"
              className="mr-3 course-card-img"
              alt="Course Starts"
            />
            {calculateDays(props.course.startsOn)}
          </div>
          <div className="mb-3">
            <img
              src="resources/course-cards/course-day.svg"
              alt="Course Days"
              className="mr-3 course-card-img"
            />
            {props.course.courseDay.map((day, i) => {
              return props.course.courseDay.length - i !== 1 ? (
                props.course.courseDay.length - 1 - i !== 1 ? (
                  <span key={uuid()}>{day}, </span>
                ) : (
                  <span key={uuid()}>{day} </span>
                )
              ) : (
                <span key={uuid()}>& {day}</span>
              );
            })}
          </div>
          <div className="mb-3">
            <img
              src="resources/course-cards/time-slot.svg"
              alt="Course Days"
              className="mr-3 course-card-img"
            />
            {props.course.startTime} to {props.course.endTime}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="font-weight-bold">Rs. {props.course.cost}</p>
          <div className="enroll-user text-primary">enroll</div>
        </div>
      </div>
    </div>
  );
};

function calculateDays(date) {
  let startDate = new Date(date);
  let day = startDate.getDate(date);
  let month = date.split(" ")[0];
  let startsIn = Math.ceil((startDate - Date.now()) / (1000 * 3600 * 24));

  return `${day} ${month} (in ${startsIn} days)`;
}
export default CourseCard;
