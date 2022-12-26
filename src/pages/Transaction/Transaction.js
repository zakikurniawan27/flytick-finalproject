import iconArrow from "../../assets/arrow.png";
import logoAirplane from "../../assets/logoAirplane.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import FormTransaction1 from "../../components/FormTransaction1";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSchedule } from "../../Redux/Actions/scheduleActions";
import FormTransaction2 from "../../components/FormTransaction2";
import FormTransaction3 from "../../components/FormTransaction3";
import { createTransaction } from "../../Redux/Actions/createTransactionAction";

const Transaction = (props) => {
  const { adult, child } = props;
  const dws = parseInt(adult);
  const ank = parseInt(child);
  //for formTransaction 1
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [telp, setTelp] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality]= useState("");
  const [passport, setPassport] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const birthDateNew = birthDate.toString().split('T')[0]
  const issueDateNew = issueDate.toString().split('T')[0]
  const expireDateNew = expireDate.toString().split('T')[0]

  //for formTransaction 2
  const [email2, setEmail2] = useState("");
  const [nama2, setNama2] = useState("");
  const [nik2, setNik2] = useState("");
  const [telp2, setTelp2] = useState("");
  const [birthPlace2, setBirthPlace2] = useState("");
  const [birthDate2, setBirthDate2] = useState("");
  const [nationality2, setNationality2]= useState("");
  const [passport2, setPassport2] = useState("");
  const [issueDate2, setIssueDate2] = useState("");
  const [expireDate2, setExpireDate2] = useState("");

  const birthDateNew2 = birthDate2.toString().split('T')[0]
  const issueDateNew2 = issueDate2.toString().split('T')[0]
  const expireDateNew2 = expireDate2.toString().split('T')[0]

  //for fromTransaction 3
  const [email3, setEmail3] = useState("");
  const [nama3, setNama3] = useState("");
  const [nik3, setNik3] = useState("");
  const [telp3, setTelp3] = useState("");
  const [birthPlace3, setBirthPlace3] = useState("");
  const [birthDate3, setBirthDate3] = useState("");
  const [nationality3, setNationality3]= useState("");
  const [passport3, setPassport3] = useState("");
  const [issueDate3, setIssueDate3] = useState("");
  const [expireDate3, setExpireDate3] = useState("");

  const birthDateNew3 = birthDate3.toString().split('T')[0]
  const issueDateNew3 = issueDate3.toString().split('T')[0]
  const expireDateNew3 = expireDate3.toString().split('T')[0]

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const {user, token} = useSelector((state) => state.auth)
  const { searchSchedule } = useSelector((state) => state);

  const data = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: searchSchedule?.detail?.data?.schedule?.id,
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email,
          name: nama,
          nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp,
          nationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      }
    ]
  })

  const data2 = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: searchSchedule?.detail?.data?.schedule?.id,
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email,
          name: nama,
          nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp,
          nationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      },
      {
        body:{
          email2,
          name: nama2,
          nik2,
          birth_place: birthPlace2,
          birth_date: birthDateNew2,
          telp2,
          nationality2,
          no_passport: passport2,
          issue_date: issueDateNew2,
          expire_date: expireDateNew2
        }
      }
    ]
  })

  const data3 = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: searchSchedule?.detail?.data?.schedule?.id,
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email,
          name: nama,
          nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp,
          nationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      },
      {
        body:{
          email2,
          name: nama2,
          nik2,
          birth_place: birthPlace2,
          birth_date: birthDateNew2,
          telp2,
          nationality2,
          no_passport: passport2,
          issue_date: issueDateNew2,
          expire_date: expireDateNew2
        }
      },
      {
        body:{
          email3,
          name: nama3,
          nik3,
          birth_place: birthPlace3,
          birth_date: birthDateNew3,
          telp3,
          nationality3,
          no_passport: passport3,
          issue_date: issueDateNew3,
          expire_date: expireDateNew3
        }
      }
    ]
  })

  const formatRupiah = (angka) => {
    const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${rupiah}`;
  };
  const cost = `${searchSchedule?.detail?.data?.schedule?.cost}`;
  const costRupiah = formatRupiah(cost);

  useEffect(() => {
    dispatch(getDetailSchedule(params.id));
  }, [
    dispatch,
    params,
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {dws === 1 && ank === 0 && (
            <>
              <FormTransaction1
                email={email}
                setEmail={setEmail}
                nama={nama}
                setNama={setNama}
                nik={nik}
                setNik={setNik}
                telp={telp}
                setTelp={setTelp}
                birthPlace={birthPlace}
                setBirthPlace={setBirthPlace}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                nationality={nationality}
                setNationality={setNationality}
                passport={passport}
                setPassport={setPassport}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
              />
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn" onClick={() => dispatch(createTransaction(data, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 2 && ank === 0 && (
            <>
              <FormTransaction1
                email={email}
                setEmail={setEmail}
                nama={nama}
                setNama={setNama}
                nik={nik}
                setNik={setNik}
                telp={telp}
                setTelp={setTelp}
                birthPlace={birthPlace}
                setBirthPlace={setBirthPlace}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                nationality={nationality}
                setNationality={setNationality}
                passport={passport}
                setPassport={setPassport}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
              />
              <div className="mt-5">
                <FormTransaction2
                  email2={email2}
                  setEmail2={setEmail2}
                  nama2={nama2}
                  setNama2={setNama2}
                  nik2={nik2}
                  setNik2={setNik2}
                  telp2={telp2}
                  setTelp2={setTelp2}
                  birthPlace2={birthPlace2}
                  setBirthPlace2={setBirthPlace2}
                  birthDate2={birthDate2}
                  setBirthDate2={setBirthDate2}
                  nationality2={nationality2}
                  setNationality2={setNationality2}
                  passport2={passport2}
                  setPassport2={setPassport2}
                  issueDate2={issueDate2}
                  setIssueDate2={setIssueDate2}
                  expireDate2={expireDate2}
                  setExpireDate2={setExpireDate2}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn" onClick={() => dispatch(createTransaction(data2, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 1 && ank === 1 && (
            <>
              <FormTransaction1
                email={email}
                setEmail={setEmail}
                nama={nama}
                setNama={setNama}
                nik={nik}
                setNik={setNik}
                telp={telp}
                setTelp={setTelp}
                birthPlace={birthPlace}
                setBirthPlace={setBirthPlace}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                nationality={nationality}
                setNationality={setNationality}
                passport={passport}
                setPassport={setPassport}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
              />
              <div className="mt-5">
                <FormTransaction2
                  email2={email2}
                  setEmail2={setEmail2}
                  nama2={nama2}
                  setNama2={setNama2}
                  nik2={nik2}
                  setNik2={setNik2}
                  telp2={telp2}
                  setTelp2={setTelp2}
                  birthPlace2={birthPlace2}
                  setBirthPlace2={setBirthPlace2}
                  birthDate2={birthDate2}
                  setBirthDate2={setBirthDate2}
                  nationality2={nationality2}
                  setNationality2={setNationality2}
                  passport2={passport2}
                  setPassport2={setPassport2}
                  issueDate2={issueDate2}
                  setIssueDate2={setIssueDate2}
                  expireDate2={expireDate2}
                  setExpireDate2={setExpireDate2}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn" onClick={() => dispatch(createTransaction(data2, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 3 && ank === 0 && (
            <>
              <FormTransaction1
                email={email}
                setEmail={setEmail}
                nama={nama}
                setNama={setNama}
                nik={nik}
                setNik={setNik}
                telp={telp}
                setTelp={setTelp}
                birthPlace={birthPlace}
                setBirthPlace={setBirthPlace}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                nationality={nationality}
                setNationality={setNationality}
                passport={passport}
                setPassport={setPassport}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
              />
              <div className="mt-5">
                <FormTransaction2
                  email2={email2}
                  setEmail2={setEmail2}
                  nama2={nama2}
                  setNama2={setNama2}
                  nik2={nik2}
                  setNik2={setNik2}
                  telp2={telp2}
                  setTelp2={setTelp2}
                  birthPlace2={birthPlace2}
                  setBirthPlace2={setBirthPlace2}
                  birthDate2={birthDate2}
                  setBirthDate2={setBirthDate2}
                  nationality2={nationality2}
                  setNationality2={setNationality2}
                  passport2={passport2}
                  setPassport2={setPassport2}
                  issueDate2={issueDate2}
                  setIssueDate2={setIssueDate2}
                  expireDate2={expireDate2}
                  setExpireDate2={setExpireDate2}
                />
              </div>
              <div className="mt-5">
                <FormTransaction3
                  email3={email3}
                  setEmail3={setEmail3}
                  nama3={nama3}
                  setNama3={setNama3}
                  nik3={nik3}
                  setNik3={setNik3}
                  telp3={telp3}
                  setTelp3={setTelp3}
                  birthPlace3={birthPlace3}
                  setBirthPlace3={setBirthPlace3}
                  birthDate3={birthDate3}
                  setBirthDate3={setBirthDate3}
                  nationality3={nationality3}
                  setNationality3={setNationality3}
                  passport3={passport3}
                  setPassport3={setPassport3}
                  issueDate3={issueDate3}
                  setIssueDate3={setIssueDate3}
                  expireDate3={expireDate3}
                  setExpireDate3={setExpireDate3}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn" onClick={() => dispatch(createTransaction(data3, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 2 && ank === 1 && (
            <>
              <FormTransaction1
                email={email}
                setEmail={setEmail}
                nama={nama}
                setNama={setNama}
                nik={nik}
                setNik={setNik}
                telp={telp}
                setTelp={setTelp}
                birthPlace={birthPlace}
                setBirthPlace={setBirthPlace}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                nationality={nationality}
                setNationality={setNationality}
                passport={passport}
                setPassport={setPassport}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
              />
              <div className="mt-5">
                <FormTransaction2
                  email2={email2}
                  setEmail2={setEmail2}
                  nama2={nama2}
                  setNama2={setNama2}
                  nik2={nik2}
                  setNik2={setNik2}
                  telp2={telp2}
                  setTelp2={setTelp2}
                  birthPlace2={birthPlace2}
                  setBirthPlace2={setBirthPlace2}
                  birthDate2={birthDate2}
                  setBirthDate2={setBirthDate2}
                  nationality2={nationality2}
                  setNationality2={setNationality2}
                  passport2={passport2}
                  setPassport2={setPassport2}
                  issueDate2={issueDate2}
                  setIssueDate2={setIssueDate2}
                  expireDate2={expireDate2}
                  setExpireDate2={setExpireDate2}
                />
              </div>
              <div className="mt-5">
                <FormTransaction3
                  email3={email3}
                  setEmail3={setEmail3}
                  nama3={nama3}
                  setNama3={setNama3}
                  nik3={nik3}
                  setNik3={setNik3}
                  telp3={telp3}
                  setTelp3={setTelp3}
                  birthPlace3={birthPlace3}
                  setBirthPlace3={setBirthPlace3}
                  birthDate3={birthDate3}
                  setBirthDate3={setBirthDate3}
                  nationality3={nationality3}
                  setNationality3={setNationality3}
                  passport3={passport3}
                  setPassport3={setPassport3}
                  issueDate3={issueDate3}
                  setIssueDate3={setIssueDate3}
                  expireDate3={expireDate3}
                  setExpireDate3={setExpireDate3}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn" onClick={() => dispatch(createTransaction(data3, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 1 && ank === 2 && (
            <>
              <FormTransaction1
                email={email}
                setEmail={setEmail}
                nama={nama}
                setNama={setNama}
                nik={nik}
                setNik={setNik}
                telp={telp}
                setTelp={setTelp}
                birthPlace={birthPlace}
                setBirthPlace={setBirthPlace}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                nationality={nationality}
                setNationality={setNationality}
                passport={passport}
                setPassport={setPassport}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
              />
              <div className="mt-5">
                <FormTransaction2
                  email2={email2}
                  setEmail2={setEmail2}
                  nama2={nama2}
                  setNama2={setNama2}
                  nik2={nik2}
                  setNik2={setNik2}
                  telp2={telp2}
                  setTelp2={setTelp2}
                  birthPlace2={birthPlace2}
                  setBirthPlace2={setBirthPlace2}
                  birthDate2={birthDate2}
                  setBirthDate2={setBirthDate2}
                  nationality2={nationality2}
                  setNationality2={setNationality2}
                  passport2={passport2}
                  setPassport2={setPassport2}
                  issueDate2={issueDate2}
                  setIssueDate2={setIssueDate2}
                  expireDate2={expireDate2}
                  setExpireDate2={setExpireDate2}
                />
              </div>
              <div className="mt-5">
                <FormTransaction3
                  email3={email3}
                  setEmail3={setEmail3}
                  nama3={nama3}
                  setNama3={setNama3}
                  nik3={nik3}
                  setNik3={setNik3}
                  telp3={telp3}
                  setTelp3={setTelp3}
                  birthPlace3={birthPlace3}
                  setBirthPlace3={setBirthPlace3}
                  birthDate3={birthDate3}
                  setBirthDate3={setBirthDate3}
                  nationality3={nationality3}
                  setNationality3={setNationality3}
                  passport3={passport3}
                  setPassport3={setPassport3}
                  issueDate3={issueDate3}
                  setIssueDate3={setIssueDate3}
                  expireDate3={expireDate3}
                  setExpireDate3={setExpireDate3}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn" onClick={() => dispatch(createTransaction(data3, token, navigate))}>BUY</button>
              </div>
            </>
          )}
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <p className="fw-bold">Detail Jadwal</p>
                </div>
                <div className="col-4">
                  <img
                    src={logoAirplane}
                    alt="logoAirplane"
                    className="logoAirplane"
                  />
                </div>
              </div>
              <p className="fw-bold">
                {searchSchedule?.detail?.data?.flight?.code}
              </p>
              <div className="row ms-5">
                <div className="col">
                  <p>{searchSchedule?.searchSchedules?.data?.fromAirport?.name}</p>
                  <p>
                    <Moment format="hh:mm a">
                      {searchSchedule?.detail?.data?.schedule?.departure_time}
                    </Moment>
                  </p>
                </div>
                <div className="col">
                  <img src={iconArrow} alt="icon" />
                </div>
                <div className="col">
                  <p>{searchSchedule?.searchSchedules?.data?.toAirport?.name}</p>
                  <p>
                    <Moment format="hh:mm a">
                      {searchSchedule?.detail?.data?.schedule?.arrival_time}
                    </Moment>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-success-900 fw-bold fs-3 price">
                {" "}
                {costRupiah}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={() => navigate("/")}>
        back
      </button>
    </div>
  );
};

export default Transaction;
