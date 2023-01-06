import React from "react";
import Moment from "react-moment";
import { BsArrowRight, BsFillArrowRightCircleFill } from "react-icons/bs"

const CardDetails = (props) => {
  const { dataMaskapai, details, navigate } = props;
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
              <div className="row">
                <div className="col">
                  <p className="fw-semibold fs-5 text-history">{item.schedule.flight.code}</p>
                  <p>{item.schedule.flight.class}</p>
                </div>
                <div className="col">
                  {item.checked_in === false && <p className="text-danger fw-semibold text-end">Belum Check in</p>}
                  {item.checked_in === true && <p className="text-success fw-semibold text-end">Sudah Check in</p>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <p className="fw-semibold">{item.seat_number}</p>
                </div>
                <div className="col">
                  <p className="fw-semibold text-end">{details?.data.invoice_number}</p>
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
                    <Moment format="YYYY/MM/DD hh:mm a">
                      {item.schedule.departure_time}
                    </Moment>
                  </p>
                </div>
                <div className="col text-end">
                  <p>
                    <Moment format="YYYY/MM/DD hh:mm a">
                      {item.schedule.arrival_time}
                    </Moment>
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <p className="detail-ticket" onClick={() => navigate(`/history/detail/ticket/${item.id}`)}>
                  More Detail <BsArrowRight />
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default CardDetails;
