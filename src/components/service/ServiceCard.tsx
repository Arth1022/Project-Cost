import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import type { Services } from '../../types/project'

type ServiceProps = {
    id: Services['id'],
    name: Services['name'],
    cost: Services['cost'],
    description: Services['description'],
    handleRemove?: (id: Services['id'], cost: Services['cost']) => void
}

const ServiceCard = (props: ServiceProps) =>{
    return(
        <div className={styles.card}>
            <h4>{props.name}</h4>
            <p>
                <span>Custo total:</span> R${props.cost}
            </p>
            <p>{props.description}</p>
            <div className={styles.actions}>
                <button type="button" onClick={() => props.handleRemove?.(props.id, props.cost)}>
                    <BsFillTrashFill /> Remover
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
