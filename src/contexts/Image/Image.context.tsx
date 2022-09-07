import React, { createContext, useCallback, useContext } from 'react'
import { insertData } from 'services/python.api'
import { IImageContext, TPerson } from './Image.types'

export const ImageContext = createContext<IImageContext>({} as IImageContext)
export const useImageProcessing = (): IImageContext => useContext(ImageContext)

interface AppProps {
	children: React.ReactElement
}

const ImageProvider: React.FC<AppProps> = ({ children }: AppProps) => {
	const handleInsertData = useCallback(async (data: TPerson) => {
		await insertData(data)
	}, [])

	return (
		<ImageContext.Provider
			value={{
				handleInsertData
			}}
		>
			{children}
		</ImageContext.Provider>
	)
}

export default ImageProvider
