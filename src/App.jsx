import {useState, useEffect } from "react";
import styles from "./App.module.css";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";

function App() {
    // Define projects
    const projects = [
    { 
      id: 1, 
      name: "Turweston Road Diversion", 
      status: "Precom",
      actions: [
        {id: 1, name: "Confirm precom", completed: false},
        {id: 2, name: "Book delivery agent", completed: true}
      ] },
    { 
      id: 2,
      name: "Ransom Road", 
      status: "Planned",
      actions: [
        {id: 1, name: "Write Impact Plan", completed: false}
      ] },
    { 
      id: 3, 
      name: "Leyland Trading Estate", 
      status: "Complete",
      actions: []
    }
  ];
  // State declarations
  const [projectsState, setProjectsState] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : projects;
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projectsState));
  })

  const [selectedProject, setSelectedProject] = useState(null);


  
  // Toggle action function
  const toggleAction = (projectId, actionId) => {
    setProjectsState((prevProjects) =>
      prevProjects.map((p) => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          actions: p.actions.map((a) =>
          a.id === actionId ? { ...a, completed: !a.completed } : a
        ), 
        };
      })
    );
    
    //Update selectedProject if it's the one being viewed
    if (selectedProject?.id === projectId) {
      setSelectedProject((prev) => ({
        ...prev,
        actions: prev.actions.map((a) => 
        a.id === actionId ? { ...a, completed: !a.completed} :a
      ),
      }));
    }
  };

  const addAction = (projectId, actionName) => {
    setProjectsState((prevProjects) =>
    prevProjects.map((p) => {
    if (p.id !== projectId) return p;
    const newId = p.actions.length ? Math.max(...p.actions.map(a => a.id)) + 1 : 1; 
    return {
      ...p,
      actions: [...p.actions, { id: newId, name: actionName, completed: false}],
      };
    })
  );

  if (selectedProject?.id === projectId) {
    const newId = selectedProject.actions.length ? Math.max(...selectedProject.actions.map(a => a.id)) + 1 : 1;
    setSelectedProject({
      ...selectedProject,
      actions: [...selectedProject.actions, { id:newId, name: actionName, completed: false}],
    });
  }
};

  //Return - anything after a return in the same function will not run
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project Tracker</h1>

      {/* Pass the state updater into the list*/}
      <ProjectList 
        projects={projectsState} 
        onSelectProject={setSelectedProject}
        />

       {/* Show detail for selected projects*/} 
      <ProjectDetail 
      project={selectedProject}
      toggleAction={toggleAction}
      addAction={addAction}
      />
    </div>
  );

 
  
}

export default App;
