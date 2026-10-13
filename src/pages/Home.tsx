import styles from './Home.module.css'
import LinkButton from '../components/ui/LinkButton'
import savings from '../assets/img/savings.svg'

const Home = () => {
  return (
    <section className={styles.home}>
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Economia" className={styles.savings} />
    </section>
  )
}

export default Home;