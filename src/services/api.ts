import axios from 'axios'

export const API = axios.create({
	baseURL: 'https://class-estrelas-galaxias.herokuapp.com/',
	headers: {
		AccessControlAllowOrigin: true
	}
})

export default API
