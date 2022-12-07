import bg from "../../assets/world.svg";
import Dropdown from "../../components/Dropdown";
import iconArrow from "../../assets/arrow.png";
import Cards from "../../components/card/Cards";
import CardsExplore from "../../components/card/CardsExplore";
import CardsComment from "../../components/card/CardsComment";

function Home() {
  return (
    <div className="container-fluid">
      <div className="position-relative">
        <img src={bg} className="w-100 h-100 opacity-50" alt="bg" />
        <p className="tag-line position-absolute top-50 start-50 translate-middle px-3 text-center fw-bold">
          Fly The Best Part Of The Day
        </p>
        <div className="position-absolute top-60 start-50 translate-middle">
          <Dropdown />
        </div>
      </div>
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
          <div className="row gap-1 mt-5 mx-auto">
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
          <div className="row gap-4 mt-5 mx-auto">
            <CardsExplore />
          </div>
        </div>
        <div className="mt-7 d-flex justify-content-center">
          <button className="btn bttn text-white">
            Explore More Destination
          </button>
        </div>
        <div className="my-7">
          <p className="d-flex justify-content-center text">What Users Saying</p>
          <div className="mt-7 mx-auto gap-2">
            <CardsComment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
