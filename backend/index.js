import express from "express";
import connectDB from "./db/connectdb.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors"
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/Books";

const app = express();

// allowing express to use json file (middleware for passing request body)
app.use(express.json());

// middleware for handelling CORS POLICY 

// option: Allow All Origins with Default of cors("*")

app.use(cors());
// option: Allow Custom Origins

// app.use(
//   cors({
//     origin:"http://localhost:3000", 
//     methods:["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders:["Content-Type"],
//   })
// )

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to MERN Stack Tutorial");
});

// each req with prefexe of books handle it using  th booksRoute middlwares 

app.use("/books",booksRoute)

connectDB(DATABASE_URL);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
