import {Container, Text} from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
    return(
        <Container maxW = "container.lg" mt = {20}>
            <Container  align = "center">
                <Text fontSize = {13} fontFamily = "altertype">Designed and Developed by <Link href = "https://shaan-d.mareliafarm.online">Shaan Dussoye</Link></Text>
            </Container>
        </Container>
    )
}

export default Footer