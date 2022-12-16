import React from "react";
import logoAirplane from "../../assets/logoAirplane.png";
import Moment from 'react-moment'
import { useNavigate } from "react-router-dom";

function CardSchedule(props) {
  const { loading, search } = props;

  const navigate = useNavigate()

  const dataMaskapai = [
    {
      nama: "TickAir",
      image: <img src={logoAirplane} alt="" className="logoAirplane" />,
    },
  ];

  return (
    <>
      {loading ? (
        <p> Loading... </p>
      ) : search?.data?.schedules?.length === 0 ? (
        <p className="fw-bold text-center">NO SCHEDULE</p>
      ) : (
        search?.data?.schedules?.map((item, index) => (
          <div className="card card-schedule">
            <div className="card-body">
              <div className="row" key={index}>
                {dataMaskapai.map((item, index) => (
                  <>
                    <div className="col" key={index}>
                      <div>{item.image}</div>
                    </div>
                    <div className="col" key={index}>
                      <p>{item.nama}</p>
                    </div>
                  </>
                ))}
                <div className="col">
                  <p>{search?.data.fromAirport.name}</p>
                </div>
                <div className="col">
                  <p>{search?.data.toAirport.name}</p>
                </div>
                <div className="col text-uppercase">
                  <div><Moment format="YYYY-MM-DD">{item.departure_time}</Moment></div>
                  <div><Moment format="hh:mm a">{item.departure_time}</Moment></div>
                </div>
                <div className="col text-uppercase">
                  <div><Moment format="YYYY-MM-DD">{item.arrival_time}</Moment></div>
                  <div><Moment format="hh:mm a">{item.arrival_time}</Moment></div>
                </div>
                <div className="col">
                  <button className="btn bttn" onClick={() => navigate(`/detail/${item.id}`)}>Detail</button>
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
