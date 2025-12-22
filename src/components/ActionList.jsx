import styles from "./ActionList.module.css";

function ActionList ({ actions, toggleAction}) {
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
            </li>    
            ))}
        </ul>
    );
}

export default ActionList;