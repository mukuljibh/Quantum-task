/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'
import { User } from '../model/model.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../middleware/verifyToken.js'
export async function loginController(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email })

        if (!user) return res.status(404).json({ message: "User does not exists" })
        const match = await bcrypt.compare(password, user.password)

        if (!match) return res.status(401).json({ message: "Invalid credentials" })

        // in this login route only iam  generating  access and refresh
        const accessToken = createAccessToken(email)
        // for testing refresh token expiry 30 s and access token expiration 20s
        // in this route token are getting stored inside the DB for now i am storing them without hashing 

        //we can change cookies option as per our requirement
        const options = {
            maxAge: 5000000, httpOnly: true, secure: true, sameSite: 'none'
        }
        // attaching cookies to the res object
        res.cookie("sessionid", accessToken, options)
        // res.cookie("refreshToken", refreshToken, options)

        res.status(200).json({ message: "Login successfull" })


    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }

}