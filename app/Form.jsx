import Input from "./Input";

const Form = ({fields}) => {
  return (
    <>
        {fields.map((category) => {
            return (
                <div 
                    key={category.title} 
                    className="flex flex-col space-y-4"
                >
                    <span 
                        className="font-bold"
                    >
                        {category.title}
                        </span>
                        <div className="flex flex-col space-y-6 py-4">
                            {category.fields.map((field) => {
                                if(field.hasMultiple){
                                    return (
                                        <div 
                                        key={field.name}
                                        className="flex flex-col space-y-4"
                                        >
                                            <span 
                                                className="text-sm font-medium"
                                            >
                                                {field.name}
                                            </span>
                                            {field.fields.map((multipleField, i) => {
                                                return <Input 
                                                            key={multipleField.name} 
                                                            name={multipleField.name} 
                                                            placeholder={multipleField.placeholder} 
                                                            isMultiple={true}
                                                        />
                                            })}
                                        </div>
                                    )
                                }
                                else {
                                    return <Input 
                                        key={field.name} 
                                        name={field.name} 
                                        placeholder={field.placeholder} 
                                        isMultiple={false}
                                    />
                                }
                            })}
                        </div>
                    
                </div>
            )
        })}
    </>
  )
}
export default Form