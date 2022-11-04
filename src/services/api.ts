import axios from 'axios'

export const API = axios.create({
	//baseURL: 'https://class-estrelas-galaxias.herokuapp.com/',
	baseURL: 'http://127.0.0.1:5000',
	headers: {
		AccessControlAllowOrigin: true
	}
})

export default API
