
import { User } from "../model/model.js";
import bcrypt from 'bcrypt'

export async function registerController(req, res) {
    const { name, email, phone, address, password, dob } = req.body
    try {
        const encPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            phone,
            address,
            dob,
            password: encPassword
        })

        res.status(201).json({ message: "User created successfully !" });
    }
    catch (error) {
        //this logic  help to prevent registering of user with same email id multiple times
        //this error code is generate because i marked email as unique  during the creation of user model
        //conflict error send to client if client place a registeration request 
        if (error.code === 11000 && error.keyValue) {
            const duplicateFields = Object.keys(error.keyValue)[0];
            return res.status(409)
                .json({ message: `${duplicateFields} already registered with us.` });
        }
        res.sendStatus(500).json({ message: "server error" })
    }
}