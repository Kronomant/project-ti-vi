import React, { useState } from 'react'
import {
	Image,
	Flex,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
	HStack,
	Button,
	Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { MdRefresh } from 'react-icons/md'
import Container from 'Components/Core/Container'
import InputImage from 'Components/Presentation/InputImage'
import { useImageProcessing } from 'contexts/Image'

const Classificator = () => {
	const [preview, setPreview] = useState<string[]>()
	const [nextStep, setNextStep] = useState<boolean>(false)
	const { classifications } = useImageProcessing()



	const Header = () => (
		<>
			<Flex w="100%" justifyContent="center">
				<Breadcrumb
					fontSize="lg"
					spacing="8px"
					separator={<ChevronRightIcon color="pink.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Página Inicial</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Start</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Flex>
			<Text
				m="20px 0"
				fontSize="5xl"
				fontWeight="semibold"

				color="#0C1E39"
			>
				Classificador
			</Text>
		</>

	)



	return (
		<Container>
			<Image h="250px" src="/images/nebula.png" objectFit="cover" />
			<Flex
				w="100%"
				minH="70vh"
				margin="32px auto"
				maxW="1400px"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
			>
				<Header />

				{nextStep ? (
					<>
						{preview.map((item, index) => (
							<Flex key={item} margin={'24px 0'} w="100%" gap={24}>
								<Image alt='classification' w="500px" src={item} />
								<Flex flexDir="column" gap={4}>
									<Text
										display="flex"
										gap={2}
										fontSize="2xl"

										fontWeight="semibold"
										color="#0C1E39"
									>
										Classificação:
										<Text
											fontSize="2xl"

											fontWeight="semibold"
											color="pink.500"
										>
											{classifications[index]?.label} {classifications[index]?.percent}%
										</Text>
									</Text>
									<Text

										fontSize="md"
										w="70%"
										color="gray.500"
									>
										Acabamos de analisar a imagem que você nos enviou. De acordo
										com a análise realizada essa imagem se assemelha{' '}
										{classifications[index]?.percent}% com uma{' '}
										{classifications[index]?.label}
									</Text>
								</Flex>
							</Flex>
						))}


						<Button
							_hover={{ background: '#194077', color: 'pink.300' }}
							w="250px"
							rightIcon={
								<Icon
									as={MdRefresh}
									height="24px"
									w="24px"
									color="pink.400"
								/>
							}
							bgColor="#0C1E39"
							color="pink.400"
							onClick={() => {
								setNextStep(false)
								setPreview(null)
							}}
						>
							Classificar outras imagens
						</Button>

					</>
				) : (
					<InputImage
						preview={preview}
						setPreview={setPreview}
						setNextStep={setNextStep}
					/>
				)}
			</Flex>
		</Container>
	)
}

export default Classificator
