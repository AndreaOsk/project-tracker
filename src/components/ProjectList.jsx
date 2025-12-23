import styles from "./ProjectList.module.css";

function statusClass(status) {
    return status.toLowerCase().replaceAll(" ", "");
  }
  

function ProjectList({ projects, selectedProjectId, onSelectProject}) {
    return ( 
        <div className={styles.cardContainer}>
            {projects.map((project) => {
                const isSelected = project.id === selectedProjectId;

            return (
                <button
                    type="button"
                    key={project.id}
                    className={`${styles.card} ${isSelected ? styles.selected : ""}`}
                    onClick={() => onSelectProject(project)}
                >
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    
                    <span className={`${styles.statusBadge} ${styles[statusClass(project.status)]}`}>
                        {project.status}
                    </span>
                </button>
                );
            })}
        </div>
    );
}

export default ProjectList;