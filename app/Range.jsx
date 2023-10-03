import { useState, useContext, useEffect } from "react"
import { FormContext } from "./page"
const Range = ({
    name,
    options,
    defaultOption
}) => {

    const { onChange } = useContext(FormContext)
    
    const [ value, setValue ] = useState(options[defaultOption].value)

    useEffect(() => {
        onChange()
    }, [ value ])

  return (
    <div className="flex flex-col space-y-1">
        <label 
            htmlFor={name}
            className="text-sm font-medium"
        >
            {name}
        </label>
        <input 
            type="range" 
            name={name} 
            id={name}
            min={options[0].value}
            max={options[options.length-1].value}
            step={options[1].value-options[0].value}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="sigGen bg-base-900"
        />
        <span className="text-center pt-2 text-sm">{options[value-1].display}</span>
    </div>
  )
}
export default Range