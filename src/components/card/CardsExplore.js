import React from "react";
import imageCardExplore from "../../assets/card-explore.png";
import imageCardExplore2 from "../../assets/card-explore2.png";
import imageCardExplore3 from "../../assets/card-explore3.png";

function CardsExplore() {
  return (
    <>
      <div className="card card-border" role="button">
        <img src={imageCardExplore} className="card-img" alt="imagecard1" />
        <div className="card-body">
          <h5 className="card-title">
            Live traditionally in{" "}
            <span className="text-success-900">Mongolia</span>
          </h5>
          <p className="card-text">
            Traditional Mongolian yurts consists of an angled latticework of
            wood or bamboo for walls, ribs, and a wheel.
          </p>
        </div>
      </div>
      <div className="card card-border" role="button">
        <img src={imageCardExplore2} className="card-img" alt="imagecard1" />
        <div className="card-body">
          <h5 className="card-title">
            Stay among the atolls in{" "}
            <span className="text-success-900">Maldives</span>
          </h5>
          <p className="card-text">
            From the 2nd century AD, the islands were known as the 'Money Isles'
            due to the abundance of cowry shells, a currency of the early ages..
          </p>
        </div>
      </div>
      <div className="card card-border" role="button">
        <img src={imageCardExplore3} className="card-img" alt="imagecard1" />
        <div className="card-body">
          <h5 className="card-title">
            Experience the Ourika Valley in{" "}
            <span className="text-success-900">Morocco</span>
          </h5>
          <p className="card-text">
            Morocco’s Hispano-Moorish architecture blends influences from Berber
            culture, Spain, and contemporary artistic currents in the Middle
            East
          </p>
        </div>
      </div>
    </>
  );
}

export default CardsExplore;
