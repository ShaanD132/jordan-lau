import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"
import styled from "@emotion/styled"
import  { motion, useScroll } from "../node_modules/framer-motion"

const Resume = () => {

    const { scrollYProgress } = useScroll();

    const SectionBoxLight = styled(Box)`
        .resume-box {
            transition: all 0.5s ease-in-out;
        }
        &:hover{
            .resume-box {
                transform: rotate(0.5deg) scale(1.02);
            }
        }
    `

    const SectionBoxDark = styled(Box)`
        .resume-box {
            transition: all 0.5s ease-in-out;
        }
        &:hover{
            .resume-box {
                transform: rotate(0.5deg) scale(1.02);
            }
        }
    `


    const SectionBox = useColorModeValue(SectionBoxLight, SectionBoxDark)
    const scrollColor = useColorModeValue("#B65FCF", "#126180")

    return(
        <Layout>
            <Container maxW = "container.md">
                <motion.div  className = "scroll-bar" style = {{scaleX: scrollYProgress, backgroundColor: scrollColor}} />
                <Box mt = {20}>
                    <Box>
                        <Heading as = "h1" fontFamily = "Outfit Medium" fontWeight = "normal" variant = "page-title" mb = {1}>
                            Resume
                        </Heading>
                        <hr />
                    </Box>

                    <Section delay = {0.5}>
                        <SectionBox mt = {5} px = {7} >
                            <Box className = "resume-box">
                                <Heading as = "h2" variant = "sub-title" fontWeight = "normal">
                                    skills
                                </Heading>
                                <Box fontSize = {{base: 18, md: 22}} fontFamily = "altertype" mt = {3} px = {8}>
                                    Communication Skills <br />
                                    Customer Service <br />
                                    Interpersonal Skills<br />
                                    Sales Skills<br />
                                    MS Office Skills<br />
                                </Box>
                            </Box>
                        </SectionBox>
                    </Section>

                    <Section delay = {0.6}>
                        <SectionBox mt = {12} px = {7}>
                            <Box className = "resume-box">
                                <Heading as = "h2" variant = "sub-title" fontWeight = "normal">
                                    traits
                                </Heading>
                                <Box fontSize = {{base: 18, md: 22}} fontFamily = "altertype" mt = {3} px = {8}>
                                    Persuasive <br />
                                    Adaptable <br />
                                    Ability to work independently <br />
                                    Flexible <br />
                                </Box>
                            </Box>
                        </SectionBox>
                    </Section>

                    <Section delay = {0.7}>
                        <SectionBox mt = {12} px = {7}>
                            <Box className = "resume-box">
                                <Heading as = "h2" variant = "sub-title" fontWeight = "normal">
                                    experience
                                </Heading>
                                <Box fontSize = {{base: 18, md: 22}} fontFamily = "altertype" mt = {{base: 3, md: 6}} px = {8} lineHeight = {{base: 2, md:1}}>
                                    Topelec LTD, Mauritius - Store Manager <br /><br />
                                    Topelec LTD, Mauritius - Sales Associate<br /><br />
                                    Topelec LTD, Mauritius - Delivery Driver<br /><br />
                                    <br />
                                    Big Smoke Burger, Ontario - Fry Cook <br /><br />
                                    Big Smoke Burger, Ontario - Line Prep <br /><br />
                                </Box>
                                </Box>
                        </SectionBox>
                    </Section>

                    <Section delay = {0.8}>
                        <SectionBox mt = {12} px = {7}>
                            <Box className = "resume-box">
                                <Heading as = "h2" variant = "sub-title" fontWeight = "normal">
                                    education
                                </Heading>
                                <Box fontSize = {{base: 18, md: 22}} fontFamily = "altertype" mt = {{base: 3, md: 6}} px = {8} lineHeight = {{base: 2, md:1}}>
                                    Niagara College, Ontario - Culinary Management Diploma <br /><br />
                                    <br />
                                    Le Bocage (LBIS), Mauritius - IGCSE Certificate <br /><br />
                                    Le Bocage (LBIS), Mauritius - MYP Certificate <br /><br />
                                </Box>
                            </Box>
                        </SectionBox>
                    </Section>

                    <Section delay = {0.9}>
                        <SectionBox mt = {12} px = {7}>
                            <Box className = "resume-box">
                                <Heading as = "h2" variant = "sub-title" fontWeight = "normal">
                                    other
                                </Heading>
                                <Box fontSize = {{base: 18, md: 22}} fontFamily = "altertype" mt = {{base: 3, md: 6}} px = {8} lineHeight = {{base: 2, md:1}}>
                                    Duke of Edinburgh Award Awardee - Bronze, Silver <br /><br />
                                    <br />
                                    Native Mauritian Creole Speaker<br /><br />
                                    Native English Speaker<br /><br />
                                    Fluent in French<br /><br />
                                </Box>
                            </Box>
                        </SectionBox>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default Resume