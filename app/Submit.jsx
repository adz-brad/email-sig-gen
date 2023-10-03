import { FormContext } from "./page"
import { useContext } from "react"
import { useTemplate } from "./functions"
import prettify from "html-prettify"

const Submit = ({ template }) => {
    const { form } = useContext(FormContext)
    const htmlString = useTemplate(template, form)
  return (
    <button 
        onClick={() => console.log(prettify(htmlString))} 
        className="px-4 py-3 bg-[#144dde] text-base-50 font-medium rounded-md hover:shadow-md hover:brightness-110"
    >
    Generate Signature
  </button>
  )
}
export default Submit