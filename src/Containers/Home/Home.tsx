import { Container, Flex, Grid, HStack, Text } from '@chakra-ui/react'
import React from 'react'

import { FiGithub } from 'react-icons/fi'

const Home: React.FC = () => (
	<Container size="container.xl">
		<HStack justifyContent="space-between" p={2}>
			<Text fontFamily="Poppins">Star</Text>
			<HStack spacing={20} justifyContent="space-between">
				<Text fontFamily="Poppins">Home</Text>
				<Text fontFamily="Poppins">About</Text>
				<Text fontFamily="Poppins">Start</Text>
				
			</HStack>
		</HStack>
		<Flex>
			<Grid w="20%">
				<FiGithub color="blue" />
			</Grid>
			<Flex w="80%">
				<Grid w="50%">
					<Text>Classificando estrelas e Galaxias</Text>
					<Text> Trabalho inter disciplinar VI </Text>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						labore, fugiat maiores doloribus enim dicta. Labore animi nesciunt
						sequi iste reiciendis quisquam voluptate laudantium consequuntur, ut
						laborum magni beatae ab.
					</Text>
				</Grid>
				<Flex w="50%"></Flex>
			</Flex>
		</Flex>
	</Container>
)

export default Home
