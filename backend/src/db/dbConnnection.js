import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connect olundu");
}).catch(() => {
    console.log("connect olunmadi. !!!");
})