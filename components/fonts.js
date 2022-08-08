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
    font-family: "Outfit-Bold";
    src:
        url("/fonts/Outfit-Bold.otf")
        format("opentype");
    }

    @font-face {
    font-family: "Galhau";
    src:
        url("/fonts/Galhau_Regular.ttf")
        format("truetype");
    }

    @font-face {
    font-family: "Kunika";
    src:
        url("/fonts/Kunika.otf")
        format("opentype");
    }

    @font-face {
    font-family: "altertype";
    src:
        url("/fonts/altertype.otf")
        format("opentype");
    }

    @font-face {
    font-family: "Creato";
    src:
        url("/fonts/CreatoDisplay-Regular.otf")
        format("opentype");
    }
    
    @font-face {
    font-family: "Creato Bold";
    src:
        url("/fonts/CreatoDisplay-Bold.otf")
        format("opentype");
    }

    @font-face {
    font-family: "Poison";
    src:
        url("/fonts/Poison.otf")
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