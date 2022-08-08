import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../lib/theme"
import Fonts from "../components/fonts"
import { GridItemStyle } from "../components/fave-grid"
import { AnimatePresence } from "../node_modules/framer-motion"
import "./resume.css"
import "./contact.css"

const Website = ({Component, pageProps, router}) => {
    return(
        <ChakraProvider theme = {theme}>
            <Fonts />
            <GridItemStyle />
            <Layout router = {router}>
                <AnimatePresence exitBeforeEnter initial = {true}>
                    <Component {...pageProps} key = {router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website