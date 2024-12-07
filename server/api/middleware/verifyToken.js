import jwt from 'jsonwebtoken'
export function createAccessToken(email) {
    return jwt.sign({ user: email }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '15000s' })
}

//this middle ware is used for checks token are valid or not

export async function verifyToken(req, res, next) {
    try {
        const { sessionid } = req.cookies
        jwt.verify(sessionid, process.env.ACCESS_TOKEN_KEY, function (err) {
            if (err) return res.status(401).json({ message: "session expired" })
            next()
        });
    }

    catch (err) {
        res.sendStatus(501).json({ message: "server error" })
    }

}