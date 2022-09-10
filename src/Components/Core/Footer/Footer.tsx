import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => (
	<Flex height="300px" bgColor="#0C1E39" padding="48px 24px">
		<Flex w="30%">
			<Image w="70%" h="70%" objectFit="contain" src="/images/logo.png" />
		</Flex>

		<Flex w={'30%'}>
			<Text fontSize="lg" color="white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum
				hic velit beatae reiciendis ipsam labore unde et natus explicabo nisi,
				reprehenderit possimus itaque officiis earum eaque dolorum
				necessitatibus. Laudantium.
			</Text>
		</Flex>
	</Flex>
)

export default Footer
