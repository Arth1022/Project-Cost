import {useLocation} from "react-router-dom";
import Message from "../components/message/Message";
import styles from './Projects.module.css'
import Container from "../components/Container";
import LinkButton from "../components/LinkButton";

function Project() {

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" text={message} />}
      <Container customClass="start">
        <p>Projetos</p>
      </Container>
    </div>
  );
}

export default Project;
