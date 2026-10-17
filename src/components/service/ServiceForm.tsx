import {useState} from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'
import type { Project, Services } from '../../types/project'

type ServiceFormProps = {
    handleSubmit: any,
    btnText: string,
    projectData?: Project
}

const ServiceForm = ({handleSubmit, btnText, projectData}: ServiceFormProps) => {

    const [service,setService] = useState({} as Services)

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        projectData?.services?.push(service)
        handleSubmit(projectData)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}
export default ServiceForm;