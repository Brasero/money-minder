import React, {ChangeEvent, ChangeEventHandler} from "react";
import './input.scss';

interface IInputProps {
    label: string;
    type: string;
    name: string;
    changeMethod: ChangeEventHandler;
    value: any;
    options?: Array<{name: string, value: string, id: number}>;
}

const Input: React.FC<IInputProps> = ({label, name, type, changeMethod, value, options}: IInputProps) => {

    const superHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        if (type === 'number' && value.includes(',')) {
            e.target.value = e.target.value.replace(',', '.')
        }
        changeMethod(e)
    }


    if(type === "select" && name === "category" && options) {
        return (
            <div className={"select_wrapper"}>
                <label htmlFor={name}>
                    <select name={name} value={value} onChange={changeMethod}>
                        {
                            options.map((option, index) => {
                                return <option
                                    value={option.value}
                                    key={`cat-${index}-${option.id}`}
                                >
                                    {option.name}
                                </option>
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
                <input
                    type={type}
                    name={name}
                    placeholder={label}
                    id={name}
                    value={type === 'number' && value === 0 ? '' : value}
                    onChange={type === 'number' ? superHandleChange : changeMethod}
                />
                <span className={'input_label'}>{label}</span>
            </label>
        </div>
    )
}

export default Input;