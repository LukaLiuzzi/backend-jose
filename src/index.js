import express from "express"
import { casasRouter } from "./routes/casas.js"
import ErrorMiddleware from "./middlewares/Error.js"
import { connectDB } from "./config/db.js"

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use((req, res, next) => {
//   const { name } = req.body
//   const { method, path } = req
//   if (method === "POST" && name !== "pepito") {
//     return res.status(401).json({ mensaje: "No tenes permiso" })
//   }
//   next()
// })

app.use((req, res, next) => {
  const { method, path } = req
  console.log(`Request: ${method} ${path}`)
  // Guardo en una base de datos la fecha y hora de la solicitud y el path y el metodo
  next()
})

app.use("/casas", casasRouter)

app.use(ErrorMiddleware)

// Iniciamos el servidor
connectDB().then(() => {
  app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080")
  })
})
