import FormData from 'form-data'

export type TPerson = {
	id: number
	name: string
	endereco: string
}
export interface IImageContext {
	handleGetAllData: () => Promise<void>
	handleInsertData: (data: FormData) => Promise<void>
}
