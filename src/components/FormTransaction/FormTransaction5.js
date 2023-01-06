import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcity } from "../../Redux/Actions/cityActions";
import { getAllCountry } from "../../Redux/Actions/countryActions";

function FormTransaction5(props) {
  const {
    email5,
    setEmail5,
    nama5,
    setNama5,
    nik5,
    setNik5,
    telp5,
    setTelp5,
    birthPlace5,
    setBirthPlace5,
    birthDate5,
    setBirthDate5,
    nationality5,
    setNationality5,
    passport5,
    setPassport5,
    issueDate5,
    setIssueDate5,
    expireDate5,
    setExpireDate5
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
          <p className="text-center fw-bold">Data Penumpang 5</p>
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
                value={email5}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail5(e.target.value);
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
                value={nama5}
                onChange={(e) => {
                  e.preventDefault();
                  setNama5(e.target.value);
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
                value={nik5}
                onChange={(e) => {
                  e.preventDefault();
                  setNik5(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label htmlFor="noTelp" className="form-label">
                Nomor Telepon
              </label>
              <input
                id="noTelp"
                type="number"
                className="form-control form-control-transaction"
                placeholder="masukan nomor telepon anda"
                value={telp5}
                onChange={(e) => {
                  e.preventDefault();
                  setTelp5(e.target.value);
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
                value={birthPlace5} 
                onChange={(e) => {
                    e.preventDefault()
                    setBirthPlace5(e.target.value)
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
                value={birthDate5}
                onChange={(e) => {
                    e.preventDefault()
                    setBirthDate5(e.target.value)
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
                value={nationality5}
                onChange={(e) => {
                    e.preventDefault()
                    setNationality5(e.target.value)
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
                type="number"
                className="form-control form-control-transaction"
                placeholder="masukan nomor passport anda"
                value={passport5}
                onChange={(e) => {
                    e.preventDefault()
                    setPassport5(e.target.value)
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
                value={issueDate5}
                onChange={(e) => {
                    e.preventDefault()
                    setIssueDate5(e.target.value)
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
                value={expireDate5}
                onChange={(e) => {
                    e.preventDefault()
                    setExpireDate5(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormTransaction5;
