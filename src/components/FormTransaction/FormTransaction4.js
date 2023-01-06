import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcity } from "../../Redux/Actions/cityActions";
import { getAllCountry } from "../../Redux/Actions/countryActions";

function FormTransaction4(props) {
  const {
    email4,
    setEmail4,
    nama4,
    setNama4,
    nik4,
    setNik4,
    telp4,
    setTelp4,
    birthPlace4,
    setBirthPlace4,
    birthDate4,
    setBirthDate4,
    nationality4,
    setNationality4,
    passport4,
    setPassport4,
    issueDate4,
    setIssueDate4,
    expireDate4,
    setExpireDate4
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
          <p className="text-center fw-bold">Data Penumpang 4</p>
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
                value={email4}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail4(e.target.value);
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
                value={nama4}
                onChange={(e) => {
                  e.preventDefault();
                  setNama4(e.target.value);
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
                value={nik4}
                onChange={(e) => {
                  e.preventDefault();
                  setNik4(e.target.value);
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
                value={telp4}
                onChange={(e) => {
                  e.preventDefault();
                  setTelp4(e.target.value);
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
                value={birthPlace4} 
                onChange={(e) => {
                    e.preventDefault()
                    setBirthPlace4(e.target.value)
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
                value={birthDate4}
                onChange={(e) => {
                    e.preventDefault()
                    setBirthDate4(e.target.value)
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
                value={nationality4}
                onChange={(e) => {
                    e.preventDefault()
                    setNationality4(e.target.value)
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
                value={passport4}
                onChange={(e) => {
                    e.preventDefault()
                    setPassport4(e.target.value)
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
                value={issueDate4}
                onChange={(e) => {
                    e.preventDefault()
                    setIssueDate4(e.target.value)
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
                value={expireDate4}
                onChange={(e) => {
                    e.preventDefault()
                    setExpireDate4(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormTransaction4;
