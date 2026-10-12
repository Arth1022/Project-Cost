import { useNavigate } from 'react-router-dom'

import ProjectForm from '../components/project/ProjectForm'
import styles from './NewProject.module.css'
import type { Project } from '../types/project'


const NewProject = () => {

  const navigate = useNavigate()

  const createPost = (formProject: Project) => {
    // sem id: o json-server gera um id aleatório automaticamente
    const { id: _id, ...project } = formProject
    const newProject = { ...project, cost: 0, services: [] }

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject)
    }).then(
      (resp) => resp.json()
    )
    .then((data) => {
      console.log(data)
      navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
    })
    .catch((err) => console.log(err))
  }

  return (
    <section className={styles.newProject}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois criar seu serviço</p>
      <ProjectForm handleSubmit={createPost} />
    </section>
  )
}

export default NewProject
