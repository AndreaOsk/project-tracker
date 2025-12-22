import { useState } from "react";
import styles from "./AddProjectForm.module.css"

function AddProjectForm({ onAdd }) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Planned");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd({ name: name.trim(), status});
        setName("");
        setStatus("Planned")
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
        <input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        />

        <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.select}
        >
            <option value="Precom">Precom</option>
            <option value="Planned">Planned</option>
            <option value="Complete">Complete</option>
        </select>
        <button type="submit" className={styles.button}>Add Project</button>
        </form>
    );
}

export default AddProjectForm