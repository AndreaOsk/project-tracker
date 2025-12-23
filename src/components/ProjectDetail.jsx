import ActionList from "./ActionList";
import AddActionForm from "./AddActionForm";
import styles from "./ProjectDetail.module.css";

function ProjectDetail({ project, toggleAction, addAction, onDeleteProject, onDeleteAction}) {
    if (!project) return null; // If nothing is selected, render nothing

    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>{project.name}</h2>
            <p className={styles.subtle}>Status: {project.status}</p>

            <h3>Actions</h3>
            <ActionList 
            actions={project.actions} 
            toggleAction={(actionId) => toggleAction(project.id, actionId)}
            onDeleteAction={(actionId) => onDeleteAction(project.id, actionId)}
            />

            <AddActionForm onAdd={(name) => addAction(project.id, name)}/>
            
            <button className={styles.deleteProject} onClick={() => onDeleteProject(project.id)}>Delete Project</button>
        </div>
    );

}

export default ProjectDetail;
