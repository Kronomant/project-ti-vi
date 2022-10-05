import React, { createContext, useCallback, useContext } from 'react'
import { getData, insertData } from 'services/python.api'
import { IImageContext, TPerson } from './Image.types'
import FormData from 'form-data'
export const ImageContext = createContext<IImageContext>({} as IImageContext)
export const useImageProcessing = (): IImageContext => useContext(ImageContext)

interface AppProps {
	children: React.ReactElement
}

const ImageProvider: React.FC<AppProps> = ({ children }: AppProps) => {
	const handleGetAllData = useCallback(async () => {
		const { response, status } = await getData()

		console.log(response)
		console.log(status)
	}, [])

	const handleInsertData = useCallback(async (data: FormData) => {
		await insertData(data)
	}, [])

	return (
		<ImageContext.Provider
			value={{
				handleGetAllData,
				handleInsertData
			}}
		>
			{children}
		</ImageContext.Provider>
	)
}

export default ImageProvider
