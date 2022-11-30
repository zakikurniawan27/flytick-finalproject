import React, { useState } from "react";
import iconDepature from "../assets/departure.png";
import iconArrival from "../assets/arrival.png";
import iconPerson from "../assets/person.png";

function Dropdown() {
  const [checkRoundTrip, setCheckRoundTrip] = useState(false)

  const RoundTrip = () =>{
    setCheckRoundTrip(true)
  }

  const OneWay = () =>{
    setCheckRoundTrip(false)
  }
  const test = [
    {
      nama: "test",
      Umur: "10",
    },
    {
      nama: "test",
      Umur: "10",
    },
    {
      nama: "test",
      Umur: "10",
    },
    {
      nama: "test",
      Umur: "10",
    },
    {
      nama: "test",
      Umur: "10",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-2">
          <input
            type="radio"
            id="radioCheck1"
            className="form-check-input"
            name="radio-stacked"
            onClick={RoundTrip}
          />
          <label htmlFor="radioCheck1" className="from-check-label">
            Round Trip
          </label>
        </div>
        <div className="col-2">
          <input
            type="radio"
            id="radioCheck2"
            className="form-check-input"
            name="radio-stacked"
            onClick={OneWay}
          />
          <label htmlFor="radioCheck2" className="from-check-label">
            One way
          </label>
        </div>
      </div>
      <div className="row g-1 justify-content-center">
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2">
              <img src={iconDepature} alt="icon" />
            </span>
            <select className="form-control ps-5">
              <option selected disabled hidden>from Where?</option>
              {test.map((index) => (
                <>
                  <option>{index.nama}</option>
                </>
              ))}
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2">
              <img src={iconArrival} alt="icon" />
            </span>
            <select className="form-control ps-5">
              <option selected disabled hidden>Where To?</option>
              {test.map((index) => (
                <>
                  <option>{index.nama}</option>
                </>
              ))}
            </select>
          </div>
        </div>
        {checkRoundTrip ? (
          <>
            <div className="col-4">
              <div className="input-group">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input type="date" className="form-control" disabled/>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-4">
              <div className="input-group">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input type="date" className="form-control" />
              </div>
            </div>
          </>
        )}
        <div className="col-4">
          <div className="input-group input-group-sm">
            <span className="input-group-text">
              <img src={iconPerson} alt="icon" />
            </span>
            <select className="form-control">
              <option selected disabled hidden>Adult</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="input-group justify-content-center">
          <button className="btn bttn mt-1 text-white">Search</button>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
