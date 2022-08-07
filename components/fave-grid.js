import NextLink from "next/link"
import Image from "next/image"
import {Box, Text, LinkBox, Heading} from "@chakra-ui/react"
import {Global} from "@emotion/react"
import styled from "@emotion/styled"
import  { motion } from "../node_modules/framer-motion"

const DishesBox = styled(Box)`
transition: all 0.5s ease-in-out;
border-radius: 12px;
top: 0px;
height: 99.2%;
width: 100%;

.dishes-text {
    transition: all 0.8s ease-in-out;
    opacity: 0%;
}

.dishes-title {
    transition: all 0.3s ease-in-out;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0em 0em 4px black;
}

&:hover {
    background-color: rgba(0, 0, 0, 0.7);

    .dishes-title {
        color: rgba(255,255,255,1);
    }

    .dishes-text {
        opacity: 100%;
    }
}
`

const DishesTextContainer = styled(Box)`
width: 100%;
text-align: left;
margin-top: 85%
`

export const WorkGridItem = ({ children, id, title , thumbnail}) => (
    <Box w = "100%" align = "center"  position = "relative">
        <motion.div initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.5, delay: 0.2}} viewport={{ once: true }}>
            <Box position = "relative" >
                <Image src = {thumbnail} alt = {title} className = "grid-item-thumbnail" placeholder = "blur" />
            </Box>

            <DishesBox position = "absolute">
                <DishesTextContainer px = {3}>
                    <Heading as = "h2" fontSize = {{base: 35, sm: 40}} fontFamily = "Outfit-Medium" mb = {2} noOfLines = {1}>
                        <Text className = "dishes-title">{title}</Text>
                    </Heading>
                    <Box className = "dishes-text">
                        <Text color = "white" px = {3} fontFamily = "Zacbel X Medium" fontSize = {{base: 16, sm: 18}}> {children} </Text>
                    </Box>
                </DishesTextContainer>
            </DishesBox>
        </motion.div>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles = {`
    .grid-item-thumbnail{
        border-radius: 12px;
    }

    `}
    />
)