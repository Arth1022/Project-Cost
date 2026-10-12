import { Link } from 'react-router';
import Style from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import type { Project } from '../../types/project';

type ProjectCardProps = {
    // Define any props for the ProjectCard component here
    id: Project['id'];
    name: Project['name'];
    budget: Project['budget'];
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
                <Link to={`/project/${props.id}`}>
                    <BsPencil /> Editar
                </Link>
                <button type="button" onClick={() => props.handleRemove?.(props.id)}>
                    <BsFillTrashFill /> Remover
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;