import styles from "./ProjectList.module.css";

function ProjectList({ projects, selectedProjectId, onSelectProject}) {
    return ( 
        <ul className={styles.list}>
            {projects.map((project) => {
                const isSelected = project.id === selectedProjectId;

            return (
                <li 
                    key={project.id}
                    className={`${styles.item} ${
                        isSelected ? styles.selected : ""
                    }`}
                    onClick={() => onSelectProject(project)}
                >
                    {project.name} - {project.status}
                </li>
                );
            })}
        </ul>
    );
}

export default ProjectList;