import React from 'react'

import { HStack, Text, Image, Flex } from '@chakra-ui/react'

const Header = () => (
	<HStack p="20px 32px" justifyContent="space-between">
		<Flex alignItems="center" gap="12px">
			<Image w="24px" height="24px" src="/favorite.png" />
			<Text fontSize="2xl" fontFamily="Poppins" fontWeight="semibold">
				TI VI
			</Text>
		</Flex>

		<HStack spacing={20} justifyContent="space-between">
			<Text fontFamily="Poppins">Home</Text>
			<Text fontFamily="Poppins">About</Text>
			<Text fontFamily="Poppins">Start</Text>
		</HStack>
	</HStack>
)

export default Header
