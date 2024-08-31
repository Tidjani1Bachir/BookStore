import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../component/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../component/Home/BooksTable";
import BooksCard from "../component/Home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoding] = useState(false);
  const [showTable, setShowTable] = useState("table");

  useEffect(() => {
    setLoding(true);
    axios
      .get("http://localhost:8000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoding(false);
      })
      .catch((error) => {
        console.log(error);
        setLoding(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-x-4">
        <button
          className={`px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600 lg:mr-[500px] md:ml-auto sm:ml-auto ${
            showTable === "cart" ? "hidden" : ""
          }`}
          onClick={() => setShowTable("cart")}
        >
          Card
        </button>
        <button
          className={`px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600 lg:ml-[400px] md:mr-auto sm:mr-auto ${
            showTable === "table" ? "hidden" : ""
          }`}
          onClick={() => setShowTable("table")}
        >
          table
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showTable === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
