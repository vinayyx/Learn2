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

app.use(cors({
   origin: process.env.FrontendURL, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));



app.use("/", paymentroute);
app.use("/", route)













app.listen(3000, () => {

    console.log("Your server is running bro")
})