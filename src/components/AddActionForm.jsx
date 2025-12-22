import { useState } from "react";

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
            style={{ padding: "4px", marginRight: "4px"}}
            />
        <button type="submit">Add</button>
        </form>
    );
}

export default AddActionForm;