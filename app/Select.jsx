import { FormContext } from "./page"
import { useContext } from "react"

const Select = ({
    name,
    options
}) => {

    const { onChange } = useContext(FormContext)

  return (
    <div className="flex flex-col space-y-1">
            <label 
                htmlFor={name}
                className="text-sm font-medium"
            >
                {name}
            </label>
        <select
            name={name} 
            id={name} 
            defaultValue={options.length > 0 ? options[0] : null}
            onChange={onChange}
            className="font-normal px-2 border-t-0 border-x-0 border-b-2 bg-transparent focus:ring-0"
        >
            {options.length > 0 &&
                options.map((option) => {
                    return (
                        <option 
                            className="text-base-950" 
                            key={option} 
                            value={option}
                        >
                            {option}
                        </option>
                    )
                })
            }
        </select>
    </div>
  )
}
export default Select