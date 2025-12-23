import styles from "./ProjectList.module.css";

function ProjectList({ projects, selectedProjectId, onSelectProject}) {
    return ( 
        <div className={styles.cardContainer}>
            {projects.map((project) => {
                const isSelected = project.id === selectedProjectId;

            return (
                <div 
                    key={project.id}
                    className={`${styles.card} ${isSelected ? styles.selected : ""}`}
                    onClick={() => onSelectProject(project)}
                >
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    <p className={styles.cardStatus}>{project.status}</p>
                </div>
                );
            })}
        </div>
    );
}

export default ProjectList;