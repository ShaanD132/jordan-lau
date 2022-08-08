import { Container, Box, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import DishGridItem from "../components/dish-grid"
import Section from "../components/layouts/section"
import LauDish1 from "../public/images/laudish1.jpg"
import LauDish2 from "../public/images/laudish2.jpg"
import LauDish3 from "../public/images/laudish3.jpg"
import LauDish4 from "../public/images/laudish4.jpg"
import LauDish5 from "../public/images/laudish5.jpg"
import LauDish6 from "../public/images/laudish6.jpg"

const Dishes = () => {
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Box mt = {20}>
                    <SimpleGrid ml = {{base: 0, sm: 10, md: 0}} columns = {[1, 1, 2, 3]} spacing = {{base: "50px", md: "55px"}} mt = {10} alignItems = "center">
                        <Section delay = {0.1}>
                            <DishGridItem src = {LauDish1}  type = "American" difficulty = "Intermediate" rating = {4} ingredients = "Beef Steak, Tomato, Lettuce">
                                Fried Vegetable Salad
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.2}>
                            <DishGridItem src = {LauDish2}  type = "Mediterranean " difficulty = "Amateur" rating = {5} ingredients = "Couscous, Tomato, Lettuce">
                                Fried <br /> Rice
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.3}>
                            <DishGridItem src = {LauDish3} type = "Italian" difficulty = "Advanced" rating = {5} ingredients = "Spaghetti, Pasta Sauce, Spring Onion">
                                Seasoned <br /> Chicken
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.5}>
                            <DishGridItem src = {LauDish4} type = "Indian" difficulty = "Intermediate" rating = {4} ingredients = "Chicken Tenders, Tomato, Parsley">
                                Spaghetti <br /> with Cheese
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.5}>
                            <DishGridItem src = {LauDish5} type = "English" difficulty = "Expert" rating = {3} ingredients = "Beef, Pepper, Crisp">
                                Custard <br /> Bread
                            </DishGridItem>
                        </Section>

                        <Section delay = {0.7}>
                            <DishGridItem src = {LauDish6} type = "Chinese" difficulty = "Intermediate" rating = {3} ingredients = "Rice, Chicken Breast, Soy Sauce">
                                Tuna <br /> Dessert
                            </DishGridItem>
                        </Section>
                    </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Dishes