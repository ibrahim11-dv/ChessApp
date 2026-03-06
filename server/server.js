const app = require('./app')
const PORT = process.env.PORT
app.get("/",(req,res)=>{
    res.json({
        msg : "Test"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})