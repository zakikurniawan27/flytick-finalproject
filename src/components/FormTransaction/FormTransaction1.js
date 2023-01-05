import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcity } from "../../Redux/Actions/cityActions";
import { getAllCountry } from "../../Redux/Actions/countryActions";

function FormTransaction1(props) {
  const {
    email,
    setEmail,
    nama,
    setNama,
    nik,
    setNik,
    telp,
    setTelp,
    birthPlace,
    setBirthPlace,
    birthDate,
    setBirthDate,
    nationality,
    setNationality,
    passport,
    setPassport,
    issueDate,
    setIssueDate,
    expireDate,
    setExpireDate
  } = props;

  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.country);
  const { cities } = useSelector((state) => state.city);

  useEffect(() => {
    dispatch(getAllCountry());
    dispatch(getAllcity());
  }, [dispatch]);

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <p className="text-center fw-bold">Data Penumpang 1</p>
          <div className="row mt-5">
            <div className="col">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control form-control-transaction"
                placeholder="masukan email anda"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label htmlFor="nama" className="form-label">
                Nama Lengkap
              </label>
              <input
                id="nama"
                type="text"
                className="form-control form-control-transaction"
                placeholder="masukan nama anda"
                value={nama}
                onChange={(e) => {
                  e.preventDefault();
                  setNama(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <label htmlFor="ni" className="form-label">
                NIK
              </label>
              <input
                id="nik"
                type="number"
                className="form-control form-control-transaction"
                placeholder="masukan NIK anda"
                value={nik}
                onChange={(e) => {
                  e.preventDefault();
                  setNik(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label htmlFor="noTelp" className="form-label">
                Nomor Telepon
              </label>
              <input
                id="noTelp"
                type="text"
                className="form-control form-control-transaction"
                placeholder="masukan nomor telepon anda"
                value={telp}
                onChange={(e) => {
                  e.preventDefault();
                  setTelp(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <label htmlFor="tempatLahir" className="form-label">
                Tempat lahir
              </label>
              <select 
                className="form-control form-control-transaction" 
                id="tempatLahir" 
                value={birthPlace} 
                onChange={(e) => {
                    e.preventDefault()
                    setBirthPlace(e.target.value)
                }}>
                <option value="">Tempat lahir</option>
                {cities?.data?.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <label htmlFor="tanggalLahir" className="form-label">
                Tanggal lahir
              </label>
              <input
                id="tanggalLahir"
                type="date"
                className="form-control form-control-transaction"
                value={birthDate}
                onChange={(e) => {
                    e.preventDefault()
                    setBirthDate(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <select 
                className="form-control form-control-transaction" 
                id="nationality"
                value={nationality}
                onChange={(e) => {
                    e.preventDefault()
                    setNationality(e.target.value)
                }}
                >
                <option value="">Your Nationality</option>
                {countries?.data?.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <label htmlFor="passport" className="form-label">
                Passport
              </label>
              <input
                id="passport"
                type="text"
                className="form-control form-control-transaction"
                placeholder="masukan nomor passport anda"
                value={passport}
                onChange={(e) => {
                    e.preventDefault()
                    setPassport(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <label htmlFor="penerbitan" className="form-label">
                Tanggal Penerbitan
              </label>
              <input
                id="penerbitan"
                type="date"
                className="form-control form-control-transaction"
                value={issueDate}
                onChange={(e) => {
                    e.preventDefault()
                    setIssueDate(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <label htmlFor="tanggalLahir" className="form-label">
                Tanggal berakhir
              </label>
              <input
                id="tanggalLahir"
                type="date"
                className="form-control form-control-transaction"
                value={expireDate}
                onChange={(e) => {
                    e.preventDefault()
                    setExpireDate(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormTransaction1;
