import axios from "axios"

const URL = "https://api.thecatapi.com/v1/images/search"
const API_KEY = process.env.EXPO_PUBLIC_CAT_API_KEY

export async function traerImgGatos(cantidad = 12) {
  const config = {
    params: {
      limit: cantidad,
      mime_types: "jpg,png",
      size: "med",
      order: "RANDOM",
      format: "json",
    },
  }

  if (API_KEY) {
    config.headers = {
      "x-api-key": API_KEY,
    }
  }

  const respuesta = await axios.get(URL, config)
  return respuesta.data
}
