import { FormContext } from "./page"
import { useContext } from "react"

const Input = ({
    name,
    placeholder,
    isMultiple
}) => {

    const { onChange } = useContext(FormContext)
 
  return (
    <div className="flex flex-col space-y-1">
        {!isMultiple &&
            <label 
                htmlFor={name}
                className="text-sm font-medium"
            >
                {name}
            </label>
        }
        <input 
            type="text" 
            name={name} 
            id={name} 
            placeholder={placeholder}
            className="font-normal px-0 border-t-0 border-x-0 border-b-2 bg-transparent focus:ring-0"
            onChange={onChange}
        />
    </div>
  )
}
export default Input