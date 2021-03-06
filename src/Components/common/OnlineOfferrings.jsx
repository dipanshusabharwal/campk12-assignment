import React from "react";
import data from "../../data.json";
import uuid from "uuid-random";
import "./OnlineOfferrings.css";

//card for online offerrings at /online-courses
function OnlineOfferrings() {
  return (
    <div className="row">
      {data.onlineOfferrings.map((offer, i) => {
        return (
          <div
            className="card col-12 col-sm-8 col-md-6 col-lg-3 py-3 border-0"
            style={{ background: "transparent" }}
            key={uuid()}
          >
            {i === 0 ? (
              <img
                src={offer.imgUrl}
                className="card-img-top"
                style={{ width: "140px" }}
                alt={offer.offerringTitle}
              />
            ) : (
              <img
                src={offer.imgUrl}
                className="card-img-top card-img"
                alt={offer.offerringTitle}
              />
            )}

            <div className="card-body p-0 py-3">
              <h6 className="card-title font-weight-bold">
                {offer.offerringTitle}
              </h6>
              <p className="card-text small">
                {offer.offerringDescription}{" "}
                {offer.offerringExternalLink ? (
                  <u>
                    <a
                      href={offer.offeringHyperlink}
                      target="__blank"
                      className="text-light"
                    >
                      {offer.offerringLinkTitle}
                    </a>
                  </u>
                ) : null}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OnlineOfferrings;
