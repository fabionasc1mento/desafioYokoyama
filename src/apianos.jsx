import axios from "axios";

const apianos = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos",
});

export default apianos;
