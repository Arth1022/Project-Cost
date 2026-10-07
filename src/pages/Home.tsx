import styles from './Home.module.css'
import LinkButton from '../components/LinkButton'

const Home = () => {
  return (
    <section className={styles.home}>
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
    </section>
  )
}

export default Home;