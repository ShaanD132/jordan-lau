import Image from "next/image"
import NextLink from "next/link"
import {Box, useColorModeValue, Badge, Text, LinkBox} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { mode } from "@chakra-ui/theme-tools"
import styled from "@emotion/styled"

const DishItemDotColor = mode("#3377ff", "#00256e")
const MainBox = styled(Box)`
transition: all 0.3s ease;

&:hover {
    transform: scale(1.05);
}
`

const DishGridItem = ({children, id, src, alt, type, title, rating, ingredients}) => {
    return(
        <Box>
                <NextLink href = {`/dishes/${id}`}>
                    <LinkBox cursor = "pointer">
                        <MainBox maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' bg = {useColorModeValue("#2C3539", "white")}>
                                <Image src = {src} alt = {alt} />

                                <Box px = "6" mt = "6" mb = "6">
                                    <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' fontSize = {14} px='2' bg = "accentColor" color = "black" >
                                        {type}
                                    </Badge>
                                        <Box
                                            color = {useColorModeValue("white", "black")}
                                            fontFamily = "Creato"
                                            fontSize = {14}
                                            ml='2'
                                        >
                                            {children}
                                        </Box>
                                    </Box>

                                    <Box mt = "1" as = "h2"  fontSize = {28} fontFamily = "Outfit-Medium" lineHeight = "tight" noOfLines = {1} color = {useColorModeValue("white", "black")}>
                                        {title}
                                    </Box>

                                    <Box color = {useColorModeValue("white", "black")} fontFamily = "Zacbel X Medium" noOfLines = {1}>
                                        {ingredients}
                                    </Box>

                                    <Box>

                                    <Box color = {useColorModeValue("white", "black")} fontFamily = "Creato" pt = {5} fontSize = {15}>
                                        Expertise
                                    </Box>

                                    <Box display='flex' alignItems='center'>
                                        {Array(5)
                                            .fill('')
                                            .map((_, i) => (
                                            <Text
                                                key={i}
                                                color = {i < rating ? DishItemDotColor : 'gray.300'}
                                                pr = {0.5}
                                            >
                                                <FontAwesomeIcon icon = {faCircle} />
                                            </Text> )
                                            )}
                                    </Box>
                                    </Box>

                                </Box>
                        </MainBox>
                    </LinkBox>
            </NextLink>
        </Box>
    )
}

export default DishGridItem