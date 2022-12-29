import React from "react";
import Moment from "react-moment";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const CardDetails = (props) => {
  const { dataMaskapai, details } = props;
  return (
    <>
      {details?.data?.tickets?.map((item) => (
        <>
          <div className="card card-history">
            <div className="card-body">
              <div className="row ">
                {dataMaskapai.map((itm) => (
                  <>
                    <div className="col-4" key={itm.id}>
                      {itm.image}
                    </div>
                    <div className="col text-end" key={itm.id}>
                      {itm.nama}
                    </div>
                  </>
                ))}
              </div>
              <div className="col">
                <p className="fw-semibold fs-5">{item.schedule.flight.code}</p>
                <p>{item.schedule.flight.class}</p>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <p className="fw-semibold">{item.seat_number}</p>
                </div>
                <div className="col">
                  <p className="fw-semibold text-end">{item.ticket_number}</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col text-start">
                  {item.schedule.fromAirport.name}
                </div>
                <div className="col text-center">
                  <p className="fs-4 iconFillArrow">
                    <BsFillArrowRightCircleFill />
                  </p>
                </div>
                <div className="col text-end">
                  {item.schedule.toAirport.name}
                </div>
              </div>
              <div className="row mt-1">
                <div className="col">
                  <p>
                    <Moment format="hh:mm a">
                      {item.schedule.departure_time}
                    </Moment>
                  </p>
                </div>
                <div className="col text-end">
                  <p>
                    <Moment format="hh:mm a">
                      {item.schedule.arrival_time}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default CardDetails;
