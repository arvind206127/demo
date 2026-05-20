import express from "express"
import sum from "./sum.js"


const app = express()
app.use(express.json())

// let myToken = 12345;


// let CheckToken=(req,res,next)=>{
//    if(req.query.token!=myToken){
//     return res.send(
//         {
//             status:0,
//             msg: "plese fill the correct token"
//         }
//     )
//    }
//     next()
// }
// app.use(CheckToken)

// app.get("/news",(req , res) =>{
//     res.send({status:1,msg:"wellcome to api"})
// })
// app.get("/login/:id",(req , res) =>{
//     let currentId=req.params.id
//     res.send("wellcome to api"+currentId)
// })


// app.post("/login",(req , res) =>{
//     console.log(req.body)
//     res.send({
//         status:1,
//         msg:"wellcome to api",
//         data:req.body,
//         queryData:req.query
//     })
// })

app.get("/home", (req, res) => {
    res.send({ status: 1, msg: "wellcome to api" })
})

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))

    })
})


const PORT = 8000;

app.listen(PORT, () => {
    console.log("server is running", PORT);
}) 