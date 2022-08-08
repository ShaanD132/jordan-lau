import { Box, Container, Heading, Button, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layouts/article"

const Contact = () => {

    const btnBgColor = useColorModeValue("#B65FCF", "#126180")
    const btnHoverBgColors = useColorModeValue("#a841c6","#0d475e")

    return(
        <Layout>
            <Container maxW = "container.md">
                <Box  mt = {20}>
                    <Heading variant = "section-title">
                        Email Me
                    </Heading>
                    <Box fontFamily = "Creato" px = {3}>
                        <form action="https://formsubmit.co/jordanlau502@gmail.com" method="POST" className = "email-form">
                            <input type = "hidden" name = "_subject" value = "New Email from Portfolio"/>
                            <input type = "email" name = "Email" placeholder = "Email Address" required className = "email-input"/>
                            <input type="text" name="Name" placeholder = "Name" className = "email-input" required color = "black"/>
                            <textarea type="text" name="Message" className = "message" placeholder = "Write Message" required></textarea>
                            <input type = "hidden" name = "_next" value = "http://jordan-lau.vercel.app/thanks"/>
                            <Button type="submit" backgroundColor = {btnBgColor} color = "white" _hover={{ bg: btnHoverBgColors, color: "#F3F2ED"}}  className = "btn font-out" >Send Email</Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default Contact