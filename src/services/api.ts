import axios from 'axios'

export const API = axios.create({
	baseURL: 'http://localhost:5500',
	headers: {
		AccessControlAllowOrigin: true
	}
})

export default API
