import { Container, Box, Heading, Image, useColorModeValue, Text, Flex, Spacer, SimpleGrid } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Section from "../components/layouts/section"
import styled from "@emotion/styled"
import { WorkGridItem } from "../components/fave-grid"
import Layout from "../components/layouts/article"
import LauDish1 from "../public/images/laudish1.jpg"
import LauDish2 from "../public/images/laudish2.jpg"
import LauDish3 from "../public/images/laudish3.jpg"
import LauDish4 from "../public/images/laudish4.jpg"

const Page = () => {
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

    const BoldText = styled.p`
    display: inline;
    font-weight: normal;
    letter-spacing: normal;
    font-family: "Creato Bold"
    `

    const SocialLink = useColorModeValue(SocialLight, SocialDark)
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Box mt = {14}>
                    <Section delay = {0.1}>
                        <Heading as = "h1"  variant = "section-title">
                            Bio
                        </Heading>

                        <Box borderRadius = "lg"  p = {2} bg = {useColorModeValue("#E4EDFF", "#F5F5F5")} mt = {12} mb = {5} mx = {{base: 1, md: 5}} display = {{base: "block", md: "flex"}} alignItems = "center">
                            <Box px = {1} py = {1} align = "left" w = {{base: "100%", md: "75%"}} my = {3}>
                                <Heading as = "h1" letterSpacing = "normal" fontWeight = "normal" lineHeight={{base: 1.3, md: 1.8, lg: 2}} p = {3} color = {useColorModeValue("#010127", "black")} fontFamily = "Creato" fontSize = {{base: 19, md: 20}} align = {{base: "center", md: "left"}}>
                                Hello, I&apos;m <BoldText>Jordan Lau</BoldText>: a Mauritian Chef based in <BoldText>Niagara-on-the-Lake</BoldText>. I&apos;m open to learning all types of cuisine and currently <BoldText>looking for challenging work experiences</BoldText> to broaden my horizons.
                                </Heading>
                            </Box>
                            <Box h = "100%" align = "center">
                                <Image borderRadius = {8} h = {{base: 200, md: 150, lg: 200}} w = {{base: 200, md: 150, lg: 200}} src = "images/jordan-profile2.png" alt = "Profile Image" my = {3} ml = {5}/>
                            </Box>
                        </Box>
                    </Section>

                    <Section delay = {0.3}>
                        <Box mt = {20}>
                            <Heading as = "h1" variant = "section-title">
                                My Links
                            </Heading>
                            <Box align = "center">
                                <Flex  mt = {12} maxW = "container.md" fontSize = {{base: 40, md: 50}} px = {{base: 10, lg: 0}}>
                                    <SocialLink target = "__blank" href = "https://www.linkedin.com/in/jordan-gabriel-lau-hiu-hoong-330235232/"><FontAwesomeIcon  icon = {faLinkedin} /></SocialLink>
                                    <Spacer/>
                                    <SocialLink target = "__blank" href = "https://www.instagram.com/this_final/">  <FontAwesomeIcon icon = {faInstagram} />  </SocialLink>
                                    <Spacer/>
                                    <Link href = "/contact"><SocialLink><FontAwesomeIcon icon = {faEnvelopeOpen} /></SocialLink></Link>
                                </Flex>
                            </Box>
                        </Box>
                    </Section>

                    <Section delay = {0.5}>
                        <Box mt = {{base: 24, md: 40}}>
                            <Heading as = "h1" variant = "section-title">
                                Special Dishes
                            </Heading>
                            <SimpleGrid columns = {[1, null, 2]} spacing = {{base: "50px", md: "50px"}}  mt = {10} alignItems = "center">
                                <WorkGridItem id = "pasta" title = "Fried Vegetable Salad" thumbnail = {LauDish1}>
                                    Sample Text, I love cooking, this dish is pretty tasty blah blah blah
                                </WorkGridItem>
                                <WorkGridItem id = "pasta" title = "Fried Rice" thumbnail = {LauDish2}>
                                    Sample Text, I love cooking, this dish is pretty tasty blah blah blah
                                </WorkGridItem>
                                <WorkGridItem id = "pasta" title = "Seasoned Chicken" thumbnail = {LauDish3}>
                                    Sample Text, I love cooking, this dish is pretty tasty blah blah blah
                                </WorkGridItem>
                                <WorkGridItem id = "pasta" title = "Spaghetti with Cheese" thumbnail = {LauDish4}>
                                    Sample Text, I love cooking, this dish is pretty tasty blah blah blah
                                </WorkGridItem>
                            </SimpleGrid>
                        </Box>
                    </Section>


                    </Box>
            </Container>
        </Layout>
    )
}

export default Page