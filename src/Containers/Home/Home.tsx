import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineSend, AiOutlineArrowDown } from 'react-icons/ai'
import { BiMouse } from 'react-icons/bi'
import { Flex, Text, Image, Button, Icon, HStack } from '@chakra-ui/react'
import Container from 'Components/Core/Container'
import DevCard from 'Components/Presentation/Home/DevCard'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import ReferencesCard from 'Components/Presentation/Home/ReferencesCard'

const Home: React.FC = () => {
	const router = useRouter()

	const Banner: React.FC = () => (
		<Flex margin="100px 0px 0px " gap={8}>
			<Flex flexDir="column" w="50%" gap={4}>
				<Flex flexDir="column" gap={4}>
					<Text
						fontFamily="Poppins"
						fontSize="6xl"
						fontWeight="semibold"
						color="#0C1E39"
						// textShadow="3px 4px var(--chakra-colors-pink-400)"
					>
						Classificando <br />
						Estrelas e Galáxias
					</Text>
					<Text
						color="pink.400"
						fontFamily="Poppins"
						fontSize="2xl"
						fontWeight="semibold"
					>
						Trabalho inter disciplinar VI
					</Text>
				</Flex>

				<Text
					fontFamily="Poppins"
					fontSize="xl"
					color="gray.500"
					fontWeight="light"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore,
					fugiat maiores doloribus enim dicta. Labore animi nesciunt sequi iste
					reiciendis quisquam voluptate laudantium consequuntur, ut laborum
					magni beatae ab.
				</Text>
				<Button
					_hover={{ background: '#194077', color: 'pink.300' }}
					w="100px"
					h="50px"
					margin={'60px 0 100px'}
					borderRadius="12px"
					rightIcon={
						<Icon as={AiOutlineSend} height="24px" w="24px" color="pink.400" />
					}
					bgColor="#0C1E39"
					color="pink.400"
					onClick={() => {
						router.push('/classificator')
					}}
				>
					Start
				</Button>
				<Flex as="a" href="#Devs" alignItems="center" gap={2} cursor="pointer">
					<Icon
						justifySelf="left"
						as={BiMouse}
						height="32px"
						w="32px"
						color="pink.400"
					/>
					<Text fontFamily="Poppins" color="#0C1E39" fontSize="xl">
						Ver mais
					</Text>
					<Icon
						justifySelf="left"
						as={AiOutlineArrowDown}
						height="24px"
						w="24px"
						color="pink.400"
					/>
				</Flex>
			</Flex>
			<Flex justifyContent="center" w="50%" alignItems="baseline">
				<Image w="90%" src="/images/coverHome2.svg" />
			</Flex>
		</Flex>
	)

	const Devs: React.FC = () => (
		<Flex
			id="Devs"
			margin=" 0 0px 60px"
			flexDir="column"
			gap={8}
			alignItems="center"
		>
			<Flex margin={'60px 0'} flexDir="column" alignItems="center">
				<Text
					fontFamily="Poppins"
					fontSize="4xl"
					fontWeight="semibold"
					color="#0C1E39"
					// textShadow="3px 4px var(--chakra-colors-pink-300)"
				>
					Devs
				</Text>
				<Text
					color="pink.400"
					fontFamily="Poppins"
					fontSize="lg"
					fontWeight="hairline"
				>
					Sobre nós
				</Text>
			</Flex>
			<HStack spacing={16}>
				<DevCard
					image="/images/bela.jpg"
					name="Isabela Aguilar"
					git="https://github.com/isabelaaaguilar"
					linkedin="https://www.linkedin.com/in/isabela-regina-aguilar/"
				/>
				<DevCard
					image="/images/milard.jpg"
					name="Lucas Milard"
					git="https://github.com/Kronomant"
					linkedin="https://www.linkedin.com/in/lucas-milard-bb3630164/"
				/>
				<DevCard
					image="/images/rossana.jpg"
					name="Rossana Oliveira"
					git="https://github.com/rossanaoliveirasouza"
					linkedin="https://www.linkedin.com/in/rossana-souza-90063b141/"
				/>
			</HStack>
		</Flex>
	)

	const DataSet: React.FC = () => (
		<Flex flexDir="column" alignItems="center">
			<Text
				fontFamily="Poppins"
				fontSize="4xl"
				fontWeight="semibold"
				color="#0C1E39"
				// textShadow="3px 4px var(--chakra-colors-pink-300)"
			>
				Data Set
			</Text>
			<Text
				color="pink.400"
				fontFamily="Poppins"
				fontSize="lg"
				fontWeight="hairline"
			>
				base de dados
			</Text>
			<Flex margin={'40px 0'} alignItems="center">
				<Flex gap={4} flexDir="column" w="50%">
					<Text color="pink.400" fontFamily="Poppins" fontSize="2xl">
						Galaxias
					</Text>
					<HStack spacing={8}>
						{[...Array(4)].map((e, i) => (
							<Image
								h="128px"
								w="128x"
								key={`galaxy${i}`}
								src={`/images/galaxy/galaxy${i}.jpg`}
							/>
						))}
					</HStack>
					<Text color="pink.400" fontFamily="Poppins" fontSize="2xl">
						Estrelas
					</Text>
					<HStack spacing={8}>
						{[...Array(4)].map((e, i) => (
							<Image
								h="128px"
								w="128x"
								key={`galaxy${i}`}
								src={`/images/galaxy/galaxy${i}.jpg`}
							/>
						))}
					</HStack>
				</Flex>
				<Flex flexDir="column" w="40%">
					<Text fontFamily="Poppins" fontSize="xl" color="gray.500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						labore, fugiat maiores doloribus enim dicta. Labore animi nesciunt
						sequi iste reiciendis quisquam voluptate laudantium consequuntur, ut
						laborum magni beatae ab.
					</Text>
					<Text fontFamily="Poppins" fontSize="xl" color="gray.500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						labore, fugiat maiores doloribus enim dicta. Labore animi nesciunt
						sequi iste reiciendis quisquam voluptate laudantium consequuntur, ut
						laborum magni beatae ab.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)

	const References: React.FC = () => (
		<Flex flexDir="column" alignItems="center" w={'80%'}>
			<Text
				fontFamily="Poppins"
				fontSize="4xl"
				fontWeight="semibold"
				color="#0C1E39"
				// textShadow="3px 4px var(--chakra-colors-pink-300)"
			>
				Trabalhos relacionados
			</Text>
			<Text
				color="pink.400"
				fontFamily="Poppins"
				fontSize="lg"
				fontWeight="hairline"
			>
				Referências
			</Text>
			<Swiper
				navigation
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<ReferencesCard
						title="Um Estudo Sobre Identificação de Aglomerados de Galáxias"
						link="http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m18@80/2010/07.21.13.53/doc/Renata_Rocha.pdf"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ReferencesCard
						title="Classificação de Objetos Astronômicos em Estrelas e Galáxias Usando o Algoritmo J4.8"
						link="http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m18@80/2010/07.21.13.53/doc/Renata_Rocha.pdf"
					/>
				</SwiperSlide>
			</Swiper>
		</Flex>
	)

	return (
		<Container>
			<Flex
				w="100%"
				margin="32px auto"
				maxW="1400px"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				gap={24}
			>
				<Banner />
				<Devs />
				<DataSet />
				<References />
			</Flex>
		</Container>
	)
}
export default Home
