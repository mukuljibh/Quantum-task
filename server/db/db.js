import mongoose from "mongoose";


const port = process.env.CONNECTION_STRING || 8000

export default function makeDbConnection(app) {
    mongoose
        .connect(process.env.CONNECTION_STRING)
        .then(() => {
            app.listen(port, () => {
                console.log(`server Started runing on port ${port}`)
            })
        })
        .catch((err) => {
            console.log(err)
            console.log(`Database unreachable`);
        });
}
