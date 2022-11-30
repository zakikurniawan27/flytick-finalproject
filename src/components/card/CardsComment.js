import React from "react";
import avatar from "../../assets/avatar.png";
import rating from "../../assets/rating.png"

function CardsComment() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="row text-comment">
            <div className="col-2">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="col-10">
              <p className="text-title-comment">Kaori Yamaguchi</p>
              <p className="text-title-comment">
                Honolulu, Hawaii | February 2017
              </p>
              <div className="row gx-0">
                <img src={rating} alt="rating" className="col-2 rating"/>
                <img src={rating} alt="rating" className="col-2 rating"/>
                <img src={rating} alt="rating" className="col-2 rating"/>
                <img src={rating} alt="rating" className="col-2 rating"/>
              </div>
              <p>
                My family and I visit Hawaii every year, and we usually book our
                flights using other services. Tripma was recommened to us by a
                long time friend, and {`I'm`} so glad we tried it out! The process
                was easy and read more...
              </p>
            </div>
          </div>
        </div>
        <div className="col">
            <div className="row text-comment">
                <div className="col-2">
                <img src={avatar} alt="avatar" />
                </div>
                <div className="col-10">
                <p className="text-title-comment">Kaori Yamaguchi</p>
                <p className="text-title-comment">
                    Honolulu, Hawaii | February 2017
                </p>
                <div className="row gx-0">
                    <img src={rating} alt="rating" className="col-2 rating"/>
                    <img src={rating} alt="rating" className="col-2 rating"/>
                    <img src={rating} alt="rating" className="col-2 rating"/>
                    <img src={rating} alt="rating" className="col-2 rating"/>
                </div>
                <p>
                    My family and I visit Hawaii every year, and we usually book our
                    flights using other services. Tripma was recommened to us by a
                    long time friend, and {`I'm`} so glad we tried it out! The process
                    was easy and read more...
                </p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="row text-comment">
                <div className="col-2">
                <img src={avatar} alt="avatar" />
                </div>
                <div className="col-10">
                <p className="text-title-comment">Kaori Yamaguchi</p>
                <p className="text-title-comment">
                    Honolulu, Hawaii | February 2017
                </p>
                <div className="row gx-0">
                    <img src={rating} alt="rating" className="col-2 rating"/>
                    <img src={rating} alt="rating" className="col-2 rating"/>
                    <img src={rating} alt="rating" className="col-2 rating"/>
                    <img src={rating} alt="rating" className="col-2 rating"/>
                </div>
                <p>
                    My family and I visit Hawaii every year, and we usually book our
                    flights using other services. Tripma was recommened to us by a
                    long time friend, and {`I'm`} so glad we tried it out! The process
                    was easy and read more...
                </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default CardsComment;
