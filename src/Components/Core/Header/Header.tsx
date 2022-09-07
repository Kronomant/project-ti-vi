import React from 'react'

import { HStack, Text } from '@chakra-ui/react'

const Header = () => (
	<HStack justifyContent="space-between" p={8}>
		<Text fontSize="2xl" fontFamily="Poppins">
			Star
		</Text>
		<HStack spacing={20} justifyContent="space-between">
			<Text fontFamily="Poppins">Home</Text>
			<Text fontFamily="Poppins">About</Text>
			<Text fontFamily="Poppins">Start</Text>
		</HStack>
	</HStack>
)

export default Header
