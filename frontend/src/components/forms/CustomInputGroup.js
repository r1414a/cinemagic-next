import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export default function CustomInputGroup({id,name,type, placeholder, icon, required,value, onChange}) {
    return (
        <InputGroup>
            <InputGroupInput 
             id={id} name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange}/>
            <InputGroupAddon>
                {icon}
            </InputGroupAddon>
        </InputGroup>
    )
}