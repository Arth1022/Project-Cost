import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import type { Category, Project } from '../../types/project'

type ProjectFormProps = {
  btntext?: string
  handleSubmit: (project: Project) => void
  projectData?: Project
}

const emptyProject: Project = { id: '', name: '', budget: 0, cost: 0 }

const ProjectForm = ({ handleSubmit, btntext, projectData }: ProjectFormProps) => {

  const [categories, setCategories] = useState<Category[]>([])
  const [project, setProject] = useState<Project>(projectData || emptyProject)

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(project)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = categories.find((c) => c.id === e.target.value)
    setProject({ ...project, category })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name || ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Orçamento total"
        handleOnChange={handleChange}
        value={project.budget || ''}
      />
      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category?.id ?? ''}
      />
      <SubmitButton text={btntext || 'Criar projeto'} />
    </form>
  )
}

export default ProjectForm
