const response = {
  status: 500,
  message: "Error interno del servidor",
}

export default function ErrorMiddleware(error, req, res, next) {
  console.error(error)
  res
    .status(error.status || response.status)
    .json({ message: response.message })
}
