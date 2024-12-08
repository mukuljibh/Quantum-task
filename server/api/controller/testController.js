
export async function testController(req, res) {
    res.status(200).json({ message: "cookies recieved", sessionid:req.cookies })
}
