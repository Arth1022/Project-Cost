import styles from './Project.module.css'
import Container from '../components/layout/Container'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from "react"
import type { Project as ProjectType } from '../types/project'
import Loading from '../components/ui/Loading'
import ProjectForm from '../components/project/ProjectForm'
import Message from '../components/ui/Message'

const Project = () => {

    const {id} = useParams()

    const [project, setProject] = useState<ProjectType | null>(null)
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")

    useEffect(() =>{
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET" ,
            headers: {
                "Content-Type": "application/json"
            }
        } 
        ).then(resp => resp.json())
        .then(data => {
            setProject(data)
        })
        .catch(err => console.log(err))
    }, [id])   

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }

    const toggleServiceForm = () => {
        setShowServiceForm(!showServiceForm)
    }

    const editPost = (project: ProjectType) => {
        setMessage("")
        setType("")
        //budget validation
        if(project.budget < project.cost){
            setMessage("O orçamento não pode ser menor que o custo do projeto!")
            setType("error")
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {

            setProject(data)
            setShowProjectForm(false)
            setMessage("O orçamento foi atualizado com sucesso!")
            setType("success")

        })
        .catch(err => console.log(err))
    }

    return(
      <div>
        {project?.name ? (
            <div>
                <Container customClass="column">
                    {message && <Message type={type} text={message}/>}
                    <div className={styles.project_details}>
                        <div className={styles.details_header}>
                            <h1>Projeto: {project?.name}</h1>
                            <button className={styles.details_button} onClick = {toggleProjectForm}>
                                {!showProjectForm ? "Editar Projeto" : "Fechar"}
                            </button>
                        </div>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project?.category?.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span> R${project?.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado:</span> R${project?.cost}
                                </p>
                                <p>
                                    <span>Serviços:</span> {project?.services?.length}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.form_container}>
                                <ProjectForm 
                                handleSubmit={editPost} 
                                btntext="Concluir Edição" 
                                projectData={project}/>
                            </div>
                        )}
                    </div>
                    <div className={styles.project_services}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.details_button} onClick = {toggleServiceForm}>
                            {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <div className={styles.form_container}>
                                    <p>Formulário de serviço</p>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        <p>Serviços</p>        
                    </Container>
                </Container>
            </div>
        ) : (
            <Loading/>
        )}
      </div>
    )
}

export default Project;