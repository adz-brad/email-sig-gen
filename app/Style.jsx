import ColorInput from "./ColorInput"
import Select from "./Select"
import Range from "./Range"
import { fonts, sizes } from "./data"

const Style = () => {
  return (
    <div className="flex flex-col space-y-4">
      <span className="font-bold">
        Add Some Style
      </span>
      <div className="flex flex-col space-y-6 py-4">
        <ColorInput name="Theme Color" initial="#C21644" />
        <ColorInput name="Text Color" initial="#000000" />
        <ColorInput name="Link Color" initial="#3B50DB" />
        <Select name="Font" options={fonts} />
        <Range 
          name="Sizing" 
          options={sizes}
          defaultOption={1}
        />
      </div>
    </div>
  )
}
export default Style