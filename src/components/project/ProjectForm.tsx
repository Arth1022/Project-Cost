import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'

type Category = {
  id: number | string
  name: string
}

type Project = {
  name: string
  budget: number
  category?: Category
}

type ProjectFormProps = {
  handleSubmit: (project: Project) => void
  projectData?: Project
}

const emptyProject: Project = { name: '', budget: 0 }

const ProjectForm = ({ handleSubmit, projectData }: ProjectFormProps) => {
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
    const category = categories.find((c) => String(c.id) === e.target.value)
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
        placeholder="Insira o orçamento total"
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
      <div>
        <input type="submit" value="Criar projeto" className={styles.submitButton} />
      </div>
    </form>
  )
}

export default ProjectForm
