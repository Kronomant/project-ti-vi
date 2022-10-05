import React, { useState, useEffect } from 'react'

import { HStack, Text, Image, Flex } from '@chakra-ui/react'

const Header = () => {
	const [border, setBorder] = useState<string>('white')

	const handleChangeHeader = () => {
		console.log(window.scrollY)
		if (window.scrollY > 40) setBorder('blue')
		else setBorder('white')
	}

	return (
		<HStack
			position="sticky"
			top="0"
			p="20px 32px"
			justifyContent="space-between"
			backgroundColor="white"
			border="2px"
			borderColor={border}
		>
			<Flex
				onScroll={() => handleChangeHeader()}
				alignItems="center"
				gap="12px"
			>
				<Image w="24px" height="24px" src="/favorite.png" />
				<Text fontSize="2xl" fontFamily="Poppins" fontWeight="semibold">
					TI VI
				</Text>
			</Flex>

			<HStack spacing={20} justifyContent="space-between">
				<Text fontFamily="Poppins">Home</Text>
				<Text fontFamily="Poppins">Sobre nós</Text>
				<Text fontFamily="Poppins">Base de Dados</Text>
				<Text fontFamily="Poppins">Trabalhos relacionados</Text>

				<Text fontFamily="Poppins">About</Text>
				<Text fontFamily="Poppins">Start</Text>
			</HStack>
		</HStack>
	)
}

export default Header
