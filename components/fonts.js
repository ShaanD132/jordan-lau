import {Global} from "@emotion/react"

const Fonts = () => (
    <Global
    styles = {`
    @font-face {
    font-family: "Outfit-Medium";
    src:
        url("/fonts/Outfit-Medium.otf")
        format("opentype");
    }

    @font-face {
    font-family: "Bluu Next";
    src:
        url("/fonts/Galhau_Regular.ttf")
        format("truetype");
    }

    @font-face {
    font-family: "Creato";
    src:
        url("/fonts/CreatoDisplay-Regular.otf")
        format("opentype");
    }

    @font-face {
    font-family: "Zacbel X Medium";
    src:
        url("/fonts/zacbelx-medium.ttf")
        format("truetype");
    }
    `} />
)

export default Fonts