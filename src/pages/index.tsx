import React from 'react'
import Head from 'next/head'
import Home from '../Containers/Home'
import { ChakraProvider, theme } from '@chakra-ui/react'

const Page = () => (
	<ChakraProvider theme={theme}>
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Home />
	</ChakraProvider>
)

export default Page
