import Style from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

type ProjectCardProps = {
    // Define any props for the ProjectCard component here
    id: string;
    name: string;
    budget: number | string;
    category: string;
    handleRemove?: (id: string) => void;
};

const ProjectCard = (props : ProjectCardProps) => {

    return (
        <div className={Style.card}>
            <h4>{props.name}</h4>
            <p>
                <span>Orçamento:</span> R${props.budget}
            </p>
            <p>
                <span>Categoria:</span> {props.category}
            </p>
            <div className={Style.actions}>
                <button type="button">
                    <BsPencil /> Editar
                </button>
                <button type="button" onClick={() => props.handleRemove?.(props.id)}>
                    <BsFillTrashFill /> Remover
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;