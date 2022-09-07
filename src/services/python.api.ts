import { TPerson } from 'contexts/Image/Image.types'
import API from './api'

export const insertData = async (data: TPerson) => {
	const resp = await API.post('', data)
}
