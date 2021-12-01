import express from "express";

const app = express()
const port = 5500

app.get("/",(req, res)=>{
    res.send("Helloword")
})

app.listen(port, () => {
    console.log('Server connect on localhost:${port}')
})