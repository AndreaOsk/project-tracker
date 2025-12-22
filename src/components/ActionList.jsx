import styles from "./ActionList.module.css";

function ActionList ({ actions, toggleAction, onDeleteAction}) {
    return (
        <ul className={styles.list}>
            {actions.map((action) => (
            <li 
                key={action.id}
                className={`${styles.item} ${action.completed ? styles.completed : ""}`}
                onClick={() => toggleAction(action.id)}
            >
                <input
                    type="checkbox"
                    checked={action.completed}
                    onChange={() => toggleAction(action.id)} 
                    className={styles.checkbox}
                />
                {action.name}
                {onDeleteAction && ( 
                    <button className={styles.deleteButton} onClick={(e) => {
                        e.stopPropagation();
                        onDeleteAction(action.id)
                    }}>
                        x
                    </button>
                )}
                
            </li>    
            ))}
        </ul>
    );
}

export default ActionList;