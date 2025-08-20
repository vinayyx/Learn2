import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Config/db.js";
import paymentroute from "./Routes/payment.route.js"
import route from "./Routes/contact.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB()

import cors from "cors";

app.use(cors({
  origin: [process.env.FrontendURL, "http://localhost:3000"], // dono allow karo
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Preflight request handle explicitly
app.options("*", cors());



app.use("/", paymentroute);
app.use("/", route)













app.listen(3000, () => {

    console.log("Your server is running bro")
})