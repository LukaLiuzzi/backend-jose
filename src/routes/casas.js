import { Router } from "express"
import {
  getCasasController,
  createCasaController,
  updateCasaController,
  deleteCasaController,
} from "../controllers/casas.js"

const casasRouter = Router()

// URL PARAMS /api/casas/:id
// QUERY PARAMS /api/casas?categoria=playa&precio=300000

casasRouter.get("/", getCasasController)

casasRouter.post("/", createCasaController)

casasRouter.put("/:id", updateCasaController)

casasRouter.delete("/:id", deleteCasaController)

export { casasRouter }
