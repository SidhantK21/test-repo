const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const port=process.env.PORT||3000

app.use(bodyParser.json());
app.post('/conversations',(req,res)=>{
  console.log(req.send)
  res.send("Hi there")
})

app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})