import mongoose from "mongoose"

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/backend-jose")
    console.log("Conectado a la base de datos")
  } catch (error) {
    console.log("Error al conectar a la base de datos", error)
    process.exit(1)
  }
}
