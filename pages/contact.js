import { Box, Container, Heading, Button, useColorModeValue, Flex, Spacer} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import styled from "@emotion/styled"

const Contact = () => {

    const SocialDark = styled.a`
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.3);
        color: #9fdaf2;
    }`
    const SocialLight = styled.a`
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.3);
        color: #B65FCF;
    }`

    const SocialLink = useColorModeValue(SocialLight, SocialDark)

    const btnBgColor = useColorModeValue("#B65FCF", "#126180")
    const btnHoverBgColors = useColorModeValue("#a841c6","#0d475e")
    const textColor = useColorModeValue("white", "black")

    return(
        <Layout>
            <Container maxW = "container.md">
                <Section delay = {0.1}>
                    <Box  mt = {20}>
                        <Heading variant = "section-title" fontSize = {60}>
                            Email Me
                        </Heading>
                        <Box fontFamily = "Creato" px = {3}>
                            <form action="https://formsubmit.co/jordanlau502@gmail.com" method="POST" className = "email-form">
                                <input type = "hidden" name = "_subject" value = "New Email from Portfolio"/>
                                <input type = "email" color = {textColor} name = "Email" placeholder = "Email Address" required className = "email-input"/>
                                <input type="text" color = {textColor} name="Name" placeholder = "Name" className = "email-input" required />
                                <textarea type="text" color = {textColor} name="Message" className = "message" placeholder = "Write Message" required></textarea>
                                <input type = "hidden" name = "_next" value = "http://jordan-lau.vercel.app/thanks"/>
                                <Button type="submit" fontWeight = "normal" fontSize = {18} backgroundColor = {btnBgColor} color = "white" _hover={{ bg: btnHoverBgColors, color: "#F3F2ED"}}  className = "btn font-out" >Send Email</Button>
                            </form>
                        </Box>
                    </Box>
                </Section>

                <Section delay = {0.8}>
                    <Box mt = {20}>
                        <Heading as = "h1" variant = "section-title">
                            Social Links
                        </Heading>
                        <Box align = "center">
                            <Flex  mt = {10} maxW = "container.md" fontSize = {{base: 45, md: 50}} px = {{base: 10, lg: 0}}>
                                <SocialLink target = "__blank" href = "https://www.facebook.com/people/Jordan-Lau-Gabriel/100007649987929/"><FontAwesomeIcon  icon = {faFacebookSquare} /></SocialLink>
                                <Spacer/>
                                <SocialLink target = "__blank" href = "https://www.instagram.com/this_final/">  <FontAwesomeIcon icon = {faInstagram} />  </SocialLink>
                                <Spacer/>
                                <SocialLink target = "__blank" href = "https://www.linkedin.com/in/jordan-gabriel-lau-hiu-hoong-330235232/"><FontAwesomeIcon icon = {faLinkedinIn} /></SocialLink>
                            </Flex>
                        </Box>
                    </Box>
                </Section>

            </Container>
        </Layout>
    )
}

export default Contact