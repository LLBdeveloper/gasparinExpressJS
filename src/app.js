import express from "express"
import productRouter from "./routes/products.router.js"
import homeRouter from "./routes/home.router.js"


const app = express()
const PORT = 8080

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//rutas
app.use("/", homeRouter)
app.use("/api/products", productRouter)


//listen
app.listen(PORT, ()=>{
    console.log(`* * * PORT ${PORT} ONLINE * * *`)
})
