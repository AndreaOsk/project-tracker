import { useState } from "react";
import styles from "./AddProjectForm.module.css"

function AddProjectForm({ onAdd }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd({ name: name.trim()});
        setName("");
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
        <button type="submit" className={styles.button}>Add Project</button>
        </form>
    );
}

export default AddProjectForm