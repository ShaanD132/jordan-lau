import { Container, Box, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import DishGridItem from "../components/dish-grid"
import Section from "../components/layouts/section"
import Pasta from "../public/images/pasta.jpeg"
import Beef from "../public/images/beef.jpeg"
import Butter from "../public/images/butter.jpeg"
import Rice from "../public/images/rice.jpeg"
import Burger from "../public/images/burger.jpeg"
import Couscous from "../public/images/couscous.jpeg"

const Dishes = () => {
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Box mt = {20}>
                    <SimpleGrid ml = {{base: 0, sm: 10, md: 0}} columns = {[1, 1, 2, 3]} spacing = {{base: "50px", md: "55px"}} mt = {10} alignItems = "center">
                        <Section delay = {0.1}>
                            <DishGridItem src = {Burger} id = "steak-burger" type = "American" title = "Steak Burger" rating = {3} ingredients = "Beef Steak, Tomato, Lettuce">
                                Intermediate
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.1}>
                            <DishGridItem src = {Couscous} id = "couscous" type = "Mediterranean " title = "Couscous Salad" rating = {4} ingredients = "Couscous, Tomato, Lettuce">
                                Advanced
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.1}>
                            <DishGridItem src = {Pasta} id = "spaghetti" type = "Italian" title = "Spaghetti Bolognese" rating = {4} ingredients = "Spaghetti, Pasta Sauce, Barley">
                                Advanced
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.5}>
                            <DishGridItem src = {Butter} id = "butter-chicken" type = "Indian" title = "Butter Chicken" rating = {4} ingredients = "Chicken Tenders, Tomato, Parsley">
                                Advanced
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.5}>
                            <DishGridItem src = {Beef} id = "beef-wellington" type = "English" title = "Beef Wellington" rating = {3} ingredients = "Beef, Pepper, Crisp">
                                Expert
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.7}>
                            <DishGridItem src = {Rice} id = "fried-rice" type = "Chinese" title = "Fried Rice" rating = {5} ingredients = "Rice, Chicken Breast, Soy Sauce">
                                Amateur
                            </DishGridItem>
                        </Section>
                    </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Dishes