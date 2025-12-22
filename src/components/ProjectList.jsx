import styles from "./ProjectList.module.css";

function ProjectList ({ projects, onSelectProject}) {
    return ( 
        <ul className={styles.list}>
            {projects.map((project) => (
                <li 
                    key={project.id}
                    className={styles.item}
                    onClick={() => onSelectProject(project)}
                >
                    {project.name} - {project.status}
                </li>
            ))}
        </ul>
    );
}

export default ProjectList;