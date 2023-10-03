import ColorInput from "./ColorInput"
import Form from "./Form"
import { cta } from "./data"

const CTA = () => {
  return (
    <>
        <Form fields={cta} />
        <ColorInput name="CTA Color" initial="#000000" />
        <ColorInput name="CTA Text Color" initial="#FFFFFF" />
    </>
  )
}
export default CTA