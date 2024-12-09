/* eslint-disable no-undef */
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

        const accessToken = createAccessToken(email)

        const options = {
            maxAge: 5000000,
            httpOnly: true,
            secure:true,
            sameSite:'None',
            domain:'.quantum-task-omega.vercel.app'
        }
            res.setHeader('name', 'mukul bhardwaj');  // Custom header

        res.setHeader('Access-Control-Expose-Headers', 'name');  // Expose 'name' header

        res.cookie("sessionid", accessToken, options)
        res.status(200).json({ message: "Login successfull" })


    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }

}
