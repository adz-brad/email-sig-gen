import { HexColorPicker } from "react-colorful";
import { useState, useRef, useContext, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { FormContext } from "./page"

const ColorInput = ({name, initial}) => {
    
    const [ color, setColor ] = useState(initial);
    const [ visible, setVisible ] = useState(false)

    const { onChange } = useContext(FormContext)
    
    const ref = useRef(null)
    useOnClickOutside(ref, () => setVisible(false))

    useEffect(() => {
        onChange()
    }, [ color ])

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="text-sm font-medium">
                {name}
            </label>
            {visible && 
                <div ref={ref} className="mx-auto py-4">
                    <HexColorPicker 
                        color={color.length > 0 ? "#000000" : color} 
                        onChange={setColor} 
                    /> 
                </div>
            }
            <div className="flex flex-row items-center space-x-2">
            <svg className="text-base-500 min-h-[20px] min-w-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4h-2M9.53 9l-1.06 6h6l1.06-6h-6Z"/></svg>
                <input 
                    name={name}
                    id={name}
                    type="text" 
                    maxLength={6}
                    onChange={(e) => e.target.value.length > 0 ? setColor(`#${e.target.value}`) : setColor("")}
                    placeholder="000000"
                    value={color.split("#")[1]}
                    onFocus={() => setVisible(false)}
                    className="font-normal px-0 border-t-0 border-x-0 border-b-2 bg-transparent focus:ring-0 w-auto"
                />
                <button 
                    className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-full border-2 border-base-500"
                    style={{
                        backgroundColor:  color.length > 0 ? color : '#000000'
                    }}
                    onClick={(e) => {e.preventDefault();setVisible(!visible)}}
                />
            </div>
        </div>
    )
}
export default ColorInput