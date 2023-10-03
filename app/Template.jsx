import { FormContext } from "./page"
import { useContext } from "react"
import Frame from "./Frame"
import { useTemplate } from "./functions"

const Template = ({ template }) => {

    const { form } = useContext(FormContext)
    const htmlString = useTemplate(template,form)

    return (
        <Frame height="100%">
            <div
                dangerouslySetInnerHTML={{__html: htmlString}}
                style={{
                    width: "100%",
                    height: "100%",
                    positiong: "relative",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
        </Frame>
    )
}

export default Template