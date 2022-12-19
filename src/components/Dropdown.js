import React, { useEffect, useState } from "react";
import iconDepature from "../assets/departure.png";
import iconArrival from "../assets/arrival.png";
import iconPerson from "../assets/person.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllAirport } from "../Redux/Actions/allAirportActions";

function Dropdown(props) {

  const {fromAirport, setFromAirport, toAirport, setToAirport, departureTime, setDepartureTime, adult, setAdult, child, setChild, handleSearchSchedule} = props
  const [checkTrip, setCheckTrip] = useState(false);

  const dispatch = useDispatch();

  const RoundTrip = () => {
    setCheckTrip(false);
  };

  const OneWay = () => {
    setCheckTrip(true);
  };

  const { allAirports } = useSelector((state) => state.allAirport);

  const currentDate = new Date().toISOString().split("T")[0];

  

  useEffect(() => {
    dispatch(getAllAirport());
  }, [dispatch]);

  return (
    <>
      <div className="row gap-3">
        <div className="col-2 radio-check">
          <input
            type="radio"
            id="radioCheck1"
            className="form-check-input"
            name="radio-stacked"
            onClick={RoundTrip}
          />
          <label htmlFor="radioCheck1" className="form-check-label">
            Round Trip
          </label>
        </div>
        <div className="col-2 radio-check">
          <input
            type="radio"
            id="radioCheck2"
            className="form-check-input"
            name="radio-stacked"
            onClick={OneWay}
          />
          <label htmlFor="radioCheck2" className="form-check-label">
            One way
          </label>
        </div>
      </div>
      <div className="row g-1 justify-content-center" id="form-search">
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2 span-icon">
              <img src={iconDepature} alt="icon" className="icon"/>
            </span>
            <select className="form-control ps-5 select-dropdown" 
              value={fromAirport} 
              onChange={(e) => {
                e.preventDefault()
                setFromAirport(e.target.value)
              }}
            >
              <option value='' hidden>
                from Where?
              </option>
              {allAirports?.data?.map((item, index) => (
                <>
                  <option value={item.id} key={index}>{item.name}</option>
                </>
              ))}
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2 span-icon">
              <img src={iconArrival} alt="icon" className="icon"/>
            </span>
            <select className="form-control ps-5 select-dropdown"
              value={toAirport} 
              onChange={(e) => {
                e.preventDefault()
                setToAirport(e.target.value)
              }}
            >
              <option value='' hidden>
                Where To?
              </option>
              {allAirports?.data?.map((item, index) => (
                <>
                  <option value={item.id} key={index}>{item.name}</option>
                </>
              ))}
            </select>
          </div>
        </div>
        {checkTrip ? (
          <>
            <div className="col-4">
              <div className="input-group">
                <input 
                  type="date" 
                  min={currentDate} 
                  className="form-control input-date" 
                  value={departureTime} 
                  onChange={(e) =>{
                    e.preventDefault()
                    setDepartureTime(e.target.value)
                  }}/>
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input
                  type="date"
                  min={currentDate}
                  className="form-control input-date"
                  disabled
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-4">
              <div className="input-group">
                <input 
                  type="date" 
                  min={currentDate} 
                  className="form-control input-date" 
                  value={departureTime}
                  onChange={(e) => {
                    e.preventDefault()
                    setDepartureTime(e.target.value)
                  }} 
                />
              </div>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input 
                  type="date" 
                  min={currentDate} 
                  className="form-control input-date" 
                />
              </div>
            </div>
          </>
        )}
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2 span-icon">
              <img src={iconPerson} alt="icon" className="icon"/>
            </span>
            <select className="form-control ps-5 select-dropdown" 
              value={adult} 
              onChange={(e) => {
                e.preventDefault()
                setAdult(e.target.value)
              }}>
              <option value='' hidden>
                Adult
              </option>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-row align-items-center">
            <span className="position-absolute ps-2 span-icon">
              <img src={iconPerson} alt="icon" className="fs-6 icon" />
            </span>
            <select className="form-control ps-5 select-dropdown" 
              value={child}
              onChange={(e) => {
                e.preventDefault()
                setChild(e.target.value)
              }}>
              <option value='' hidden>
                Child
              </option>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className="input-group justify-content-center">
          <button className="btn bttn mt-1" onClick={handleSearchSchedule}>Search</button>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
