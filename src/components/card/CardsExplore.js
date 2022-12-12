import React from "react";
import imageCardExplore from "../../assets/card-explore.png";

function CardsExplore() {
  return (
    <>
      <div className="card card-border" role="button">
        <img
          src={imageCardExplore}
          className="card-img"
          alt="imagecard1"
        />
        <div className="card-body">
          <h5 className="card-title">Stay among the atolls in <span className="text-success-900">Maldives</span></h5>
          <p className="card-text">
            From the 2nd century AD, the islands were known as the
            'Money Isles' due to the abundance of cowry shells, a currency of
            the early ages..
          </p>
        </div>
      </div>
      <div className="card card-border" role="button">
        <img
          src={imageCardExplore}
          className="card-img"
          alt="imagecard1"
        />
        <div className="card-body">
          <h5 className="card-title">Stay among the atolls in <span className="text-success-900">Maldives</span></h5>
          <p className="card-text">
            From the 2nd century AD, the islands were known as the
            'Money Isles' due to the abundance of cowry shells, a currency of
            the early ages..
          </p>
        </div>
      </div>
      <div className="card card-border" role="button">
        <img
          src={imageCardExplore}
          className="card-img"
          alt="imagecard1"
        />
        <div className="card-body">
          <h5 className="card-title">Stay among the atolls in <span className="text-success-900">Maldives</span></h5>
          <p className="card-text">
            From the 2nd century AD, the islands were known as the
            'Money Isles' due to the abundance of cowry shells, a currency of
            the early ages..
          </p>
        </div>
      </div>
    </>
  );
}

export default CardsExplore;
