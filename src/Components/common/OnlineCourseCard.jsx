import React from "react";
import uuid from "uuid-random";
import "./OnlineCourseCard.css";

//card for online course offerred
function OnlineCourseCard(props) {
  return (
    <div className="row justify-content-center p-2">
      {props.courses.map((course) => {
        return (
          <div
            className="card col-sm-12 col-md-6 col-lg-3 bg-light mx-2 mb-3 mt-3 rounded border p-0"
            key={uuid()}
          >
            <img src={course.imgUrl} className="card-img-top" alt="Card" />
            <div className="card-body">
              <h6 className="card-title font-weight-bold name-size">
                {course.courseTitle}
              </h6>
              <hr />
              <div className="d-flex">
                <div className="mr-3">
                  <img src="/resources/course-cards/pre-req.svg" alt="Level" />{" "}
                  <span className="text-muted small">LEVEL </span>
                  <span className="small font-weight-bold">
                    {course.courseLevel}
                  </span>
                </div>
                <div>
                  <img src="/resources/course-cards/grades.svg" alt="Grades" />{" "}
                  <span className="text-muted small">GRADES</span>{" "}
                  <span className="small  font-weight-bold">
                    {course.courseGradeFrom} - {course.courseGradeTo}
                  </span>
                </div>
              </div>
              <hr />
              <div className="d-flex flex-column small">
                <div className="mb-3">
                  <img
                    src="resources/online-courses/course-strength.svg"
                    className="mr-3 course-card-img"
                    alt="Total Students"
                  />
                  <span className="font-weight-bold">
                    {count(course.courseStrength)}k
                  </span>{" "}
                  Happy Students
                </div>
                <div className="mb-3">
                  <img
                    src="resources/course-cards/course-day.svg"
                    className="mr-3 course-card-img"
                    alt="Course Day"
                  />
                  <span className="font-weight-bolder">
                    {course.courseHours} Hours
                  </span>{" "}
                  over {course.courseSessions} sessions
                </div>
                <div className="mb-3">
                  <img
                    src="resources/online-courses/course-batch.svg"
                    alt="Course Batch"
                    className="mr-3 course-card-img"
                  />
                  {course.courseBatches}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <img src="/resources/online-courses/rupee.svg" alt="Rupees" />{" "}
                  <span className="font-weight-bold">
                    {course.courseDiscountedCost}
                  </span>{" "}
                  <span className="small text-muted">
                    <del>{course.courseOriginalCost}</del>
                  </span>
                </div>
                <div>
                  <img
                    src="/resources/online-courses/discount.svg"
                    alt="Discount %"
                  />{" "}
                  <span className="font-weight-bold small text-success">
                    {course.courseDiscountPercent}% off
                  </span>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-center">
                <div className="enroll-user text-primary">enroll</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function count(count) {
  count = count / 1000;
  return count.toFixed(1);
}

export default OnlineCourseCard;
