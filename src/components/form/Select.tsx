import type { ChangeEvent } from 'react'
import styles from './Select.module.css'

type SelectProps = {
    text?: string
    name?: string
    options?: any[]
    handleOnChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    value?: string | number
}

const Select = ({  text, name, handleOnChange, value, options = [] }: SelectProps) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value}>
                <option>
                    Selecione uma opcao
                </option>
                {options.map((option: any) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                        </option>
                ))}
            </select>
        </div>
    )
}

export default Select
