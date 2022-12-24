import bg from "../../assets/world.svg";
import Dropdown from "../../components/Dropdown";
import iconArrow from "../../assets/arrow.png";
import Cards from "../../components/card/Cards";
import CardsExplore from "../../components/card/CardsExplore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardSchedule from "../../components/card/CardSchedule";
import { useSelector } from "react-redux";

function Home(props) {

  const {adult, setAdult, child, setChild} = props
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  
  const {token} = useSelector((state) => state.auth)
  const [loading] = useState(false);

  const navigate = useNavigate()
  const departureTimeNew = departureTime.toString().split('T')[0]
  
  
  


  return (
    <div className="container-fluid">
      <div className="position-relative">
        <img src={bg} className="w-100 h-100 opacity-50" alt="bg" />
        <p className="tag-line position-absolute top-50 start-50 translate-middle px-3 text-center fw-bold">
          Fly The Best Part Of The Day
        </p>
        <div className="position-absolute top-60 start-50 translate-middle" id="content-search">
          {token ? (
            <>
              <Dropdown
                departureTimeNew={departureTimeNew}
                fromAirport={fromAirport}
                setFromAirport={setFromAirport}
                toAirport={toAirport}
                setToAirport={setToAirport}
                departureTime={departureTime}
                setDepartureTime={setDepartureTime}
                adult={adult}
                setAdult={setAdult}
                child={child}
                setChild={setChild}
              />
            </>
          ): (
            <>
              <button className="btn bttn btn-gonow" onClick={() => navigate('/signin')}>Go Now</button>
            </>
          )}
        </div>
      </div>
      {token ? (
        <>
          <div className="container">
            <div className="mt-5">
              <div className="row gap-3 d-flex justify-content-center mb-5">
                <CardSchedule loading={loading}/>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="mt-10 content">
              <div className="row">
                <p className="text col-11">
                  Find your next adventure with these{" "}
                  <span className="text-success-400">flight deals</span>
                </p>
                <p className="text-all col">
                  All <img src={iconArrow} alt="iconarrow" className="iconArrow"/>
                </p>
              </div>
              <div className="row gap-3 mt-5 mx-auto cards">
                <Cards />
              </div>
            </div>
            <div className="mt-10 content">
              <div className="row">
                <p className="text col-11">
                  Explore unique{" "}
                  <span className="text-success-900">places to stay</span>
                </p>
                <p className="text-all col">
                  All <img src={iconArrow} alt="iconarrow" className="iconArrow"/>
                </p>
              </div>
              <div className="row gap-3 mt-5 mx-auto cards">
                <CardsExplore />
              </div>
            </div>
            <div className="mt-7 d-flex justify-content-center">
              <button className="btn bttn text-white">
                Explore More Destination
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
