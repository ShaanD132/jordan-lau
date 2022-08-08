import Image from "next/image"
import {Box, useColorModeValue, Badge, Text} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "@emotion/styled"

const MainBox = styled(Box)`
transition: all 0.3s ease;

&:hover {
    transform: scale(1.05);
}
`

const DishGridItem = ({children, src, alt, type, difficulty, rating, ingredients}) => {
    const textColor = useColorModeValue("white", "#000000")
    return(
        <Box>
                <MainBox maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' bg = {useColorModeValue("#1b1b1b", "#F3F2ED")}>
                        <Image src = {src} alt = {alt} placeholder = "blur" />

                        <Box px = "6" mt = "6" mb = "6">
                            <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' fontSize = {14} px='2' bg = "accentColor" color = "black" >
                                {type}
                            </Badge>
                                <Box
                                    color = {textColor}
                                    fontFamily = "Creato"
                                    fontSize = {14}
                                    ml='2'
                                >
                                    {difficulty}
                                </Box>
                            </Box>

                                <Box mt = "1" as = "h2"  fontSize = {28} fontFamily = "Outfit-Medium" noOfLines = {2} lineHeight = "tight" color = {textColor}>
                                    {children}
                                </Box>

                            <Box color = {textColor} fontSize = {12} fontFamily = "Zacbel X Medium" noOfLines = {1}>
                                {ingredients}
                            </Box>

                            <Box>

                            <Box color = {textColor} fontFamily = "Poison" pt = {5} fontSize = {15.5} fontWeight = "bold" letterSpacing = {0.5}>
                                Expertise
                            </Box>

                            <Box display='flex' alignItems='center'>
                                {Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                    <Text
                                        key={i}
                                        color = {i < rating ? "#0049d6" : 'gray.300'}
                                        pr = {0.45}
                                    >
                                        <FontAwesomeIcon icon = {faCircle} />
                                    </Text> )
                                    )}
                            </Box>
                            </Box>

                        </Box>
                </MainBox>
        </Box>
    )
}

export default DishGridItem