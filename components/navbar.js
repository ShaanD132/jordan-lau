import Logo from "./logo"
import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggle from "../components/theme-toggle.js"

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")
    return(
        <NextLink href = {href}>
            <Link
            py = {1.5}
            px = {3}
            fontSize = {17.2}
            borderRadius = {12}
            bg = {active ? "accentColor" : undefined}
            color = {active ? "#202023" : inactiveColor}
            fontFamily = "Outfit Medium"
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box position = "fixed"
        as = "nav"
        w = "100%"
        bg = {useColorModeValue("#FFFAF0", "#1B1B1B")}
        style = {{backdropFilter: "blur(10px)"}}
        zIndex = {1}
        {...props}>

            <Container display = "flex"
            p = {2} maxW = "container.lg"
            wrap = "wrap"
            align = "center"
            justify = "space-between">
                <Flex align = "center" mt = {2} mr = {2}>
                    <Heading as = "h1" size = "lg">
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack
                direction = {{base: "column", md: "row"}}
                display = {{base: "none", md: "flex"}}
                width = {{base: "full", md: "auto"}}
                align = "center"
                alignItems = "center"
                flexGrow = {1}
                spacing = {10}
                ml = {5}
                mt = {{base: 4, nmd: 0}}
                >

                <LinkItem href = "/dishes" path = {path}>
                    Dishes
                </LinkItem>

                <LinkItem href = "/resume" path = {path}>
                    Resume
                </LinkItem>

                <LinkItem href = "/contact" path = {path}>
                    Contact Me
                </LinkItem>
                </Stack>

                <Box flex = {1} align = "right">
                    <ThemeToggle />
                    <Box ml = {2} display = {{base: "inline-block", md: "none"}}>
                        <Menu>
                            <MenuButton as = {IconButton} icon = {<HamburgerIcon/>} variant = "outline" aria-label = "Options" />
                            <MenuList bg = {useColorModeValue("#F0E68C", "#555555")}>
                                <NextLink href = "/" passHref>
                                    <MenuItem as = {Link}>About Me</MenuItem>
                                </NextLink>
                                <NextLink href = "/dishes" passHref>
                                    <MenuItem as = {Link}>Dishes</MenuItem>
                                </NextLink>
                                <NextLink href = "/resume" passHref>
                                    <MenuItem as = {Link}>Resume</MenuItem>
                                </NextLink>
                                <NextLink href = "/contact" passHref>
                                    <MenuItem as = {Link}>Contact Me</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}

export default Navbar