import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardHistory from "../../components/card/History/CardHistory";
import Pagination from "../../components/Pagination";
import { getAllTransaction } from "../../Redux/Actions/createTransactionAction";
import { BsArrowLeft } from "react-icons/bs";

const History = () => {
  const { token } = useSelector((state) => state.auth);
  const { transactions } = useSelector((state) => state.transaction);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = `${transactions?.pagination?.totalPages}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTransaction(token, currentPage));
  }, [dispatch, token, currentPage]);

  const formatRupiah = (angka) => {
    const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${rupiah}`;
  };

  return (
    <>
      <div className="container">
        <div className="row gap-3 d-flex justify-content-center mb-5">
          <CardHistory transactions={transactions} formatRupiah={formatRupiah} />
        </div>
        <div className="d-flex justify-content-center">
          <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
        </div>
        <a className="text-decoration-none" onClick={() => navigate("/")}>
          <BsArrowLeft className="mx-1" />
          back
        </a>
      </div>
    </>
  );
};

export default History;
