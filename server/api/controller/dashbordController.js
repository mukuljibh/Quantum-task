import { User } from "../model/model.js"

export async function dashbordController(req, res) {
    try {
        const user = await User.find({})
        res.status(200).json({ message: "All profile send from the database", user })
    }
    catch (err) {
        res.status(500).json({ message: "server error" })

    }
}