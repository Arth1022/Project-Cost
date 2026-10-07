import { useNavigate } from 'react-router-dom'

import ProjectForm from '../components/project/ProjectForm'
import styles from './NewProject.module.css'


const NewProject = () => {

  const navigate = useNavigate()

  const createPost = (project: any) => {
    // Implementation for creating a new project
    project.cost = 0,
    project.services = []
  
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
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
