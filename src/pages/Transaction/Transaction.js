import logoAirplane from "../../assets/logoAirplane.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import FormTransaction1 from "../../components/FormTransaction/FormTransaction1";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSchedule } from "../../Redux/Actions/scheduleActions";
import FormTransaction2 from "../../components/FormTransaction/FormTransaction2";
import FormTransaction3 from "../../components/FormTransaction/FormTransaction3";
import { createTransaction } from "../../Redux/Actions/createTransactionAction";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import FormTransaction4 from "../../components/FormTransaction/FormTransaction4";
import FormTransaction5 from "../../components/FormTransaction/FormTransaction5";

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

  //for fromTransaction 4
  const [email4, setEmail4] = useState("");
  const [nama4, setNama4] = useState("");
  const [nik4, setNik4] = useState("");
  const [telp4, setTelp4] = useState("");
  const [birthPlace4, setBirthPlace4] = useState("");
  const [birthDate4, setBirthDate4] = useState("");
  const [nationality4, setNationality4]= useState("");
  const [passport4, setPassport4] = useState("");
  const [issueDate4, setIssueDate4] = useState("");
  const [expireDate4, setExpireDate4] = useState("");

  const birthDateNew4 = birthDate4.toString().split('T')[0]
  const issueDateNew4 = issueDate4.toString().split('T')[0]
  const expireDateNew4 = expireDate4.toString().split('T')[0]

   //for fromTransaction 5
   const [email5, setEmail5] = useState("");
   const [nama5, setNama5] = useState("");
   const [nik5, setNik5] = useState("");
   const [telp5, setTelp5] = useState("");
   const [birthPlace5, setBirthPlace5] = useState("");
   const [birthDate5, setBirthDate5] = useState("");
   const [nationality5, setNationality5]= useState("");
   const [passport5, setPassport5] = useState("");
   const [issueDate5, setIssueDate5] = useState("");
   const [expireDate5, setExpireDate5] = useState("");
 
   const birthDateNew5 = birthDate5.toString().split('T')[0]
   const issueDateNew5 = issueDate5.toString().split('T')[0]
   const expireDateNew5 = expireDate5.toString().split('T')[0]

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const intNationality = parseInt(nationality)
  const intNationality2 = parseInt(nationality2)
  const intNationality3 = parseInt(nationality3)
  const intNationality4 = parseInt(nationality4)
  const intNationality5 = parseInt(nationality5)

  const {user, token} = useSelector((state) => state.auth)
  const { searchSchedule } = useSelector((state) => state);

  const data = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: [searchSchedule?.detail?.data?.schedule?.id],
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email: email,
          name: nama,
          nik: nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp: telp,
          nationality: intNationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      }
    ]
  })

  const data2 = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: [searchSchedule?.detail?.data?.schedule?.id],
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email: email,
          name: nama,
          nik: nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp: telp,
          nationality: intNationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      },
      {
        body:{
          email: email2,
          name: nama2,
          nik: nik2,
          birth_place: birthPlace2,
          birth_date: birthDateNew2,
          telp: telp2,
          nationality: intNationality2,
          no_passport: passport2,
          issue_date: issueDateNew2,
          expire_date: expireDateNew2
        }
      }
    ]
  })

  const data3 = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: [searchSchedule?.detail?.data?.schedule?.id],
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email: email,
          name: nama,
          nik: nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp: telp,
          nationality: intNationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      },
      {
        body:{
          email: email2,
          name: nama2,
          nik: nik2,
          birth_place: birthPlace2,
          birth_date: birthDateNew2,
          telp: telp2,
          nationality: intNationality2,
          no_passport: passport2,
          issue_date: issueDateNew2,
          expire_date: expireDateNew2
        }
      },
      {
        body:{
          email: email3,
          name: nama3,
          nik: nik3,
          birth_place: birthPlace3,
          birth_date: birthDateNew3,
          telp: telp3,
          nationality: intNationality3,
          no_passport: passport3,
          issue_date: issueDateNew3,
          expire_date: expireDateNew3
        }
      }
    ]
  })

  const data4 = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: [searchSchedule?.detail?.data?.schedule?.id],
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email: email,
          name: nama,
          nik: nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp: telp,
          nationality: intNationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      },
      {
        body:{
          email: email2,
          name: nama2,
          nik: nik2,
          birth_place: birthPlace2,
          birth_date: birthDateNew2,
          telp: telp2,
          nationality: intNationality2,
          no_passport: passport2,
          issue_date: issueDateNew2,
          expire_date: expireDateNew2
        }
      },
      {
        body:{
          email: email3,
          name: nama3,
          nik: nik3,
          birth_place: birthPlace3,
          birth_date: birthDateNew3,
          telp: telp3,
          nationality: intNationality3,
          no_passport: passport3,
          issue_date: issueDateNew3,
          expire_date: expireDateNew3
        }
      },
      {
        body:{
          email: email4,
          name: nama4,
          nik: nik4,
          birth_place: birthPlace4,
          birth_date: birthDateNew4,
          telp: telp4,
          nationality: intNationality4,
          no_passport: passport4,
          issue_date: issueDateNew4,
          expire_date: expireDateNew4
        }
      }
    ]
  })

  const data5 = JSON.stringify({
    user_id: user?.data?.id,
    schedule_id: [searchSchedule?.detail?.data?.schedule?.id],
    adult: dws,
    child: ank,
    round_trip: false,
    biodataList: [
      {
        body:{
          email: email,
          name: nama,
          nik: nik,
          birth_place: birthPlace,
          birth_date: birthDateNew,
          telp: telp,
          nationality: intNationality,
          no_passport: passport,
          issue_date: issueDateNew,
          expire_date: expireDateNew
        }
      },
      {
        body:{
          email: email2,
          name: nama2,
          nik: nik2,
          birth_place: birthPlace2,
          birth_date: birthDateNew2,
          telp: telp2,
          nationality: intNationality2,
          no_passport: passport2,
          issue_date: issueDateNew2,
          expire_date: expireDateNew2
        }
      },
      {
        body:{
          email: email3,
          name: nama3,
          nik: nik3,
          birth_place: birthPlace3,
          birth_date: birthDateNew3,
          telp: telp3,
          nationality: intNationality3,
          no_passport: passport3,
          issue_date: issueDateNew3,
          expire_date: expireDateNew3
        }
      },
      {
        body:{
          email: email4,
          name: nama4,
          nik: nik4,
          birth_place: birthPlace4,
          birth_date: birthDateNew4,
          telp: telp4,
          nationality: intNationality4,
          no_passport: passport4,
          issue_date: issueDateNew4,
          expire_date: expireDateNew4
        }
      },
      {
        body:{
          email: email5,
          name: nama5,
          nik: nik5,
          birth_place: birthPlace5,
          birth_date: birthDateNew5,
          telp: telp5,
          nationality: intNationality5,
          no_passport: passport5,
          issue_date: issueDateNew5,
          expire_date: expireDateNew5
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
    <div className="container-xl">
      <div className="row">
        <div className="col-8" id="col-8-formTransaction">
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
                <button className="btn bttn btn-buy" onClick={() => dispatch(createTransaction(data, token, navigate))}>BUY</button>
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
                <button className="btn bttn btn-buy" onClick={() => dispatch(createTransaction(data2, token, navigate))}>BUY</button>
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
                <button className="btn bttn btn-buy" onClick={() => dispatch(createTransaction(data2, token, navigate))}>BUY</button>
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
                <button className="btn bttn btn-buy" onClick={() => dispatch(createTransaction(data3, token, navigate))}>BUY</button>
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
                <button className="btn bttn btn-buy" onClick={() => dispatch(createTransaction(data3, token, navigate))}>BUY</button>
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
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data3, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 4 && ank === 0 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data4, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 3 && ank === 1 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data4, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 2 && ank === 2 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data4, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 1 && ank === 3 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data4, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 5 && ank === 0 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="mt-5">
                <FormTransaction5 
                  email5={email5}
                  setEmail5={setEmail5}
                  nama5={nama5}
                  setNama5={setNama5}
                  nik5={nik5}
                  setNik5={setNik5}
                  telp5={telp5}
                  setTelp5={setTelp5}
                  birthPlace5={birthPlace5}
                  setBirthPlace5={setBirthPlace5}
                  birthDate5={birthDate5}
                  setBirthDate5={setBirthDate5}
                  nationality5={nationality5}
                  setNationality5={setNationality5}
                  passport5={passport5}
                  setPassport5={setPassport5}
                  issueDate5={issueDate5}
                  setIssueDate5={setIssueDate5}
                  expireDate5={expireDate5}
                  setExpireDate5={setExpireDate5}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data5, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 4 && ank === 1 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="mt-5">
                <FormTransaction5 
                  email5={email5}
                  setEmail5={setEmail5}
                  nama5={nama5}
                  setNama5={setNama5}
                  nik5={nik5}
                  setNik5={setNik5}
                  telp5={telp5}
                  setTelp5={setTelp5}
                  birthPlace5={birthPlace5}
                  setBirthPlace5={setBirthPlace5}
                  birthDate5={birthDate5}
                  setBirthDate5={setBirthDate5}
                  nationality5={nationality5}
                  setNationality5={setNationality5}
                  passport5={passport5}
                  setPassport5={setPassport5}
                  issueDate5={issueDate5}
                  setIssueDate5={setIssueDate5}
                  expireDate5={expireDate5}
                  setExpireDate5={setExpireDate5}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data5, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 3 && ank === 2 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="mt-5">
                <FormTransaction5 
                  email5={email5}
                  setEmail5={setEmail5}
                  nama5={nama5}
                  setNama5={setNama5}
                  nik5={nik5}
                  setNik5={setNik5}
                  telp5={telp5}
                  setTelp5={setTelp5}
                  birthPlace5={birthPlace5}
                  setBirthPlace5={setBirthPlace5}
                  birthDate5={birthDate5}
                  setBirthDate5={setBirthDate5}
                  nationality5={nationality5}
                  setNationality5={setNationality5}
                  passport5={passport5}
                  setPassport5={setPassport5}
                  issueDate5={issueDate5}
                  setIssueDate5={setIssueDate5}
                  expireDate5={expireDate5}
                  setExpireDate5={setExpireDate5}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data5, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 2 && ank === 3 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="mt-5">
                <FormTransaction5 
                  email5={email5}
                  setEmail5={setEmail5}
                  nama5={nama5}
                  setNama5={setNama5}
                  nik5={nik5}
                  setNik5={setNik5}
                  telp5={telp5}
                  setTelp5={setTelp5}
                  birthPlace5={birthPlace5}
                  setBirthPlace5={setBirthPlace5}
                  birthDate5={birthDate5}
                  setBirthDate5={setBirthDate5}
                  nationality5={nationality5}
                  setNationality5={setNationality5}
                  passport5={passport5}
                  setPassport5={setPassport5}
                  issueDate5={issueDate5}
                  setIssueDate5={setIssueDate5}
                  expireDate5={expireDate5}
                  setExpireDate5={setExpireDate5}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data5, token, navigate))}>BUY</button>
              </div>
            </>
          )}
          {dws === 1 && ank === 4 && (
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
              <div className="mt-5">
                <FormTransaction4 
                  email4={email4}
                  setEmail4={setEmail4}
                  nama4={nama4}
                  setNama4={setNama4}
                  nik4={nik4}
                  setNik4={setNik4}
                  telp4={telp4}
                  setTelp4={setTelp4}
                  birthPlace4={birthPlace4}
                  setBirthPlace4={setBirthPlace4}
                  birthDate4={birthDate4}
                  setBirthDate4={setBirthDate4}
                  nationality4={nationality4}
                  setNationality4={setNationality4}
                  passport4={passport4}
                  setPassport4={setPassport4}
                  issueDate4={issueDate4}
                  setIssueDate4={setIssueDate4}
                  expireDate4={expireDate4}
                  setExpireDate4={setExpireDate4}
                />
              </div>
              <div className="mt-5">
                <FormTransaction5 
                  email5={email5}
                  setEmail5={setEmail5}
                  nama5={nama5}
                  setNama5={setNama5}
                  nik5={nik5}
                  setNik5={setNik5}
                  telp5={telp5}
                  setTelp5={setTelp5}
                  birthPlace5={birthPlace5}
                  setBirthPlace5={setBirthPlace5}
                  birthDate5={birthDate5}
                  setBirthDate5={setBirthDate5}
                  nationality5={nationality5}
                  setNationality5={setNationality5}
                  passport5={passport5}
                  setPassport5={setPassport5}
                  issueDate5={issueDate5}
                  setIssueDate5={setIssueDate5}
                  expireDate5={expireDate5}
                  setExpireDate5={setExpireDate5}
                />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn bttn btn-buy"  onClick={() => dispatch(createTransaction(data5, token, navigate))}>BUY</button>
              </div>
            </>
          )}
        </div>
        <div className="col-4" id="col-4-detail-schedule">
          <div className="card ">
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <p className="fw-bold">Detail Jadwal</p>
                </div>
                <div className="text-end">
                  <img
                    src={logoAirplane}
                    alt="logoAirplane"
                    id="logo-airplane"
                    className="logoAirplane"
                  />
                </div>
              </div>
              <p className="fw-bold">
                {searchSchedule?.detail?.data?.flight?.code}
              </p>
              <div className="row mt-3">
                <div className="col">
                  <p>{searchSchedule?.searchSchedules?.data?.fromAirport?.name}</p>
                </div>
                <div className="col text-center">
                  <p className="fs-4 iconFillArrow">
                    <BsFillArrowRightCircleFill />
                  </p>
                </div>
                <div className="col text-end">
                  <p>{searchSchedule?.searchSchedules?.data?.toAirport?.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <Moment format="hh:mm a">
                      {searchSchedule?.detail?.data?.schedule?.departure_time}
                    </Moment>
                  </p>
                </div>
                <div className="col text-end">
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
      <button className="btn" id="btn-back" onClick={() => navigate("/")}>
        back
      </button>
    </div>
  );
};

export default Transaction;
