import express from "express";
import contact from "../Models/contact.js";

const route = express.Router()


route.post("/contact", async (req, res) => {

    const { email, description } = req.body;

    try {

        if (!email || !description) {

            res.status(400).json({
                message: "All filed are required"
            })
        }

        const newContact = new contact({ email, description })
        await newContact.save()

        res.status(201).json({
            message: "Your contact is Sucssfulyy sumbited"
        })





    } catch (error) {

        res.status(500).json({
            message: error,
        })

    }


})

  export default route