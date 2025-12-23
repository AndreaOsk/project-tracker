import {useState, useEffect } from "react";
import styles from "./App.module.css";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import AddProjectForm from "./components/AddProjectForm";

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
  }, [projectsState]);

  const [selectedProject, setSelectedProject] = useState(null);


  function updateProjectStatus(projectId, newStatus) {
    setProjectsState ((prevProjects) => 
      prevProjects.map((p) =>
        p.id === projectId ? {...p, status: newStatus } : p 
      )
    );

    if (selectedProject?.id === projectId) {
      setSelectedProject((prev) => ({ ...prev, status: newStatus }));
    }
  }

  
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
    setProjectsState(prevProjects =>
      prevProjects.map(p => {
        if (p.id !== projectId) return p;
  
        const newId = p.actions.length
          ? Math.max(...p.actions.map(a => a.id)) + 1
          : 1;
  
        return {
          ...p,
          actions: [
            ...p.actions,
            { id: newId, name: actionName, completed: false }
          ]
        };
      })
    );
  
    // Keep selectedProject in sync
    if (selectedProject?.id === projectId) {
      setSelectedProject(prev => {
        const newId = prev.actions.length
          ? Math.max(...prev.actions.map(a => a.id)) + 1
          : 1;
  
        return {
          ...prev,
          actions: [
            ...prev.actions,
            { id: newId, name: actionName, completed: false }
          ]
        };
      });
    }
  };
  

const addProject = ({ name, status}) => {
  const newId = projectsState.length
  ? Math.max(...projectsState.map((p) => p.id)) + 1 : 1;

  const newProject = {id: newId, name, status, actions: []};

  setProjectsState((prev) => [...prev,newProject]);
};

const deleteProject = (projectId) => {
  setProjectsState(prev => prev.filter(p => p.id !== projectId));

  //If the deleted project is currently selected, clear selection
  if (selectedProject?.id === projectId) {
    setSelectedProject(null);
  }
};

const deleteAction = (projectId, actionId) => {
  setProjectsState(prev =>
    prev.map(p => 
      p.id === projectId
        ? {...p, actions: p.actions.filter(a => a.id !== actionId)}
      : p
    )
  );

if (selectedProject?.id === projectId) {
  setSelectedProject(prev => ({
    ...prev,
    actions: prev.actions.filter(a => a.id !== actionId)
    }));
  }
};

  //Return - anything after a return in the same function will not run
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project Tracker</h1>
     
     <AddProjectForm onAdd={addProject}/>
      <ProjectList 
        projects={projectsState} 
        selectedProjectId={selectedProject?.id}
        onSelectProject={setSelectedProject}
        />

      <ProjectDetail 
      project={selectedProject}
      toggleAction={toggleAction}
      addAction={addAction}
      onDeleteProject={deleteProject}
      onDeleteAction={deleteAction}
      onUpdateProjectStatus={updateProjectStatus}
      />
    </div>
  );

 
  
}

export default App;
