import React, {ChangeEventHandler} from "react";

interface IInputProps {
    label: string;
    type: string;
    name: string;
    changeMethod: ChangeEventHandler;
    value: any;
    options?: Array<{name: string, value: string, id: number}>;
}

const Input: React.FC<IInputProps> = ({label, name, type, changeMethod, value, options}: IInputProps) => {

    if(type === "select" && name === "category" && options) {
        return (
            <div className={"select_wrapper"}>
                <label htmlFor={name}>
                    <select name={name} value={value} onChange={changeMethod}>
                        <option value={''}>---</option>
                        {
                            options.map((option, index) => {
                                return <option value={option.value}
                                               key={`cat-${index}-${option.id}`}>{option.name}</option>
                            })
                        }
                    </select>
                    <span className={'input_label'}>{label}</span>
                </label>
            </div>
        )
    }

    return (
        <div className={"input_wrapper"}>
            <label htmlFor={name}>
                <input type={type} name={name} id={name} value={value} onChange={changeMethod}/>
                <span className={'input_label'}>{label}</span>
            </label>
        </div>
    )
}

export default Input;