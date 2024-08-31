import React, { useState, useEffect } from "react";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  // to navigate to main route after creating a book
  const navigate = useNavigate();
const {enqueueSnackbar} = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", {variant:"success"})
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error happend in  creating book!");
        enqueueSnackbar("Error happend in  creating book!", {variant:"error"})
        console.error(error);
      });
  };

  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4">Create a New Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="title">
            Title
          </label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="author">
            author
          </label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="PublishYear">
            Publish Year
          </label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="number"
            id="PublishYear"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            required
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
