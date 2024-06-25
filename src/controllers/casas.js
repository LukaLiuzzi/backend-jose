import { AppError } from "../utils/ErrorHandler.js"
import { HouseModel } from "../models/houseModel.js"

export const getCasasController = async (req, res) => {
  try {
    const houses = await HouseModel.find()

    res.json({ data: houses })
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener las casas" })
  }
}

export const createCasaController = async (req, res) => {
  // El body llega en el req.body si es que previamente configuramos el middleware en el index.js
  const { title, price, location } = req.body
  // Los datos fueron validados previamente mediante un middleware
  try {
    const House = await HouseModel.create({
      title,
      price,
      location,
    })
    res.json({ mensaje: "Casa creada correctamente", data: House })
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: "Error al crear la casa" })
  }
}

export const updateCasaController = (req, res) => {
  const { id } = req.params
  const { body } = req
  const { titulo, precio } = body
  res.json({
    mensaje: `Actualizando la casa con id ${id}`,
    data: {
      titulo,
      precio,
    },
  })
}

export const deleteCasaController = (req, res) => {
  const { id } = req.params

  // Eliminar la casa de la base de datos
  // casas.filter(casa => casa.id !== id)
  res.json({ mensaje: `Casa con el id ${id} eliminada` })
}

// SQL = RELACIONALES = TABLAS Y COLUMNAS = MYSQL, POSTGRESQL, SQL SERVER, ORACLE
// NOSQL = NO RELACIONALES = DOCUMENTOS = MONGODB, FIRESTORE, DYNAMODB, REDIS

// PRIMARY KEY
// FOREIGN KEY
