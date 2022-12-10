import React, { useEffect, useState } from "react";
import iconDepature from "../assets/departure.png";
import iconArrival from "../assets/arrival.png";
import iconPerson from "../assets/person.png";
import axios from "axios"


function Dropdown() {
  const [checkTrip, setCheckTrip] = useState(false)
  const [airport, setAirport] = useState([])

  const RoundTrip = () =>{
    setCheckTrip(false)
  }

  const OneWay = () =>{
    setCheckTrip(true)
  }

  const test = async () =>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/airport`)
      setAirport(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const currentDate = new Date().toISOString().split("T")[0]

  useEffect(() => {
    test()
  },[])
  // const test = [
  //   {
  //     nama: "test",
  //     Umur: "10",
  //   },
  //   {
  //     nama: "test",
  //     Umur: "10",
  //   },
  //   {
  //     nama: "test",
  //     Umur: "10",
  //   },
  //   {
  //     nama: "test",
  //     Umur: "10",
  //   },
  //   {
  //     nama: "test",
  //     Umur: "10",
  //   },
  // ];
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
              {airport?.data?.map((index) => (
                <>
                  <option>{index.code}</option>
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
              {airport?.data?.map((index) => (
                <>
                  <option>{index.code}</option>
                </>
              ))}
            </select>
          </div>
        </div>
        {checkTrip ? (
          <>
            <div className="col-4">
              <div className="input-group">
                <input type="date" min={currentDate} className="form-control" />
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input type="date" min={currentDate} className="form-control" disabled/>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-4">
              <div className="input-group">
                <input type="date" min={currentDate} className="form-control" />
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input type="date" min={currentDate} className="form-control" />
              </div>
            </div>
          </>
        )}
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2">
              <img src={iconPerson} alt="icon" />
            </span>
            <select className="form-control ps-5">
              <option selected disabled hidden>Adult</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2">
              <img src={iconPerson} alt="icon" className="fs-6"/>
            </span>
            <select className="form-control ps-5">
              <option selected disabled hidden>Child</option>
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
