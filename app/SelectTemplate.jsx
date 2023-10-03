import { templates } from "./data"
import Image from "next/image";

const SelectTemplate = ({ template, setTemplate }) => {
    const handleClick = (e,id) => {
        e.preventDefault();
        setTemplate(id)
    }
    return(
        <>
    {templates.map((item) => {
        return (
            <button
                key={item.id}
                className={`relative w-full h-[150px] bg-base-300 rounded-md shadow-md ring-primary-500 ${item.id === template ? "ring-4 brightness-110" : "outline-0 hover:ring-4"}`}
                onClick={(e) => handleClick(e,item.id)}
            >
                <span className="absolute top-2 left-2 text-xs font-semibold text-base-900 z-20 bg-primary-100 py-1 px-2 rounded-md shadow-md">Template {item.id}</span>
                {item.image &&
                    <Image src={item.image} fill={true} className="object-cover rounded-md z-10" alt={`Hungry Ram Email Signature Generator | Template ${item.id}`} />
                }
                {item.id === template && <svg className="text-[#008000] absolute bottom-2 right-2 z-20 bg-base-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415l-7.071 7.07Z"/><path fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z" clipRule="evenodd"/></g></svg>}
            </button>
        )
    })}
    </>
    )
}
export default SelectTemplate