import axios from 'axios';

const apimarcas = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
});

export default apimarcas;