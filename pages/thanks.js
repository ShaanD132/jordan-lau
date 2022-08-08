import { Box, Container, Text, Heading } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import  {motion} from "../node_modules/framer-motion"

const Thanks = () => {

    return(
        <Layout>
            <Container maxW = "container.md">
                <Box mt = {32} display = "flex" alignItems = "center" align = "center">
                    <Box>
                            <motion.div initial = {{x: -12, y: -5}}
                            animate = {{x: 12, y: 5}}
                            transition = {{yoyo: Infinity, duration: 1.3, type: "ease"}} >
                                <Heading as = "h1" variant = "section-title" fontFamily = "Outfit-Medium" align = "center">
                                    Thank you for your email
                                </Heading>
                                <Text  align = "justify" px = {10} py = {7} fontSize = {22} fontFamily = "altertype">
                                    I&apos;ll do my best to reply to your email within 2-3 business days. If your message is urgent, please contact me on one of my other social links.
                                </Text>
                            </motion.div>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default Thanks