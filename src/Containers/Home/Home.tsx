import {  Flex, Grid,  Text, Image } from '@chakra-ui/react'
import Header from 'Components/Core/Header'
import React from 'react'

import { FiGithub } from 'react-icons/fi'

const Home: React.FC = () => (
	<Flex flexDir="column"  width="100%">
		<Header />
		<Flex>
			<Grid  justifyContent="center" w="10%">
			<FiGithub color="blue" />
			</Grid>
			<Flex gap={8} w="90%">
				<Grid w="25%">
					<Flex flexDir={"column"}>
						<Text 
						 fontFamily="Poppins" 
						 fontSize="3xl" 
						 fontWeight="semibold" 
						 color="purple.500">
						Classificando estrelas e Galaxias
						</Text>
						<Text fontFamily="Poppins"  fontSize="xl" > Trabalho inter disciplinar VI </Text>
					</Flex>
					
					<Text fontFamily="Poppins">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						labore, fugiat maiores doloribus enim dicta. Labore animi nesciunt
						sequi iste reiciendis quisquam voluptate laudantium consequuntur, ut
						laborum magni beatae ab.
					</Text>
				</Grid>
				<Flex w="70%">
					<Image src='/images/cover.jpg' />
				</Flex>
			</Flex>
		</Flex>
	</Flex>
)

export default Home
