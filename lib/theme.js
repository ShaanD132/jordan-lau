import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("#FFFAF0", "#1B1B1B")(props),
            transitionProperty: "background-color",
            transitionDuration: "normal"
        }
    })
}

const components = {
    Heading: {

        variants: {
            "section-title": {
                fontSize: 50
            },
            "sub-title": {
                fontSize: 35,
                fontFamily: "Zacbel X Medium",
            },
            "page-title": {
                fontSize: 55,
            }
        },
    }
}

const fonts = {
    heading: "'Galhau'",
}

const colors = {
    glassTeal: "#E4EDFF",
    accentColor: "#d0e0ff",
    dotColor: mode("#3377ff", "#00256e")
}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme