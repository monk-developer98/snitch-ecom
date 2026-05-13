import app from "./src/app.js"
import connectDB from "./src/config/db.jsrs";

connectDB()

app.listen(3000,()=>{
    console.log("server on running on 3000")
})