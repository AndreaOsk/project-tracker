function ActionList ({ actions, toggleAction}) {
    return (
        <ul>
            {actions.map((action) => (
            <li key={action.id}>
                <input
                type="checkbox"
                checked={action.completed}
                onChange={() => toggleAction(action.id)} 
                />
                {action.name}
            </li>    
            ))}
        </ul>
    );
}

export default ActionList;