import axios from "axios";

const apimodelos = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos",
});

export default apimodelos;
