import React from "react";
import logoAirplane from "../../assets/logoAirplane.png";
import Moment from 'react-moment'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function CardSchedule() {

  const navigate = useNavigate()
  const {searchSchedules} = useSelector((state) => state.searchSchedule)

  const formatRupiah = (angka) => {
    const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${rupiah}`;
  };


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
        searchSchedules?.data?.map((item, index) => (
          <div className="card card-schedule">
            <div className="card-body">
              <div className="row">
                {dataMaskapai.map((itm, ind) => (
                  <>
                    <div key={ind} className="col">
                      <div>{itm.image}</div>
                    </div>
                    <div className="col text-schedule text-end" key={ind}>
                      <p>{itm.nama}</p>
                    </div>
                  </>
                ))}
              <div className="row mt-3 content-schedule">
                <div className="col">
                  <p className="text-schedule">
                    {item.flight.fClass}
                  </p>
                </div>
                <div className="col text-end">
                  <p className="text-schedule" key={index}>
                    {formatRupiah(item.cost)}
                  </p>
                </div>
              </div>
              </div>
              <div className="row mt-3 content-schedule">
                <div className="col text-schedule" key={index}>
                  {item.fromAirport.name}
                </div>
                <div className="col text-center">
                  <p className="fs-4 iconFillArrow text-schedule">
                    <BsFillArrowRightCircleFill />
                  </p>
                </div>
                <div className="col text-schedule" key={index}>
                  {item.toAirport.name}
                </div>
                <div className="col text-uppercase text-schedule">
                  <div key={index}><Moment format="YYYY-MM-DD">{item.departure_time}</Moment></div>
                  <div key={index}><Moment format="hh:mm a">{item.departure_time}</Moment></div>
                </div>
                <div className="col text-uppercase text-schedule">
                  <div key={index}><Moment format="YYYY-MM-DD">{item.arrival_time}</Moment></div>
                  <div key={index}><Moment format="hh:mm a">{item.arrival_time}</Moment></div>
                </div>
                <div className="col text-end" id="btn-select">
                  <button className="btn bttn" id="btn-select-schedule" onClick={() => navigate(`/transaction/${item.id}`)}>Select</button>
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
