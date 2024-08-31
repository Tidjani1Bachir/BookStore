import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">Number</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr className="h-8" key={book._id}>
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden text-center">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden text-center">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-green-800 text-2xl" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-yellow-600 text-2xl" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-600 text-2xl mx-2" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}


          </tbody>
          {/* {loading ? (
        <Spinner />
      ) : (
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="flex flex-col items-start justify-between rounded-lg bg-background p-4 shadow-sm"
            >
              <div className="flex-1">
                
                <h3 className="mb-2 text-lg font-semibold">{book.title}</h3>
                <p className="mb-4 text-muted-foreground">{book.author}</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="text-lg font-semibold">{book.publishYear}</span>
                <button>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )} */}
    
        </table>
  )
}

export default BooksTable