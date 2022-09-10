export type TPerson = {
	id: number
	name: string
	endereco: string
}

export interface IImageContext {
	handleGetAllData: () => Promise<void>
	handleInsertData: (data: TPerson) => Promise<void>
}
