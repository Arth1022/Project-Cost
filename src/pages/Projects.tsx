import { useLocation } from "react-router-dom";
import Message from "../components/ui/Message";
import styles from './Projects.module.css'
import Container from "../components/layout/Container";
import Loading from "../components/ui/Loading";
import LinkButton from "../components/ui/LinkButton";
import ProjectCard from "../components/project/ProjectCard";

import { useState, useEffect } from "react";


import type { Project } from "../types/project";

const Projects = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectsMessage, setProjectsMessage] = useState("")

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {

    fetch('http://localhost:5000/projects', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json())
    .then(data => {
      console.log(data)
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch(err => console.log(err))
  }, []);

  const removeProject = (id: string) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectsMessage("Projeto removido com sucesso")
    })
    .catch(err => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" text={message} />}
      {projectsMessage && <Message type="success" text={projectsMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard key={project.id} name={project.name} budget={project.budget} category={project.category?.name ?? ''} id={project.id} handleRemove={removeProject} />
        ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
