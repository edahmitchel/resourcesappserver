const express = require("express");
const app = express();
const PORT = 8080;
const {mongoose} = require("./models/userschema");
const dbName = "resourcesApp";
const path = require("path")
const userRoutes = require("./routes/usersroutes")
const password = "testing123";
const mongoDBURI = `mongodb+srv://mitchel:${password}@blog.lmjgf.mongodb.net/${dbName}?retryWrites=true&w=majority`
const cors = require('cors')
require("dotenv").config()
// const mongoDBURI = `mongodb://localhost:27017`
// app.use("*", express.static("public/build"));
let db;
app.use(cors({origin:true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
  res.send(`hello ${req.path}`)
  console.log("get running")
})
// app.post("/",(req,res)=>{
//   res.send("a post request")
// })
app.use("/users", userRoutes)
// app.listen(PORT,()=>{
//   console.log(`server running at ${PORT}`)
// })
// async function main () {
//   try {
//     console.log(mongoDBURI)
//     let resp = await mongoose.connect(mongoDBURI,{
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log({ resp });
//     app.listen(PORT, () => {
//       console.log("listening");
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
// main();
mongoose
  .connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT||PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
mongoose.connection.once("open", ()=>{
  console.log("connected to mongodb")
})
