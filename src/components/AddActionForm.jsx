import { useState } from "react";
import styles from "./AddActionForm.module.css";

function AddActionForm({onAdd}) {
    const [actionName, setActionName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!actionName.trim()) return;
        onAdd(actionName.trim());
        setActionName("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "8px"}}>
            <input
            type="text"
            value={actionName}
            onChange={(e) => setActionName(e.target.value)}
            placeholder="New action..."
            className={styles.inputWindow}
            />
        <button type="submit" className={styles.addButton}>Add</button>
        </form>
    );
}

export default AddActionForm;