import bg from "../../assets/world.svg";
import Dropdown from "../../components/Dropdown";
import iconArrow from "../../assets/arrow.png";
import Cards from "../../components/card/Cards";
import CardsExplore from "../../components/card/CardsExplore";
import CardsComment from "../../components/card/CardsComment";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import CardSchedule from "../../components/card/CardSchedule";

function Home({ token }) {
  // const [schedule, setSchedule] = useState([]);
  const [search, setSearch] = useState([]);
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  
  // const [returnTime, setReturnTime] = useState('')
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const departureTimeNew = departureTime.toString().split('T')[0]

  

  const handleSearchSchedule = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/schedule?`,
        { 
          headers: {
            Authorization: `${token}`,
          },
          params: {
            departure_time: departureTimeNew,
            from_airport: fromAirport,
            to_airport: toAirport,
            adult: adult,
            child: child,
          },
        }
      );
      setSearch(res.data);
    } catch (err) {
      alert(err.response.data.message)
    } finally{
      setLoading(false)
    }
  };


  return (
    <div className="container-fluid">
      <div className="position-relative">
        <img src={bg} className="w-100 h-100 opacity-50" alt="bg" />
        <p className="tag-line position-absolute top-50 start-50 translate-middle px-3 text-center fw-bold">
          Fly The Best Part Of The Day
        </p>
        <div className="position-absolute top-60 start-50 translate-middle">
          {token ? (
            <>
              <Dropdown
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
                handleSearchSchedule={handleSearchSchedule}
              />
            </>
          ): (
            <>
              <button className="btn bttn mt-1 text-white" onClick={() => navigate('/signin')}>Go Now</button>
            </>
          )}
        </div>
      </div>
      {token ? (
        <>
          <div className="container">
            <div className="mt-5">
              <div className="row gap-3 d-flex justify-content-center mb-5">
                <CardSchedule loading={loading} search={search}/>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="mt-10">
              <div className="row">
                <p className="text col-11">
                  Find your next adventure with these{" "}
                  <span className="text-success-400">flight deals</span>
                </p>
                <p className="text-all col">
                  All <img src={iconArrow} alt="iconarrow" />
                </p>
              </div>
              <div className="row gap-3 mt-5 mx-auto">
                <Cards />
              </div>
            </div>
            <div className="mt-10">
              <div className="row">
                <p className="text col-11">
                  Explore unique{" "}
                  <span className="text-success-900">places to stay</span>
                </p>
                <p className="text-all col">
                  All <img src={iconArrow} alt="iconarrow" />
                </p>
              </div>
              <div className="row gap-3 mt-5 mx-auto">
                <CardsExplore />
              </div>
            </div>
            <div className="mt-7 d-flex justify-content-center">
              <button className="btn bttn text-white">
                Explore More Destination
              </button>
            </div>
            <div className="my-7">
              <p className="d-flex justify-content-center text">
                What Users Saying
              </p>
              <div className="mt-7 mx-auto gap-2">
                <CardsComment />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
