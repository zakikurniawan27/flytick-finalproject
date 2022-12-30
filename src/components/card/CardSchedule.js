import React from "react";
import logoAirplane from "../../assets/logoAirplane.png";
import Moment from 'react-moment'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function CardSchedule() {

  const navigate = useNavigate()
  const {searchSchedules} = useSelector((state) => state.searchSchedule)


  const dataMaskapai = [
    {
      nama: "TickAir",
      image: <img src={logoAirplane} alt="" className="logoAirplane" />,
    },
  ];

  return (
    <>
      {searchSchedules?.data?.length === 0 ? (
        <p className="fw-bold text-center">NO SCHEDULE</p>
      ) : (
        searchSchedules?.data?.schedules?.map((item, index) => (
          <div className="card card-schedule">
            <div className="card-body">
              <div className="row">
                {dataMaskapai.map((itm, ind) => (
                  <>
                    <div className="col" key={ind}>
                      <div>{itm.image}</div>
                    </div>
                    <div className="col" key={ind}>
                      <p>{itm.nama}</p>
                    </div>
                  </>
                ))}
                <div className="col">
                  {searchSchedules?.data.fromAirport?.name}
                </div>
                <div className="col text-center">
                  <p className="fs-4 iconFillArrow">
                    <BsFillArrowRightCircleFill />
                  </p>
                </div>
                <div className="col">
                  {searchSchedules?.data.toAirport?.name}
                </div>
                <div className="col text-uppercase" key={index}>
                  <div><Moment format="YYYY-MM-DD">{item.departure_time}</Moment></div>
                  <div><Moment format="hh:mm a">{item.departure_time}</Moment></div>
                </div>
                <div className="col text-uppercase">
                  <div><Moment format="YYYY-MM-DD">{item.arrival_time}</Moment></div>
                  <div><Moment format="hh:mm a">{item.arrival_time}</Moment></div>
                </div>
                <div className="col">
                  <button className="btn bttn" onClick={() => navigate(`/transaction/${item.id}`)}>Select</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default CardSchedule;
