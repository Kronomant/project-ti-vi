export type TPerson = {
	id: number
	name: string
	endereco: string
}

export interface IImageContext {
	handleInsertData: (data: TPerson) => Promise<void>
}
