import ActionList from "./ActionList";
import AddActionForm from "./AddActionForm";
import styles from "./ProjectDetail.module.css";

const STATUSES = [
    "Agreement Accepted",
    "Precom",
    "In Construction",
    "Reconciliation",
    "Planned",
    "Complete"
  ];

function getNextStatus (current) {
    const currentIndex = STATUSES.indexOf(current);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (safeIndex + 1) % STATUSES.length;
    return STATUSES[nextIndex];

}

function ProjectDetail({ project, toggleAction, addAction, onDeleteProject, onDeleteAction, onUpdateProjectStatus}) {
    if (!project) return null; // If nothing is selected, render nothing

    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>{project.name}</h2>
            
            
            <label>
                status:{""}
                <select
                    value={project.status}
                    onChange={(e) => onUpdateProjectStatus(project.id, e.target.value)}
                >
                {STATUSES.map((s) => (
                    <option key={s} value={s}>
                        {s}
                    </option>
                ))}
                </select>
            </label>

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
