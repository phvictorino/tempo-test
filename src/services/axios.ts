import axios from 'axios';

const localAxios = axios.create({
	baseURL: 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/',
});

export default localAxios;
