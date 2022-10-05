import { TPerson } from 'contexts/Image/Image.types'
import API from './api'
import FormData from 'form-data'
export const insertData = async (
	data: FormData
): Promise<{
	status: number
	response: TPerson[]
}> => {
	const resp = await API.post('api/pessoa/upload-image', data)
		.then(({ data, status }) => {
			return { status, response: data?.data }
		})
		.catch(err => {
			return { status: err.status, response: [] }
		})

	console.log(resp)

	return resp
}

export const getData = async (): Promise<{
	status: number
	response: TPerson[]
}> => {
	const resp = await API.get('api/pessoa/')
		.then(({ data, status }) => {
			console.log(data)
			return { status, response: data?.data }
		})
		.catch(err => {
			return { status: err.status, response: [] }
		})

	console.log(resp)

	return resp
}
